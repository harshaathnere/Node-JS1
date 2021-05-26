const fs =  require('fs');
const chalk = require('chalk');

const add = (a,b)=> {
return a+b;
}

const addNote =(title,body)=>{
   const notes = loadNotes()
   
   const duplicateNote  = notes.find((note) => Node.title === title) 
   

   if(!duplicateNote.length === 0){
    console.log(notes);
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log("New Note added")
   }
   else {
       console.log('Note Title taken')
   }
  
}

const removeNote =  (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>note.title !== title)
    

    if(notes.length > notesToKeep.length){
       console.log(chalk.green.inverse('Note Removed'))
       saveNotes(notesToKeept)
    }
    else {
        console.log(chalk.red.inverse('No note found'))
    }
  
   console.log(title)
}
const listNotes = () => {
    const notes = loadNotes()
  console.log(chalk.inverse('Your notes'))
  notes.forEach((note)=> {
   console.log(note.title)
  })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
     console.log(chalk.inverse(note.title))
     console.log(chalk.red.inverse('Notes not found'));
    }
    else{

    }

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)

}
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
  
}
module.exports = {
    add: add,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}