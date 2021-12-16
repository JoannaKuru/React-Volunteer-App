import React, {useState} from 'react'
import './App.css';

function AddAction() {
  // renderöi heti itsensä, react-komponentti

const [volunteers, setVolunteers] = useState([])
const [actions, setActions] = useState([])
const [idShowPhone, setIdShowPhone] = useState("") 
const [idShowDuration, setIdShowDuration] = useState("")
const [showAddForm, setShowAddForm] = useState(false)
const [showAddFormA, setShowAddFormA] = useState(false)


  // "render"
  return (
    <div>
        <h2>Add Action</h2>

        <form >
            <input type="text" placeholder='name' />
            <input type="text" placeholder='duration' />
            <input type="text" placeholder='volunteer' />
            <input type="submit" value="Save" />
        </form>
    </div>
  )
}

export default AddAction;