import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



  
function App() {

  const [noteTitle,setNoteTitle] = useState("");
  const [notes,setNotes] = useState([
    {id:1, title :"Note 1" }
  ]);
  const [editMode,setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const submitHandler = (e) =>
  {
    e.preventDefault();
     if(noteTitle.trim() === ''){
      return alert('Please provide a valid title');
     }

     const newNote = {
      id: Date.now() + "",
      title: noteTitle,
     };



// ... = spread operator 
     setNotes([newNote, ...notes]);


  }

  const removeHandler = (noteId) => {
    const updateNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updateNotes);
     
  };
  

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <input 
     type='text'
     value={noteTitle}
     onChange={changeTitleHandler}
     />
     <button type='submit'>Add Note</button>

      </form>

      <div className='note-list'>
        <h2>All Notes</h2>
        <ul>
          {
            notes.map((note) => (
              <>
              <li> 
              <span>{note.title}</span>
              <button>Edit</button>
              <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>

              <br />
              </>              
            ))
          }

        </ul>
      </div>   
      </div>

  );
}
    
export default App;
