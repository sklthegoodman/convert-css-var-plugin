module.example = {
    entry:{
        index:'./test.css'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'     //确保文件资源能够在 http://localhost:3000 下正确访问
    },
    module:{
        rules:[

        ]
    }
}

//https://juejin.im/post/5bbf190de51d450ea52fffd3