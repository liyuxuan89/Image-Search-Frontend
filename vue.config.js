module.exports = {
    devServer: {
        port: 5000,
        proxy: {
            '/api': {
                target: "http://192.168.28.128:8080",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            },
        }
    },
}
