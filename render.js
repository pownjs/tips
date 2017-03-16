const fs = require('fs')
const path = require('path')
const marked = require('marked')
const wordwrap = require('wordwrap')
const MarkedTerminal = require('marked-terminal')

marked.setOptions({renderer: new MarkedTerminal()})

const wrap = wordwrap(79)

module.exports = (topic, done) => {
    topic = topic.toString()

    fs.readFile(path.join('db', ('0000000' + topic).substring(topic.length) + '.md'), (err, data) => {
        if (err) {
            done(err)

            return
        }

        done(null, marked(wrap(data.toString())))
    })
}
