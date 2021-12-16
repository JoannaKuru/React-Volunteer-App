import React, {useState, useEffect} from 'react'
import './App.css';
import AddVolunteer from './AddVolunteer'
import AddAction from './AddAction'

function App() {
  // renderöi heti itsensä, reactkomponentti

const [volunteers, setVolunteers] = useState([])
const [actions, setActions] = useState([])
const [idShowPhone, setIdShowPhone] = useState("") 
const [idShowDuration, setIdShowDuration] = useState("")
const [showAddForm, setShowAddForm] = useState(false)
const [showAddFormA, setShowAddFormA] = useState(false)

useEffect(() => {
  // fetch = tuotos -> then -> then
  fetch ("http://localhost:8000/api/volunteers/")
  .then(res => res.json())
  .then(vastaus => setVolunteers(vastaus))
}
  , []
)

useEffect(() => {
  // fetch = tuotos -> then -> then
  fetch ("http://localhost:8000/api/actions/")
  .then(res => res.json())
  .then(action => setActions(action))
}
  , []
)

  // "render"
  return (
    <div className="App">

      <h1>Volunteers</h1>

      <button onClick={() => setShowAddForm(true)}>Add new Volunteer</button>

      <button onClick={() => setShowAddFormA(true)}>Add new Action</button>

      {showAddForm && <AddVolunteer />}
      {showAddFormA && <AddAction />}

      <p>====================================================================</p>

        {
          volunteers && volunteers.map(v => 

              <div key={v.id}>

                <h4 onClick={() => setIdShowPhone(v.id)}> {v.name} </h4>

                {idShowPhone === v.id ? <p onClick={() => setIdShowPhone(0)}> {v.name}: phone {v.phone}</p> : null}

                <p>__________________________________________________________</p>

              </div>
            )
        }
      <p>====================================================================</p>

        {
          actions && actions.map(a => 

              <div key={a.id}>

                <h4 onClick={() => setIdShowDuration(a.id)}> {a.name} </h4>

                {idShowDuration === a.id ? <p onClick={() => setIdShowDuration(0)}> {a.name}: duration {a.duration} hours</p> : null}

                <p>__________________________________________________________</p>

              </div>
            )
          }

    </div>
  )
}

export default App;
