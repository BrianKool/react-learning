import React, {useState} from "react"

const StudentForm = ({updateFn}) => {

  const initialState = { id: '', name:'',  Major:[]}

  const [formInfo, setFormInfo] = useState(initialState)

  const updateField = (event) => {
    // which input element is this
    const name = event.target.attributes.name.value
    console.log(name, event.target.value)
    if (name === "id") {
        setFormInfo({...formInfo, id: event.target.value})
    } else if (name === "name") {
        setFormInfo({...formInfo, name: event.target.value})
    } else if (name === "Major") {
        // The checkbox, look at the checked property to see if it 
        // is checked or not, then add or remove as necessary
        let major = formInfo.Major
        console.log(event.target.checked, major)
        if (event.target.checked) {
            // add it to the list if not present
            if (!major.includes(event.target.value)) {
                console.log("added to the list of offerings")
                major = [...formInfo.Major, event.target.value]
            } 
        } else {
            // remove it from the list if present
            if (major.includes(event.target.value)) {
                console.log("removed from the list of offerings")
                major = major.filter(o => o !== event.target.value)
            }
        }
        console.log("his/her Major is: ", major)
        setFormInfo({...formInfo, Major: major})
    }
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
        <input name="id" onChange={updateField}></input>

        <label htmlFor="name">Unit Title</label>
        <input name="name" onChange={updateField}></input>

        <label htmlFor="Major">Major</label>
            Cyber Security <input type="checkbox" onChange={updateField} name="Major" value="Cyber Security"></input>
            Accounting <input type="checkbox" onChange={updateField} name="Major" value="Accounting"></input>
            Machenical Engineering <input type="checkbox" onChange={updateField} name="Major" value="Machenical Engineering"></input>

        <input type="submit"></input>
    </form>
    )
}

export default StudentForm



