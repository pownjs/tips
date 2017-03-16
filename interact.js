const inquirer = require('inquirer')

const render = require('./render')
const search = require('./search')

function select(options, done) {
    const choices = options.map((option) => {
        return {name: `${option.value}: ${option.name}`, value: option.value}
    })

    inquirer.prompt([{type: 'list', name: 'select', message: 'Select', choices: choices.concat([{name: 'Search again', value: -1}])}])
    .then((result) => {
        if (result.select === -1) {
            interact(done)
        } else {
            render(result.select, (err, content) => {
                if (err) {
                    done(err)

                    return
                }

                console.log(`\n${content}`)

                select(options, done)
            })
        }
    })
    .catch(done)
}

function interact(done) {
    inquirer.prompt([{type: 'input', name: 'query', message: 'Search'}])
    .then((result) => {
        search(result.query, (err, results) => {
            if (err) {
                done(err)

                return
            }

            select(results, (err) => {
                if (err) {
                    done(err)

                    return
                }

                interact(done)
            })
        })
    })
    .catch(done)
}

module.exports = interact
