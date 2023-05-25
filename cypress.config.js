const {defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localcoding.us',
    excludeSpecPattern: ['cypress/e2e/1-getting-started/*', 'cypress/e2e/2-advanced-examples/*'],
    viewportWidth: 1200,
    viewportHeight: 700,
    projectId: "u641o3",
  },
})

