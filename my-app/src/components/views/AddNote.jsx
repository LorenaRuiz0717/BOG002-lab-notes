import React, { useState, useEffect } from "react";
import "../Styles/AddNotes.css";
import fire from "../firebase";
const AddNotes = (props) => {
  const { addInfo,setOpen } = props;
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialStateValues = {
    Class: "",
    Title: "",
    Description: "",
    Date: "",
  };
  const [values, setValues] = useState(initialStateValues);
  // const [modalOpen, setOpen] = useState(false);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value)
  };

  // const closeModal=()=>{
  //   setOpen(false)
  //   console.log(setOpen+'cerrar modal')
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    addInfo({ ...values, lastModified: time });
    setValues({ ...initialStateValues });
  };

  const time = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const getNotesId = async (id) => {
    const doc = await fire.firestore().collection("notes").doc(id).get();
    // console.log(doc.data())
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    // console.log(currentId);
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getNotesId(props.currentId);
    }
  }, [props.currentId]);

  return (
    <form className="Note" onSubmit={handleSubmit}>
      <div className="nameNote">
        <h3>Note</h3>
        <i className="material-icons" onClick={(event)=>setOpen(event.false)}>
          close
        </i>
      </div>
      <div className="input">
        <input
          type="text"
          name="Class"
          className="Class"
          placeholder="Class"
          onChange={handleInputChange}
          value={values.Class}
        />
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
          className="Description"
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
        <p className="dateCreation">{time}</p>
        <button className="btn">
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default AddNotes;
