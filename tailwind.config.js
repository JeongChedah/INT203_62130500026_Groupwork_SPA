const colors = require("tailwindcss/colors")
module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: '#FF5313',
                bluelight: '#44C1F0',
                pinklight: '#FF5757'

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}