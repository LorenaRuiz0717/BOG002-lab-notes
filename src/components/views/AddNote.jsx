import React, { useState,
  useEffect
} from "react";
import "../Styles/AddNotes.css";
import fire from "../firebase";
const AddNotes = (props) => {
  const initialStateValues = {
    Class: "",
    Title: "",
    Description: "",
    Date: "",
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //    console.log(name,value)
    setValues({ ...values, [name]: value });
    // console.log(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addInfo(values);
    setValues({ ...initialStateValues });
  };

  const getNotesId=async(id)=>{
    const doc= await fire.firestore().collection("notes").doc(id).get();
    setValues({...doc.data()}) 
  }

  useEffect(()=>{
    console.log(props.currentId)
    if(props.currentId===''){
     
      setValues({...initialStateValues});
    }else{
     getNotesId(props.currentId)
    }
  },[props.currentId]);

  return (
    <form className="Note" onSubmit={handleSubmit}>
      <div>
        <h3>Note</h3>
      </div>
      <div>
        <input
          type="text"
          name="Class"
          className="Class"
          placeholder="Class"
          onChange={handleInputChange}
          value={values.Class}
        />
        {/* <i className="material-icons">class</i> */}
      </div>
      <input
        type="text"
        name="Title"
        className="Title"
        placeholder="Title"
        onChange={handleInputChange}
        value={values.Title}
      />
      <textarea
        name="Description"
        cols="25"
        rows="4"
        placeholder="Write Description"
        onChange={handleInputChange}
        value={values.Description}
      ></textarea>
      <input
        type="Date"
        name="Date" 
        className="Date"
        placeholder="Date"
        onChange={handleInputChange}
        value={values.Date}
      />
      <button className='btn'>
        {props.currentId===''?'Save':'Update' }
      </button>
    </form>
  );
};

export default AddNotes;
