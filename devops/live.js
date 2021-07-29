const shell = require('shelljs')
require('dotenv').config()

// Start Config
const PM2_NAME = 'anne-www'
const REMOTE_DIR = '/var/www/anne/www'
const REMOTE_HOST = '143.110.244.136'
const REMOTE_USER = 'root'
const PRIVATE_KEY = process.env.LIVE_KEY
const FILE_NAMES = '.nuxt static nuxt.config.js shared config lang package.json'
// End Config

// Zip and send file to remote server
shell
  .cd('prod')
  .exec('tar czf arialshop.tar.gz ' + FILE_NAMES)
  .exec(
    'scp -i ' +
      PRIVATE_KEY +
      ' arialshop.tar.gz ' +
      REMOTE_USER +
      '@' +
      REMOTE_HOST +
      ':' +
      REMOTE_DIR
  )
shell.rm('arialshop.tar.gz')

// Extract and reload pm2
const host = {
  server: {
    host: REMOTE_HOST,
    port: 22,
    userName: REMOTE_USER,
    privateKey: require('fs').readFileSync(PRIVATE_KEY),
  },
  commands: [
    'cd ' + REMOTE_DIR,
    'sudo tar xf arialshop.tar.gz -C ' + REMOTE_DIR,
    'sudo rm arialshop.tar.gz',
    'sudo npm install --force',
    'sudo pm2 reload ' + PM2_NAME,
  ],
}

const SSH2Shell = require('ssh2shell')
const SSH = new SSH2Shell(host)
// Use a callback function to process the full session text
const callback = function (sessionText) {
  // console.log(sessionText)
}

// Start the process
SSH.connect(callback)
