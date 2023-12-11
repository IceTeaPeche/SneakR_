        module.exports = {
          purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
          darkMode: false,
          theme: {
            extend: {
              fontFamily: {
                'pacifico': ['Pacifico'],
                'montserrat': ['Montserrat'],
                'roboto': ['Roboto'],
                'righteous': ['Righteous'],
                'lato': ['Lato'],
                'raleway': ['Raleway'],
              }
            },
          },
          variants: {
            extend: {},
          },
          plugins: [
            require("tw-elements/dist/plugin.cjs"),
            require('flowbite/plugin'),

          ],

           content: [
        "./node_modules/flowbite/**/*.js"
              ]
        }