import React, {useState} from 'react'
import './App.css';

function AddVolunteer() {
  // renderöi heti itsensä, react-komponentti

const [volunteers, setVolunteers] = useState([])
const [idShowPhone, setIdShowPhone] = useState("") 
const [showAddForm, setShowAddForm] = useState(false)

  // "render"
  return (
    <div>
        <h2>Add Volunteer</h2>

        {/* <form onSubmit={}></form> */}
        <form >
            <input type="text" placeholder='name' />
            <input type="text" placeholder='phone' />
            <input type="submit" value="Save" />
        </form>
    </div>
  )
}

export default AddVolunteer;