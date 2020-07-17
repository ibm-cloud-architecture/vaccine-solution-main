module.exports = {
  siteMetadata: {
    title: 'IBM Garage: A Cloud Pak Show Case',
    description: 'This project represents an integrated solution to deliver Vaccine WW at billions of lots.',
    keywords: 'gatsby,theme,carbon',
    author: 'IBM Garage Solution Engineering'
  },
  pathPrefix: '/vaccine-solution-main',
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        titleType: 'append',
        repository: {
          baseUrl: 'https://github.com/ibm-cloud-architecture/vaccine-solution-main',
          subDirectory: '/docs',
          branch: 'master'
        }
      }
    }
  ]
}
