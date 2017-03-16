exports.yargs = {
    command: 'tips [query]',
    describe: 'get tips to pown',

    handler: (argv) => {
        const chalk = require('chalk')

        const banner = require('./banner')
        const render = require('./render')
        const search = require('./search')
        const interact = require('./interact')

        if (!isNaN(argv.query)) {
            render(argv.query, (err, contents) => {
                if (err) {
                    console.error(err.message || err)

                    process.exit(2)
                }

                console.log(`${banner}${contents}`)
            })
        } else
        if (argv.query) {
            search(argv.query, (err, results) => {
                if (err) {
                    console.error(err.message || err)

                    process.exit(2)
                }

                console.log(`${banner}${chalk.green('?')} ${chalk.bold.white('Select')}`)

                results.forEach((result) => {
                    console.log(`  ${chalk.cyan(`${result.value}: ${result.name}`)}`)
                })
            })
        } else {
            console.log(banner)

            interact((err) => {
                if (err) {
                    console.error(err.message || err)

                    process.exit(2)
                }
            })
        }
    } 
}
