const HtmlWebpackPlugin =require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname+ '/build', // __dirname -de node-    especifica la ruta  archivo desde la ruta inicial del sistema operativo
        filename: 'bundle.js'
    },
    devServer: {
        port:5000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                   {loader: "style-loader"},
                   {loader:  "css-loader"},
                   {loader:  "sass-loader"}
                ]
            } //cada objeto es una configuracion para decirle a webpack que archivos puede procesar, para que pueda importar archivos css y entenderlos
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}