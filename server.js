// Minimal test rig for Railway kill-switch experiments: binds PORT, answers
// everything with identifying JSON so "is it serving?" is unambiguous.
const http = require('node:http')
const started = new Date().toISOString()

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ app: 'kill-switch-testbed', started, uptimeSec: Math.round(process.uptime()), path: req.url }))
}).listen(process.env.PORT || 3000, () => {
  console.log(`kill-switch-testbed listening on ${process.env.PORT || 3000}`)
})
