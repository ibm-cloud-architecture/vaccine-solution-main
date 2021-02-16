#!/bin/bash

export PROJECT_NAME=vaccineorder
export CLUSTER_NAME=eda-dev
export EVENTSTREAMS_NS=eventstreams
export SCRAM_USER=app-scram
export TELEMETRY_TOPIC=coldchain-telemetry

oc project $PROJECT_NAME 
echo "------------------ Deploy Postgresql-------------------"


echo "------------------ Get EventStreams / Kafka Credentials -------------------"
export KAFKA_BROKERS=$(oc get route -n ${EVENTSTREAMS_NS} ${CLUSTER_NAME}-kafka-bootstrap -o jsonpath="{.status.ingress[0].host}:443")

oc get secret ${SCRAM_USER} -n ${EVENTSTREAMS_NS} -o json | jq -r '.metadata.namespace="'${PROJECT_NAME}'"' | oc apply -f -

oc create configmap reefer-simul-cm \
  --from-literal=KAFKA_CERT=/app/certs/ca.crt \
  --from-literal=KAFKA_MAIN_TOPIC=${TELEMETRY_TOPIC} --from-literal=KAFKA_BROKERS=${KAFKA_BROKERS}

oc create secret generic reefer-simul-secret \
  --from-literal=KAFKA_USER=${SCRAM_USER} \
  --from-literal=KAFKA_PASSWORD=$(oc get secret ${SCRAM_USER} -n ${ESNS} -o jsonpath='{.data.password}')

oc get secret ${CLUSTER_NAME}-cluster-ca-cert -n ${EVENTSTREAMS_NS} -o json | jq -r '.metadata.name="kafka-cluster-ca-cert"' |jq -r '.metadata.namespace="'${PROJECT_NAME}'"' | oc apply -f -

echo "------------------ Deploy Order Manager Service -------------------"