// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by node.js');
// fs.appendFileSync('notes.txt','please append file')
const chalk = require('chalk')
const validator = require('validator');
const { string, demandOption } = require('yargs');
const yargs = require('yargs');
const { listNotes } = require('./utill');
const utill = require('./utill');
const add = require('./utill');

// const sum = add(4,2)

// console.log(sum);
// console.log(validator.isEmail('aathnere@gmail.com'))
// console.log(chalk.green('Success'));
//console.log(process.argv)
const command = process.argv[2]
yargs.version('1.1.0')
// add, remove,read,lists

// Create the Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:  {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
 },
    handler(argv){
        utill.addNote(argv.title, argv.body)
        console.log('Title', argv.title),
        console.log('Body', argv.body)
    }
})

// Remove the command
yargs.command({
    command: 'remove',
    describe: 'Remove the node',
    builder: {
        title:{
          describe: 'Note Title',
          demandOption: true,
          type: string,
        }
    },
    handler(argv){
        utill.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your command',
   
    handler(){
           utill.listNotes()
    }

})
// Read the command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder : {
        title: {
        describe: 'Node Title',
        demandOption: true,
        type: string
        }
    },
    handler(args) {
       utill.readNote(argv.title)
     console.log('Reading a note')
    }
})

yargs.parse()
//console.log(yargs.argv)
// if(command === 'add'){
// console.log("notes");
// }
