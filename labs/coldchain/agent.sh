#!/bin/bash

export PROJECT_NAME=coldchain
export CLUSTER_NAME=eda-dev
export ESNS=eventstreams
export TLS_USER=tls
export YOUR_SUFFIX=jb
export CP4D_USER=jboyer
export CP4D_APIKEY=YdnIRC3WnuBziDvq98J00t4Crq8BtwsixwtKiALa
export CP4D_AUTH_URL=https://zen-cpd-zen.apps.cpdv35-swat.cpd-daell.com/icp4d-api/v1/authorize
export ANOMALY_DETECTION_URL=https://zen-cpd-zen.apps.cpdv35-swat.cpd-daell.com/ml/v4/deployments/b1a0710f-6fff-4e5f-81a6-4c6e3662df1f/predictions?version=2021-01-28

oc project $PROJECT_NAME 
echo "------------------ Deploy monitoring agent -------------------"


oc get secret ${TLS_USER} -n ${ESNS} -o json | jq -r '.metadata.namespace="'${PROJECT_NAME}'"' | oc apply -f -

oc create configmap agent-cm \
  --from-literal=REEFER_TOPIC=${PROJECT_NAME}-reefers \
  --from-literal=TELEMETRY_TOPIC=${PROJECT_NAME}-telemetry \
  --from-literal=KAFKA_BOOTSTRAP_SERVERS=${CLUSTER_NAME}-kafka-bootstrap.eventstreams.svc:9093 \
  --from-literal=QUARKUS_KAFKA_STREAMS_APPLICATION_ID=cold-chain-agent-${YOUR_SUFFIX} \
  --from-literal=KAFKA_SECURITY_PROTOCOL=SSL \
  --from-literal=PREDICTION_ENABLED=true
  

oc create secret generic agent-secrets \
  --from-literal=ANOMALY_DETECTION_URL=${ANOMALY_DETECTION_URL} \
  --from-literal=KAFKA_USER=${TLS_USER} \
  --from-literal=CP4D_USER=${CP4D_USER} \
  --from-literal=CP4D_APIKEY=${CP4D_APIKEY} \
  --from-literal=CP4D_AUTH_URL=${CP4D_AUTH_URL}
 

oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/vaccine-monitoring-agent/master/src/main/kubernetes/openshift.yml

export AGENT_URL=$(oc get route reefer-monitoring-agent -o jsonpath="http://{.status.ingress[0].host}")

