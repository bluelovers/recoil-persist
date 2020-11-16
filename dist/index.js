
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./recoil-persist2.cjs.production.min.js')
} else {
  module.exports = require('./recoil-persist2.cjs.development.js')
}
