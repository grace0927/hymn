module.exports = {
  apps : [{
    name: "hymn",
    script: "./server/app.js",
    watch: [
      '.pm2.config.js',
      './components',
      './pages',
      './server',
    ],
    ignore_watch: [],
  }]
}
