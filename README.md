# Vaccine Cold Chain Monitoring

This project presents an approach to develop a vaccine cold chain monitoring with anomaly detection.

The content of this repository is presented [in a BOOK view](https://pages.github.ibm.com/vaccine-cold-chain/vaccine-cold-chain-main/), and the goal is to run all those components together on multi cloud environments.

## Building this booklet locally

* Under the docs folder, the first time do a `npm install`
* To run the doc locally do: `npm run dev`
* To pushing the book to GitHub Pages: `npm run deploy`

## To update doc content

The navigation is in the `docs/src/data` folder file `nav-items.yaml`.

The content is in the `docs/src/pages` folder. Then the folders content the following:

* index.md is the first main page
* design folder includes the articles related to the design of the solution
* solution folder includes simple description of each service of the solution
* mcm is for content around multicloud management
* devops is to include articles on CI and CD.
* analyze is for the Watson ML work.
* The diagrams are in a ppt file named: `docs/VaccinTransportation-Usecases.pptx`. Use snapit to build a png file from one of the diagram. Png files are going to images folder in the corresponding subject area.

