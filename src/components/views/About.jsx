import React from 'react';
import { Link } from 'react-router-dom';
// import fire from './firebase'

// import Welcome from './components/Welcome';
import '../Styles/Notes.css';
// import'./Styles/Welcome.css';
const About=()=>{
//   const handleLogout = () => {
//     fire.auth().signOut();

// };
   return (
      <div className="containerNotas">
      <div className="containerNotes">
        <header>
          <div className="containerLogo">
            <h3 className="logoNotes">
              School <span>Notes</span>
            </h3>
            <div className="navBtn">
              <div className="navLinks">
                <ul>
                <Link to='/Notes'>
                  <li className="navLink">
                   Home
                  </li>
                  </Link>
                  <li className="navLink">
                    <a href="#">Menu</a>
                  </li>
                  <Link to='/About'>
                  <li className="navLink">
                   About us
                  </li>
                  </Link>
                </ul>
              </div>
              <div className="logSign">
                <Link to='/'>
                {/* <button className="btn" onClick={console.log('salir')}> Sign Out</button> */}
                {/* <button className="btn" onClick={handleLogout}>Sign Out</button> */}
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="main">
          {/* <aside className="aside"> */}
          <div className="aboutAs">
        <p>Schools Notes, es una plataforma pensada en la organización del día a día en la
           educación de los niños y la rutina de su acudiente, madre, padre, tíos o abuelos.
           Es una interfaz amigable con el usuario, lo ideal es organizar tarea por tarea,
           con fecha de entrega, detallando el que hacer, tener contacto directo con profesores
           y compañeros. Tomar nota de materiales, horas de clases o actividades especiales,
           todo esto en un mismo lugar.</p>
          {/* </aside> */}
          </div>
        </main>
      </div>
    </div>
   )}

export default About;