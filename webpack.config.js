const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    mode,
    target,
    devtool,
    devServer:{
        port:4000,
        open:true,
    },
    resolve: {
        modules: [
          path.resolve(__dirname, "img"),
          "node_modules"
        ],
      },
    entry:path.resolve(__dirname,'src','index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
    clean:true,
    filename:'[name].[contenthash].js',
    assetModuleFilename:'assets/[name][ext]'
},
plugins: [new HtmlWebpackPlugin({
    template:path.resolve(__dirname,'src','index.html'),
}),
new MiniCssExtractPlugin({
        filename:'[name].[contenthash].css',
        
})
],

module:{rules:[
    {
    test: /\.html$/i,
    loader:'html-loader',
    },
    {
        test: /\.(c|sa|sc)ss$/i,
        use: [ devMode ? "style-loader": MiniCssExtractPlugin.loader ,"css-loader",
        {loader:"postcss-loader",
        options:{
            postcssOptions:{
                plugins:[require('postcss-preset-env')]
            }
        }
    },"sass-loader"],
    },
    {
test:/\.(woff2?|ttf)$/i,
type:"asset/resource",
generator:{
    filename:'fonts/[name][ext]'
}
    },
    {
        test:/\.(jpe?g|png|webp|gif|svg)$/i,
        type:"asset/resource",
            },
    {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
    },
]
}
}