# Vaccine Cold Chain Monitoring

The challenge healthcare industry is facing in very close time is to deliver a billion doses of the vaccine for COVID-19. A vaccine typically travels through multiple sites before being ready for shipment. Multiple companies are involve to manufacture the vaccines. Vaccines need to be handled at an optimal cool temperature (36-46 degrees F) and managed through the cold chain process. Variability in events both internally through the business processes and external events impacting the supply chain across multiple business entities coupled with data residing in multiple clouds presents challenges around anomaly detection that ultimately the vaccin developer is responsible to decision and act on by modifying business processes.
A traditional architecture requires creating new interfaces, integration into systems,  federation and organization of data into a data lake to be ready for any derivation of insights.
Our demonstration today, showcases a developer ready modern architecture comprising of integrated middleware that are used as building blocks to deliver the end to end solution. Use of DevOps tooling and practices accelerates the solution by x factor.

## What we cover

* Speed to innovate and shorten time to deploy to production
design thinking, even storming, microservices, small team, devops, MLops...
* Focus end to end solution running in container on Openshift platform on any cloud provider.
* Using blockchain as multiple business partners are involved, we need to have trusted in data, single source of truth to keep records about the manufactured vaccine lots.
* How to monitor cold chain for refrigerated vaccine during the packaging and transportation using IoT, events, reactive microservices, rules, predictive scoring and blockchain.
* How to develop the solution using Java based microprofile apps, with CI/CD practices using Openshift and kubernetes tooling.
* Scale the solution locally but also at the worldwide level using multi cloud management.

## The IFMA process

The high level vaccine manufacturing process is presented in the figure below.

![](images/ifma-process.png)

The important points we want to consider in this Minimum Viable Solution are:

* Multiple partners are engaged in this process.
* Intermediate steps of manufacturing the vaccine used transportation between manufacturers in same or different countries.
* We want to consider the vaccine lot to be released and transported to target destination via airplane.
* We assume the lots are within refrigerated containers.

## Development process

1. Understand the process using [event storming and design thinking](design/evt-storming.md).
1. Model the solution and its components, discovering the microservice [using domain driven design](design/ddd.md).
1. Use Cloud Pak for Application to jump start the development using [Solution Designer](design/cp4a-sol-builder.md) and Appsody Java microprofile stacks, and the CI/CD capabilities of gitops and Tekton.
1. Use Event Streams, as Kafka based product to support event sourcing, event driven microservices communication.
1. Use telemetries data to assess cold chain using rules
1. Use refrigerator sensors' telemetries to develop anomaly detection predictive model
1. Manage countinuous data pipeline injection with real time data pipeline and data lake.
1. Manage the important business events into Blockchain to keep single source of trust for the vaccine lots from packaging to delivery.
1. Integrate business process management to support refrigerator container maintenance as early as possible to avoid failure (See [maintenance process](bpm/readme.md)).
