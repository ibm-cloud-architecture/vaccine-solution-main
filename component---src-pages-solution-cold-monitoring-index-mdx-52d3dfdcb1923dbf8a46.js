(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{KjNM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=c("PageDescription"),l=c("AnchorLinks"),p=c("AnchorLink"),b={_frontmatter:r},u=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(u,o({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},"This microservice aims to monitor the cold-chain over time and to assess if the refrigerator is still running according to specifications."),Object(a.b)(l,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(a.b)(p,{mdxType:"AnchorLink"},"Build"),Object(a.b)(p,{mdxType:"AnchorLink"},"Usage Details")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,"The reefer monitoring agent gets telemetry events from the ",Object(a.b)("inlineCode",{parentName:"p"},"telemetries")," Kafka topic and processes them using stateful operation on time window, and then creates reefer-cold-chain-violation event to the ",Object(a.b)("inlineCode",{parentName:"p"},"reefer")," Kafka topic in case the temperature goes over a define threshold over a specific time period. For each received metrics it can, optionally, call an anomaly detection service to compute the risk of failure. "),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACV0lEQVQoz32Tz2sTQRTHF+9e+gd4Vax6EUVQEPTqKcWiB0ERr0JBpRdBqXio1qgpCnqoqI0xnvxBq4K00dhCU22sJiQxibFJk2w2yf7I/sz++Dozm7R40Lc83sy89z4z780s58GD67mgX3/cVjS0ZF/FjgaHrIH6XBdW1waVmXgaA0euYOfwBLYdu44Dp0MslqMACnJchwXmSg1sH7qBPSeD2H3iFgaPTyDx7TfloSMb0DXLB8ZSOHR2EueuRTE8+hiBi4/IAdRNoGl2WWCxLGDfqSCGLkwhQPTgmTtYza4zn+04rBIqpXoLocg87j2PIfRsHpG3CRiW5QOptNttqJrKxoqqoqNpPauD5xvQdI35urZf8vTrL+AGRzBw9Cq27B9lZTclckJaqu10oaoaTMvsle4x9UjPHHIqXTfY6WglVg/4ebmA8+MvcDc8h7EHsxh7OAtVN8F1bQs1QUAylUO13iCJNnTDQCpXQLnCs7lhGRsX9j+hMRwd/Pi1jifvFpEjACo07VU8ibmvGTa3+kCikfcrCIY/4vb0J9x8GkOqWPdbQftLNuQo9ycBvVlYRaZUgUF6JUoSPiynkMyXISoKFtMVtr8gSNgRGAe39xK2Hr4MbtcIJqPxv4FtRYesGURNlCpVpEmpVKt8E5JiQJA6SJc7rI+1Oo/wbAJTLxcQnlnC/WgMK5k1BnRc/7VwUlOGRpKaNQHFbB61tSqxBRQyeUiCCIX4lZbMEv4l/afHgG6rBVcUAVmCwdfxPR5HNrHE1jxJZNZt8BuXQsF9tan1Nv8wav8AFJwS0zRArBEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cold monitoring 1",title:"cold monitoring 1",src:"/vaccine-solution-main/static/592098bb7c68d4abdb6525813e4be606/3cbba/cold-monitoring-1.png",srcSet:["/vaccine-solution-main/static/592098bb7c68d4abdb6525813e4be606/7fc1e/cold-monitoring-1.png 288w","/vaccine-solution-main/static/592098bb7c68d4abdb6525813e4be606/a5df1/cold-monitoring-1.png 576w","/vaccine-solution-main/static/592098bb7c68d4abdb6525813e4be606/3cbba/cold-monitoring-1.png 1152w","/vaccine-solution-main/static/592098bb7c68d4abdb6525813e4be606/f5f59/cold-monitoring-1.png 1522w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"In case of cold chain violation the impacted vaccine lots needs to be reported as spoiled via new records logged to the blockchain hyperledger. This is the responsability of the reefer manager microservice has it has visibility of the loaded vaccine lots for each container. Telemetry events have information on the sensors and the geolocation of the reefer."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Github repository:")," ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent"}),"vaccine-monitoring-agent")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics consumed from:")," telemetries as defined by:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"apiVersion: kafka.strimzi.io/v1beta1\n  kind: KafkaTopic\n  metadata:\n    name: telemetries\n    labels:\n      strimzi.io/cluster: event-streams\n  spec:\n    partitions: 10\n    replicas: 3\n    config:\n      retention.ms: 14400000\n      segment.bytes: 1073741824\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics produced to:")," reefers in case of anomaly detection or cold chain violation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events reacted to:")," telemetry events like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),"public class TelemetryEvent {\n\n    public String containerID;\n    public Telemetry payload;\n    public String timestamp;\n    public String type;\n")),Object(a.b)("p",null,"and the payload:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"})," public String container_id;\n    public String measurement_time;\n    public String product_id;\n    public double temperature;\n    public double target_temperature; \n    public double ambiant_temperature; \n    public double kilowatts; \n    public double time_door_open;\n    public int content_type; \n    public int defrost_cycle;\n    public double oxygen_level; \n    public double nitrogen_level; \n    public double humidity_level;\n    public double target_humidity_level;\n    public double carbon_dioxide_level; \n    public boolean fan_1; \n    public boolean fan_2; \n    public boolean fan_3;\n    public double latitude;\n    public double longitude;\n  \n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events produced:")," reefer anomaly detected and reefer cold chain violated"),Object(a.b)("h3",null,"Code structure"),Object(a.b)("p",null,"The API is supported by the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/master/src/main/java/ibm/gse/eda/vaccine/coldchainagent/api/ContainerResource.java"}),"ContainerResource")," class which exposes interactive query on the container id."),Object(a.b)("p",null,"The core of the process is a Kafka Streams topology in the class ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/master/src/main/java/ibm/gse/eda/vaccine/coldchainagent/domain/TelemetryAssessor.java"}),"TelemetryAssessor"),"."),Object(a.b)("p",null,"The ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/b591e6e338cb8e9a5a8da5dde44d299f669d2309/src/main/java/ibm/gse/eda/vaccine/coldchainagent/domain/TelemetryAssessor.java#L86-L133"}),"topology")," processes telemetry records and build a new streams with the containerID as key, and the telemetry payload as value. Then it builds a Ktable to keep aggregate per container. The aggregate is defined in ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/master/src/main/java/ibm/gse/eda/vaccine/coldchainagent/domain/ReeferAggregate.java"}),"this ReeferAggregate class")," and aims to keep max Temperature read so far, the number of time the maximum temperature is violated.\nFinally when a container reaches the maximum number of temperature violation, a new message is sent to a ‘reefer’ topic for down stream processing."),Object(a.b)("p",null,"If you need to learn more on Kafka streams read ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/kafka-streams/"}),"this introduction")," and do ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/use-cases/kafka-streams/"}),"those labs")," to learn more on how to program with Kafka Streams."),Object(a.b)("p",null,"The nice capability of Quarkus app, is most of the work is in the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent/blob/master/src/main/resources/application.properties"}),"application.properties")," configuration. The highlights of this configuration is the fact that once deploy to OpenShift the environment variables are defined in config map and secret:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"quarkus.openshift.env.configmaps=agent-cm\nquarkus.openshift.env.secrets=agent-secrets\n")),Object(a.b)("p",null,"The SSL certificate for the server and the user are coming from secrets:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"quarkus.openshift.env.vars.KAFKA_CERT_PATH=/deployments/certs/server/ca.p12\nquarkus.openshift.env.mapping.KAFKA_CERT_PWD.from-secret=kafka-cluster-ca-cert\nquarkus.openshift.env.mapping.KAFKA_CERT_PWD.with-key=ca.password\nquarkus.openshift.mounts.es-cert.path=/deployments/certs/server\nquarkus.openshift.secret-volumes.es-cert.secret-name=kafka-cluster-ca-cert\n# TLS user\nquarkus.openshift.env.mapping.USER_CERT_PWD.from-secret=${KAFKA_USER}\nquarkus.openshift.env.mapping.USER_CERT_PWD.with-key=user.password\nquarkus.openshift.env.vars.USER_CERT_PATH=/deployments/certs/user/user.p12\nquarkus.openshift.mounts.user.path=/deployments/certs/user\nquarkus.openshift.secret-volumes.user.secret-name=${KAFKA_USER}\n")),Object(a.b)("p",null,"The outgoing message sent to Kafka ",Object(a.b)("inlineCode",{parentName:"p"},"reefer")," topic is done via microprofile reactive messaging configuration and plugin:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"mp.messaging.outgoing.reefers.connector=smallrye-kafka\nmp.messaging.outgoing.reefers.topic=${REEFER_TOPIC:vaccine-reefers}\nmp.messaging.outgoing.reefers.key.serializer=org.apache.kafka.common.serialization.StringSerializer\nmp.messaging.outgoing.reefers.value.serializer=io.quarkus.kafka.client.serialization.JsonbSerializer\n")),Object(a.b)("p",null,"Then the last part if for Kafka Streams."),Object(a.b)("h2",null,"Build"),Object(a.b)("p",null,"As a quarkus application it is possible to run locally with ",Object(a.b)("inlineCode",{parentName:"p"},"./mvnw quarkus:dev"),". It is important to configure a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file with the needed environment variables to remote connect to Kafka Cluster using a SCRAM user:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"export KAFKA_USER=app-scram\nexport KAFKA_PASSWORD=<>\nexport KAFKA_BOOTSTRAP_SERVERS=eda-dev-kafka-bootstrap-eventstreams.<....>.cloud:443\nexport KAFKA_SSL_TRUSTSTORE_LOCATION=${PWD}/certs/truststore.p12\nexport KAFKA_SSL_TRUSTSTORE_PASSWORD=<>\nexport TELEMETRY_TOPIC=coldchain-telemetries\nexport REEFER_TOPIC=coldchain-reefers\nexport PREDICTION_ENABLED=false\nexport EDA_LOGGING_LEVEL=INFO\nexport KAFKA_SASL_MECHANISM=SCRAM-SHA-512\n")),Object(a.b)("p",null,"See the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent"}),"repository readme")," to build and run it locally or to deploy to openshift. "),Object(a.b)("p",null,"Also the ",Object(a.b)("a",o({parentName:"p"},{href:"/vaccine-solution-main/use-cases/cold-chain/"}),"cold chain monitoring use case")," presents how to deploy on openshift, but it uses the Kubernetes config and source to image capability so one command will build and deploy to OpenShift:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"./mvnw clean package -Dquarkus.kubernetes.deploy=true -DskipTests\n")),Object(a.b)("h2",null,"Usage details"),Object(a.b)("p",null,"The demonstration script for this component is described in the ",Object(a.b)("a",o({parentName:"p"},{href:"/vaccine-solution-main/use-cases/cold-chain/"}),"cold chain monitoring use case"),". "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-cold-monitoring-index-mdx-52d3dfdcb1923dbf8a46.js.map