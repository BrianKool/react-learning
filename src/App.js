import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import StudentForm from "./StudentForm.js"

const List = (props) => {
  return(
    <ul>
    {props.students.map((student) => <li key={student.id}> id={student.id} name={student.name} </li>)  }
    </ul>
    )
  }




const App = () => {
    
  const [students, setStudents]=useState([])
  const [showAllStudents, setShowAllStudents] = useState(true)

 const studentsToShow = showAllStudents ? students : students.filter(students => students.Major === 'Accounting')

  const addStudent = (newStudent) => {

    axios.post("http://localhost:3001/student", newStudent)
    .then(response => {
      console.log("POST response", response)
      setStudents([...students, response.data])
    })
  }


  useEffect(() => {
    console.log("effect is being run")
    axios.get("http://localhost:3001/student")
    .then(response => {
      console.log("we have a response", response)
      setStudents(response.data)
    })
  },[]
  )

  return (
    <div>
      <div>
        <button onClick={() => setShowAllStudents(!showAllStudents)}>
          show {showAllStudents ? 'Students who major is Accounting' : 'All'}
        </button>
      </div> 
      <h1>Students in my class</h1>
      <List students={studentsToShow}/> 
      <StudentForm updateFn={addStudent} />
    </div>
  );
}

export default App;



      