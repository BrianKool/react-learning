import React, {useState, useEffect} from 'react';
import './App.css';
import StudentForm from "./StudentForm.js"
import studentsServices from './serverces/axiosResponse';

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
    studentsServices.create({newStudent: newStudent})
    .then(object => {
      console.log("POST response", object)
      setStudents([...students, object])
      console.log("new thing added", object)
    }
    )
  }


  useEffect(() => {
    console.log("effect is being run")
    studentsServices.getAll()
    .then(objects => {
      console.log("we have a response", objects)
      setStudents(objects)
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



      