module.exports = {
  siteMetadata: {
    title: 'IBM Garage: A Cloud Pak Show Case',
    description: 'This project represents an integrated solution to deliver Vaccine WW at billions of lot.',
    keywords: 'gatsby,theme,carbon',
    author: 'IBM Garage Solution Engineering'
  },
  pathPrefix: '/vaccinesolution',
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        titleType: 'append',
        repository: {
          baseUrl: 'https://github.ibm.com/vaccine-cold-chain/vaccine-cold-chain-main',
          subDirectory: '/docs',
          branch: 'master'
        }
      }
    }
  ]
}
