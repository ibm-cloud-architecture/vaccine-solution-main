#!/bin/bash

export PROJECT_NAME=coldchain
export CLUSTER_NAME=eda-dev
export ESNS=eventstreams
export SCRAM_USER=app-scram
export TELEMETRY_TOPIC=coldchain-telemetry

oc project $PROJECT_NAME 
echo "------------------ Deploy reefer simulator -------------------"

export KAFKA_BROKERS=$(oc get route -n ${ESNS} ${CLUSTER_NAME}-kafka-bootstrap -o jsonpath="{.status.ingress[0].host}:443")

oc get secret ${SCRAM_USER} -n ${ESNS} -o json | jq -r '.metadata.namespace="'${PROJECT_NAME}'"' | oc apply -f -

oc create configmap reefer-simul-cm \
  --from-literal=KAFKA_CERT=/app/certs/ca.crt \
  --from-literal=KAFKA_MAIN_TOPIC=${TELEMETRY_TOPIC} --from-literal=KAFKA_BROKERS=${KAFKA_BROKERS}

oc create secret generic reefer-simul-secret \
  --from-literal=KAFKA_USER=${SCRAM_USER} \
  --from-literal=KAFKA_PASSWORD=$(oc get secret ${SCRAM_USER} -n ${ESNS} -o jsonpath='{.data.password}')

oc get secret ${CLUSTER_NAME}-cluster-ca-cert -n ${ESNS} -o json | jq -r '.metadata.name="kafka-cluster-ca-cert"' |jq -r '.metadata.namespace="'${PROJECT_NAME}'"' | oc apply -f -

oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-reefer-simulator/master/config/app-deployment.yaml

export SIMULATOR_URL=$(oc get route vaccine-reefer-simulator -o jsonpath="http://{.status.ingress[0].host}")

curl -X GET $SIMULATOR_URL/control -H "accept: application/json"

curl -X POST $SIMULATOR_URL/control -H "accept: application/json" -H "Content-Type: application-json" -d "{ \"containerID\": \"C10\", \"nb_of_records\": 10, \"product_id\": \"covid-19\", \"simulation\": \"normal\"}"