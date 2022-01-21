const path = require("path")

module.exports = {
    name : 'React-webpack-setting', //웹팩 설정 이름
    mode : 'development',   //개발용
    devtool: 'eval', //소스맵 설정 빌드시간,로깅,디버깅에 최적화된 설정 고려
    resolve: { //module 해석에 대한 설정
        alias : {
            "@" : path.resolve(__dirname, 'src/')
        },
        extensions: ['.js', 'jsx']
    },
    entry: {
        app : ['/src/index.jsx']
    },
    module: {

        rules: [
            {
                test:/\.js$/,
                exclude:/node_module/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    output: { //최종적으로 만들어질 js
        path: path.join(__dirname, '/dist'), //빌드된 파일의 위치
        filename: "app.js" //빌드 후 파일 이름
    }
}
