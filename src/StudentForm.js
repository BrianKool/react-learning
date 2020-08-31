import React, {useState} from "react"

const StudentForm = ({updateFn}) => {

    const initialState = { id: '', name:'',  Major:'Cyber Security'}

    const [formInfo, setFormInfo] = useState(initialState)

    const updateId = (event) => {
    console.log("Update Id", event.target.value)
    setFormInfo({...formInfo, id: event.target.value})
  }

  const updateName = (event) => {
    console.log("Update Name", event.target.value)
    setFormInfo({...formInfo, name: event.target.value})
  }

  const formHandler = (event) => {
      event.preventDefault()
      console.log("Form submitted: ", formInfo)
      updateFn(formInfo)
      setFormInfo(initialState)
  }

  return (
    <form onSubmit={formHandler}>
        <label htmlFor="id">Student Id</label>
        <input name="id" onChange={updateId}></input>

        <label htmlFor="name">Unit Title</label>
        <input name="name" onChange={updateName}></input>

        <input type="submit"></input>
    </form>
    )
}

export default StudentForm



