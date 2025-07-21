const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  projectId: '7baho7',
  e2e: {
    // aquí va el nuevo specPattern
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },

    env: {
      homepage_url: "https://www.laboratoriodetesting.com",
      email_user: "huge2.test@gmail.com",
      password_user: "Monday12."
    },

    // configuración del preprocesador con Webpack
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpack({
        webpackOptions: {
          resolve: {
            extensions: ['.ts', '.js'],
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
              },
            ],
          },
        },
      }));

      return config;
    },
  },

  // Solo si usas pruebas de componentes (opcional)
  // component: {
  //   specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  //   devServer: {
  //     framework: 'react',
  //     bundler: 'webpack',
  //   },
  // },
});

