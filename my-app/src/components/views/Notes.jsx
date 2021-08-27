import React, { useEffect, useState } from "react";
// import Welcome from './components/Welcome';
import "../Styles/Notes.css";
import addNote from "../assets/addNote1.png";
import { Link } from "react-router-dom";
import fire from "../firebase";
import AddNotes from "./AddNote";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const Notes = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const [notes, setNotes] = useState([]);
  const [currentId,setCurrentId]=useState('')

  const addInfo = async (noteObject) => {
    if(currentId===''){
    await fire.firestore().collection("notes").doc().set(noteObject);
    toast('Add Note',{
      type:'success',
      autoClose: 2000,
    })
  }else{
    await fire.firestore().collection("notes").doc(currentId).update(noteObject)
    toast('Edit Note',{
      type:'info',
      // autoClose: 2000,
    })
    setCurrentId('');
  }
};
const time = new Date().toLocaleDateString('en-GB',{
  day: 'numeric',
  month: 'long',
  year: 'numeric', 
  hour: "2-digit",
  minute: "2-digit"
 })

 
  const getNotes = async () => {
    fire
      .firestore()
      .collection("notes")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          docs.push({ ...doc.data(), id: doc.id });
          console.log(docs);
        });
        setNotes(docs);
      });
  };


  // const onDelete=()=>{
  //   console.log('delete')
  // }
  const onDelete=async(id)=>{
    if(window.confirm('Are you sure you want to delete this note?')){
    await  fire.firestore().collection('notes').doc(id).delete();
    toast('Delete Note',{
      type:'error',
      autoClose: 2000,
    })
  }
}
  

  useEffect(() => {
    getNotes();
  }, []);

   return (
    <div className="containerNotas">
      <ToastContainer/>
      <div className="containerNotes">
        <header>
          <div className="containerLogo">
            <h3 className="logoNotes">
              School <span>Notes</span>
            </h3>
            <div className="navBtn">
              <div className="navLinks">
                <ul>
                  <li className="navLink">Home</li>
                  <li className="navLink">Menu</li>
                  <Link to="/About">
                    <li className="navLink">About us</li>
                  </Link>
                </ul>
              </div>

              <div className="logSign">
                <Link to="/">
                  <button className="btn" onClick={handleLogout}>
                    {" "}
                    Sign Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="main">
          <aside className="aside">
            <div className="about">
              <h3>Shcool: Innova School </h3>
              <h3>Student: Nicolas Pineda </h3>
              <h3>Course: 3.3</h3>
            </div>
            <div className="addNote">
              <img src={addNote} alt="note" className="addNote" />
            </div>
          </aside>
          <div>
            {/* {" "} */}
            <AddNotes {...{addInfo,currentId, notes}}></AddNotes>
            {/* <AddNotes addInfo={infoNotes}></AddNotes> */}
            <div className='containerWorks'>
              {notes.map((note) => (
                <div className='works'key={note.id}>
                  <div className='work'>
                    {/* <div className='background-color'> */}
                  <div className='format'>
                    <h4>Work</h4>
                    {/* </div> */}
                    <i className='material-icons'onClick={()=>onDelete(note.id)}>close</i>
                    <i className='material-icons'onClick={()=>setCurrentId(note.id)}>create</i>
                    </div>
                    <h3>Class: {note.Class}</h3>
                    <h3>Title: {note.Title}</h3>
                    <p>Description: {note.Description}</p>
                    <h3 className='date'>Date:{note.Date}</h3>
                    <p className='date'>{note.lastModified}</p>
                    </div>
               </div>))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notes;
