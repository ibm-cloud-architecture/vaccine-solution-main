(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{PtbQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n("wx14"),r=n("zLVn"),a=(n("q1tI"),n("7ljp")),i=n("013z"),c=(n("qKvR"),{}),s={_frontmatter:c},l=i.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(l,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"An alternate approach is to setup a CI/CD pipeline"),Object(a.b)("p",null,"We have adopted the Git Action to manage the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-kc-gitops/blob/master/KContainer-CI-Strategy.md"},"continuous integration"),", and ArgoCD for the continuous deployment. The build process will build the following images:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[https://hub.docker.com/repository/docker/ibmcase/kcontainer-reefer-simulator]")),Object(a.b)("p",null,"Helm charts are added for the simulator and the scoring agent, using ",Object(a.b)("inlineCode",{parentName:"p"},"helm create")," command, and then the values.yaml and deployment.yaml files were updated to set environment variables and other parameters."),Object(a.b)("h2",null,"Test sending a simulation control to the POST api"),Object(a.b)("p",null,"The script ",Object(a.b)("inlineCode",{parentName:"p"},"sendSimulControl.sh")," is used for that. The usage looks like:  ",Object(a.b)("inlineCode",{parentName:"p"},"sendSimulControl.sh hostname simultype (co2sensor | o2sensor | poweroff) containerID nb_of_records")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pwd\nrefarch-reefer-ml\n./scripts/sendSimulControl.sh reefersimulatorroute-reefershipmentsolution.apps.green-with-envy.ocp.csplab.local co2sensor C01 2000\n")),Object(a.b)("p",null,"If you use no argument for this script, it will send co2sensor control to the service running on our openshift cluster on IBM Cloud."),Object(a.b)("p",null,"Looking at the logs from the pod using ",Object(a.b)("inlineCode",{parentName:"p"},"oc logs reefersimulator-3-jdh2v")," you can see something like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"     \"POST /order HTTP/1.1\" 404 232 \"-\" \"curl/7.54.0\"\n    {'containerID': 'c100', 'simulation': 'co2sensor', 'nb_of_records': 10, 'good_temperature': 4.4}\n    Generating  10  Co2 metrics\n")),Object(a.b)("p",null,"We will see how those events are processed in the next section."),Object(a.b)("h2",null,"The predictive scoring agent"),Object(a.b)("p",null,"Applying the same pattern as the simulation webapp, we implement a kafka consumer and producer in python that calls the serialized analytical model. The code in the ",Object(a.b)("inlineCode",{parentName:"p"},"scoring\\eventConsumer")," folder."),Object(a.b)("p",null,"Applying a TDD approach we start by a TestScoring.py class."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"import unittest\nfrom domain.predictservice import PredictService\n\nclass TestScoreMetric(unittest.TestCase):\n    def testCreation(self):\n        serv = PredictService\n        \nif __name__ == '__main__':\n    unittest.main()\n")),Object(a.b)("p",null,"Use the same python environment with docker:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./startPythonEnv\nroot@1de81b16f940:/# export PYTHONPATH=/home/scoring/eventConsumer\nroot@1de81b16f940:/# cd /home/scoring/eventConsumer\nroot@1de81b16f940:/home/scoring/eventConsumer# python tests/TestScoring.py \n")),Object(a.b)("p",null,"Test fails, so let add the scoring service with a constructor, and load the serialized pickle model (which was copied from the ml folder)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'import pickle\n\nclass PredictService:\n    def __init__(self,filename = "domain/model_logistic_regression.pkl"):\n        self.model = pickle.load(open(filename,"rb"),encoding=\'latin1\')\n    \n    \n    def predict(self,metricEvent):\n        TESTDATA = StringIO(metricEvent)\n        data = pd.read_csv(TESTDATA, sep=",")\n        data.columns = data.columns.to_series().apply(lambda x: x.strip())\n        X = data[ X = data[FEATURES_NAMES]]\n        return self.model.predict(X)\n    \n')),Object(a.b)("p",null,"Next we need to test a predict on an event formated as a csv string. The test looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'    serv = PredictService()\n    header="""Timestamp, ID, Temperature(celsius), Target_Temperature(celsius), Power, PowerConsumption, ContentType, O2, CO2, Time_Door_Open, Maintenance_Required, Defrost_Cycle"""\n    event="2019-04-01 T16:29 Z,1813, 101, 4.291843460900875,4.4,0,10.273342381017777,3,4334.920958996634,4.9631508046318755,1,0,6"""\n    record=header+"\\n"+event\n    print(serv.predict(record))\n')),Object(a.b)("p",null,"So the scoring works, now we need to code the scoring application that will be deployed to Openshift cluster, and which acts as a consumer of container metrics events and a producer container events. "),Object(a.b)("p",null,"The Scoring Agent code of this app is ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/scoring/ScoringAgent.py"},"ScoringAgent.py")," module. It starts a consumer to get messages from Kafka. And when a message is received, it needs to do some data extraction and transformation and then use the predictive service."),Object(a.b)("p",null,"During the tests we have issue in the data quality, so it is always a good practice to add a validation function to assess if all the records are good. For production, this code needs to be enhanced for better error handling an reporting."),Object(a.b)("h3",null,"Run locally"),Object(a.b)("p",null,"Under ",Object(a.b)("inlineCode",{parentName:"p"},"scoring\\eventConsumer")," folder, set the environment variables for KAFKA using the commands below: (It uses event streams on IBM Cloud)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'export KAFKA_BROKERS=broker-3.eventstreams.cloud.ibm.com:9093,broker-1.eventstreams.cloud.ibm.com:9093,broker-0.eventstreams.cloud.ibm.com:9093,broker-5.eventstreams.cloud.ibm.com:9093,broker-2.eventstreams.cloud.ibm.com:9093,broker-4.eventstreams.cloud.ibm.com:9093\nexport KAFKA_APIKEY="set-api-key-for-eventstreams-on-cloud"\n\ndocker run -e KAFKA_BROKERS=$KAFKA_BROKERS -e KAFKA_APIKEY=$KAFKA_APIKEY  -v $(pwd)/..:/home -ti ibmcase/python bash -c "cd /home/scoring && export PYTHONPATH=/home && python ScoringAgent.py"\n')),Object(a.b)("h3",null,"Scoring: Build and run on Openshift"),Object(a.b)("p",null,"The first time we need to add the application to the existing project, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"oc new-app python:latest~https://github.com/ibm-cloud-architecture/refarch-reefer-ml.git --context-dir=scoring/eventConsumer --name reeferpredictivescoring\n")),Object(a.b)("p",null,"This command will run a source to image, build all the needed yaml files for the kubernetes deployment and start the application in a pod. It use the ",Object(a.b)("inlineCode",{parentName:"p"},"--context")," flag to define what to build and run. With this capability we can use the same github repository for different sub component."),Object(a.b)("p",null,"As done for simulator, the scoring service needs environment variables. We can set them using the commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"oc set env dc/reeferpredictivescoring KAFKA_BROKERS=$KAFKA_BROKERS\noc set env dc/reeferpredictivescoring KAFKA_APIKEY=$KAFKA_APIKEY\noc set env dc/reeferpredictivescoring KAFKA_CERT=/opt/app-root/src/es-cert.pem\n")),Object(a.b)("p",null,"but we have added a script for you to do so. This script needs only to be run at the first deployment. It leverage the common setenv scripts:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"../scripts/defEnvVarInOpenShift.sh \n")),Object(a.b)("p",null,"The list of running pods should show the build pods for this application:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," oc get pods\n reeferpredictivescoring-1-build   1/1       Running      0          24s\n")),Object(a.b)("p",null,"To run the build again after commit code to github:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"oc start-build reeferpredictivescoring \n\n# or from local file system\noc start-build reeferpredictivescoring --from-file=.\n")),Object(a.b)("p",null,"To see the log:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," oc logs reeferpredictivescoring-2-rxr6j\n")),Object(a.b)("p",null,"To be able to run on Openshift, the APP_FILE environment variable has to be set to ScoringApp.py. This can be done in the ",Object(a.b)("inlineCode",{parentName:"p"},"environment")," file under the ",Object(a.b)("inlineCode",{parentName:"p"},".s2i ")," folder."),Object(a.b)("p",null,"The scoring service has no API exposed to the external world, so we do not need to create a ",Object(a.b)("inlineCode",{parentName:"p"},"Route")," or ingress."),Object(a.b)("p",null,"See the ",Object(a.b)("a",{parentName:"p",href:"#integration-tests"},"integration test")," section to see a demonstration of the solution end to end."),Object(a.b)("h3",null,"Build docker images"),Object(a.b)("p",null,"For the scoring agent:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# scoring folder\n\n")),Object(a.b)("h4",null,"Run kafka on your laptop"),Object(a.b)("p",null,"For development purpose, you can also run kafka, zookeeper and postgresql and the solution on your laptop. For that read ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docker/README.md"},"this readme")," for details."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-devops-build-run-mdx-4e3b0d5fdc6c611b6d88.js.map