module.exports = {
    apps: [{
        name: "Main",
        script: __dirname + "/backend/index.js",
        instances: "max",
        exec_mode: "cluster",
        ignore_watch: [__dirname + '/node_modules', __dirname + '/package.json', __dirname + '/package-lock.json'],
        watch: true,
        log_date_format: "DD.MM.YYYY HH:mm:ss",
    }]
}