# Vaccine Cold Chain Monitoring

This project presents an approach to develop a vaccine cold chain monitoring with anomaly detection.

The content of this repository is presented [in a BOOK view](https://ibm-cloud-architecture.github.io/vaccine-solution-main/), and the goal is to run all those components together on multi cloud environments.

## The solution repositories

Two main use cases are supported by this solution: cold chain monitoring, and optimized order management.

1. Optimized order management:

   * [Order manager microservice](https://github.com/ibm-cloud-architecture/vaccine-order-mgr-pg): Exposes API to manage vaccine order. Based on Quarkus, Hibernate Panache ORM, Postgresql, Debezium outbox, reactive messaging.
   * [Order Optimizer service](https://github.com/ibm-cloud-architecture/vaccine-order-optimizer) to support event driven service to compute the best shipment plan for shipping vaccine lots to different countries.
   * [Transportation simulator](https://github.com/ibm-cloud-architecture/vaccine-transport-simulator) to simulate transportation itinerary and cost.

2. Cold Chain monitoring

   * [Reefer IoT simulator](https://github.com/ibm-cloud-architecture/vaccine-reefer-simulator): A python service to simulate sending sensor telemetries to Kafka, with exposed API to control the simulation and the demonstration for anomaly detection and cold chain temperature monitoring.
   * [Monitoring Agent](https://github.com/ibm-cloud-architecture/vaccine-monitoring-agent): Kafka streams app, in Quarkus to assess the temperature telemetries for cold chain violation. Call anomaly detection service.

## Building this booklet locally

The content of this repository is written with markdown files, built with Gatsby. For more information, see the [README for the docs](https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/docs/README.md).

* Install NodeJS ([https://nodejs.org/](https://nodejs.org/))
* Under the `docs` folder, the first time do a `npm install`
* To run the doc locally do: `npm run dev`
* Go to http://127.0.0.1:8000/ in your browser.

To publish the content to github:

* Ensure that all your local changes to the master branch have been committed and pushed to the remote repository: `git push origin master`
* To pushing the book to GitHub Pages: `npm run deploy`
* This repository is monitored by GitAction to perform a build and deploy when code is pushed or a Pull Request accepted.

## To update doc content

The navigation is in the `docs/src/data` folder file `nav-items.yaml`.

The content is in the `docs/src/pages` folder. Then the folders content the following:

* `index.md` is the first main page
* design folder includes the articles related to the design of the solution
* solution folder includes simple description of each service of the solution
* mcm is for content around multi-cloud management
* DevOps is to include articles on CI and CD.
* analyze is for the Watson ML work.
* The diagrams are in a ppt file named: `docs/VaccinTransportation-Usecases.pptx`. Use snap-it to build a png file from one of the diagram. Png files are going to images folder in the corresponding subject area.
