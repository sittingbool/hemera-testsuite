'use strict'

const EventEmitter = require('events')

class NatsStub extends EventEmitter {
  constructor () {
    super()
    setImmediate(() => {
      this.emit('connect')
    })
  }
  close () { this.emit('mock.close', arguments) }
  timeout () { this.emit('mock.timeout', arguments) }
  publish () { this.emit('mock.publish', arguments) }
  subscribe () { this.emit('mock.subscribe', arguments) }
  request () { this.emit('mock.request', arguments) }
}

module.exports = NatsStub