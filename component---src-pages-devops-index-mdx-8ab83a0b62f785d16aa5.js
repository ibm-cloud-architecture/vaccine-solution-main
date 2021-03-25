(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{pb9N:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),p=n("013z"),r=(n("qKvR"),{}),c={_frontmatter:r},l=p.a;function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Development flow"),Object(o.b)("p",null," ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnklEQVQoz1WS/Y7SUBDF+8i+iE/gf76AiZqYuLvxCxeJK5iNmiwui4DQ7ZYChZb2fvXnTBGik0w6k84958y5N3Le0zSBEAJecu8axnFBPB6TPNxjjCE0DRo646ylrg372lJWhnIv/22gNg7nA9EkrXh8lvH2e8q36wGXvSsGtym+KrCmbEGsE0LBVLK7n1Pm0wm73YZ+f8Cbzju6o5uWsDKWaJTsefR0xIurmHK74mG5xviGVdkgxFgvQFJ4BTSe/ignXVuKsiZJM+7XG26XCUYGa+uIrFAX2YrZbMEmzzHOC5ijPy7Y1rKKqNJVNPzf7zFUtQvH+jAXuX+G4lXBIt3IOjlNMK2nRk5UCipjtajQPt/K3GIhCpdCGFoixbEiJlIgI8Yiq80zmCz5X0UIJzWlmi/tPE54/6HDx26PXbmXSz2o04tpAeezIc87T/hyd8Zgds717w690UummZgtQPoKNJxYYzY52ilAviuo5MaP6k4KsyLj8/icTzcXXHx9xuWP13SHr/iVDk+A+nAaMd1LunBY0zrX2qK1pir9A31PY0Cv/nSvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/b488bccea3aa404fc109c922ca634085/3cbba/appsody-flow.png",srcSet:["/vaccine-solution-main/static/b488bccea3aa404fc109c922ca634085/7fc1e/appsody-flow.png 288w","/vaccine-solution-main/static/b488bccea3aa404fc109c922ca634085/a5df1/appsody-flow.png 576w","/vaccine-solution-main/static/b488bccea3aa404fc109c922ca634085/3cbba/appsody-flow.png 1152w","/vaccine-solution-main/static/b488bccea3aa404fc109c922ca634085/a5e39/appsody-flow.png 1492w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("h2",null,"GitOps"),Object(o.b)("p",null,"Our Continuous Integration (CI) approach is one of ",Object(o.b)("em",{parentName:"p"},"“zero-infrastructure overhead”"),", as such Cloud Pak for application and the garage team have adopted ",Object(o.b)("a",{parentName:"p",href:"https://www.gitops.tech/#what-is-gitops"},"GitOps")," where a ",Object(o.b)("a",{parentName:"p",href:"https://github.ibm.com/vaccine-cold-chain/gitops-dev"},"specific git repository")," contains declarative descriptions of the infrastructure currently desired environments (dev, staging, production), combined with ",Object(o.b)("a",{parentName:"p",href:""},"Appsody deploy")," commands and ",Object(o.b)("a",{parentName:"p",href:"#tekton-pipeline"},"Tekton")," to automate the devops pipeline."),Object(o.b)("p",null,"Each application repository includes deployment manifests (app-deploy.yaml) to configure the application at deployment time.  "),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.ibm.com/vaccine-cold-chain/gitops-dev"},"gitops-dev")," repository contains all deployment manifests of the currently desired infrastructure of an deployment environment."),Object(o.b)("p",null,"We are using a pull-based deployments, where the build pipeline is triggered by a pull requests or a commit on the application repository, and an operator, running in the solution namespace, is continuously comparing the desired state in the environment repository with the actual state in the deployed infrastructure."),Object(o.b)("h2",null,"Tekton Pipeline"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://tekton.dev/"},"Tekton")," is an open source project that provides a framework to create cloud-native CI/CD pipelines quickly. As a Kubernetes-native framework, Tekton makes it easier to deploy across multiple cloud providers or hybrid environments."),Object(o.b)("h3",null,"Pre-requisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://appsody.dev/docs/using-appsody/deploying/"},"Have Appsody CLI install locally and Appsody Operator deployed to your OpenShift cluster"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:""},"Your OpenShift cluster can access the github repository where the source code resides"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:""},"Your OpenShift cluster can access a docker registry like docker hub or internal registry within the cluster"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Defined a secret for docker registry credential: "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"First if not done before, create an access token to your dockerhub account, using the setting > security option."),Object(o.b)("li",{parentName:"ul"},"Then execute: ",Object(o.b)("inlineCode",{parentName:"li"},"oc create secret generic dockerhub-secret --from-literal=token=<you-created-token-on-dockerhub>")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli#installing-tkn"},"Have Tekton CLI installed")))),Object(o.b)("h3",null,"Install Tekton pipeline"),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/pipeline/blob/master/docs/install.md"},"instructions here")," which can be summarized by the following steps:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# create dedicated pipeline project\noc new-project tekton-pipelines\n# Give access to current user and to the appsody service account.\noc adm policy add-scc-to-user anyuid -z tekton-pipelines-controller\n# install tekton\noc apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.notags.yaml\n# Verify pods are started\noc get pods --namespace tekton-pipelines --watch\n\nNAME                                           READY     STATUS    RESTARTS   AGE\ntekton-pipelines-controller-6ff7d8f9bf-k7ks2   1/1       Running   0          4m\ntekton-pipelines-webhook-7986458f5f-kr78z      1/1       Running   0          4m\n# Add persistence volume\noc apply -f tektom/pv.yaml\n")),Object(o.b)("p",null,"For a given solution including multiple components deployed as pods, in the same namespace it is recommended to create a service account like the following manifest."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: vaccine-solution-sa\nsecrets:\n    - name: dockerhub-secret\n---  \napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: appsody-admin\nsubjects:\n- kind: ServiceAccount\n  name: vaccine-solution-sa \n  namespace: vaccine-cold-chain\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin\n  apiGroup: rbac.authorization.k8s.io\n")),Object(o.b)("p",null,"One of such file is in the gitops-ev project. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc apply -f tekton/appsody-tekton.yaml\n")),Object(o.b)("h3",null,"Application deployment"),Object(o.b)("p",null,"Each application is built with Appsody and deployed via Appsody operator. Defined in the ",Object(o.b)("a",{parentName:"p",href:"https://github.ibm.com/vaccine-cold-chain/gitops-dev/tree/master/tekton"},"tekton directory")," of the gitops-dev project, we have a simple pipeline that will utilize the appsody deploy command to deploy the generated AppsodyApplication CRD YAML to the target environment."),Object(o.b)("p",null,"Tekton Pipelines run on the same cluster (and often in the same namespace!) as your running application code, thus allowing for more programmatic control over the deployment, management, operations, and existence of your application components. The key artifact that enables Tekton to deploy any Appsody-based microservice is the generated ",Object(o.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file. "),Object(o.b)("p",null,"We need to define a pipeline which may look the same for each project. Still for clear separation of concern, each java projet includes a ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/tekton")," folder with the needed pipeline, resources and task manifests. Here is an example of pipeline: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1alpha1\nkind: Pipeline\nmetadata:\n  name: appsody-build-pipeline\nspec:\n  resources:\n    - name: git-source\n      type: git\n    - name: docker-image\n      type: image\n  tasks:\n    - name: appsody-build\n      taskRef:\n        name: appsody-build-push-deploy-task\n      resources:\n        inputs:\n        - name: git-source\n          resource: git-source\n        - name: docker-image\n          resource: docker-image\n      params:\n      - name: app-deploy-file-name\n        value: app-deploy.yaml\n")),Object(o.b)("p",null,"and pipeline resources that define the target docker image name and the URL of the source repository, those resources are per project. See an example ",Object(o.b)("a",{parentName:"p",href:""},"here")),Object(o.b)("p",null,"The pipeline is executing a Tekton task named ",Object(o.b)("inlineCode",{parentName:"p"},"appsody-build-push-deploy-task")," and example can be found ",Object(o.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/appsody/tekton-example/master/appsody-build-push-deploy.yaml"},"here"),". "),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"appsody build")," is executed the deployment manifest for the application (app-deploy.yaml file) is created or updated, the deployment will use this file for the ",Object(o.b)("inlineCode",{parentName:"p"},"oc apply ")," command."),Object(o.b)("p",null,"The image url must match the definition of the Docker image resource that you created for the pipeline."),Object(o.b)("p",null,"To run the pipeline manually use the pipeline-run manifest. For example for the reefer monitorign service the manifest is under the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc apply -f scripts/reefer-monitoring-pipeline-run.yaml \n# verify the pipeline run\ntkn pipelinerun list\nNAME                                  STARTED          DURATION   STATUS\nreefer-monitoring-pipeline-run-task   31 seconds ago   ---        Running\n")),Object(o.b)("p",null,"Once the ",Object(o.b)("inlineCode",{parentName:"p"},"appsody deploy")," command is succesful, the Appsody Operator and Kubernetes takes care of the rest and reconciles the necessary underlying Kubernetes artifacts that are required to fulfill the requirements of serving up the application code in real-time!"),Object(o.b)("h2",null,"Recommended readings"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.gitops.tech/"},"What is gitops")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.katacoda.com/ratrosyu/scenarios/playground"},"Tekton playground on katacoda")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/appsody/tekton-example"},"Using Tekton with Appsody example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/blog/simplify-and-automate-deployments-using-gitops-with-ibm-multicloud-manager-3-1-2"},"IBM Multicloud Manager is introducing GitOps support with Argo CD")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://medium.com/ibm-garage/fun-with-gitops-stitching-kubernetes-tekton-and-argo-ee348afd0b08"},"Fun with GitOps stitching Kubernetes, Tekton, and Argo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.openshift.com/learn/topics/pipelines"},"OpenShift Pipelines - Cloud-native CI/CD"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-devops-index-mdx-8ab83a0b62f785d16aa5.js.map