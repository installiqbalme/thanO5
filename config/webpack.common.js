const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const components = [
    "core-button", 
    "core-hello", 
    "core-modal", 
    "core-slider", 
    "core-badge", 
    "core-progress",
    "core-image",
];
const componentsEntries = {};

components.forEach((component) => {
    componentsEntries[`lib/${component}/index`] = `./components/${component}/${component}.js`;
});

module.exports = {
    entry: {
        ...componentsEntries
    },
    module: {
        rules: [
            
            // use the scss loaders (first compile into css, then use css and style loader)
            {
                test: /\.scss$/,
                loader: 'raw-loader!sass-loader'
            },
            // use the css loaders (first load the css, then inject the style)
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            // use the file loader
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/fonts/[name].[ext]'
            },
            // use the url loaders
            {
                test: /\.(png|gif|jpg|jpeg|xml|json)$/,
                loader: 'url-loader'
            },
            // use the html loader
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};