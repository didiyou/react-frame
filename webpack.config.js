const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    entry:{
        index:'./lib/index.tsx'
    },
    output:{
        path:path.resolve(__dirname,'dist/lib'),
        library:'RUI',
        libraryTarget:'umd',
    },
    module:{
        rules:[
            {test:/\.tsx?$/,
            loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                title:'RUI',
                template:'index.html'
            }
        )
    ]
}