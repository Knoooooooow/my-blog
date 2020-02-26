module.exports = {
    "/api": {
        "target": "https://api.github.com/users",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        },
        "changeOrigin": true
    }
}