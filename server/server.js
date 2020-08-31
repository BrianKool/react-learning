const express = require('express') 
const cors = require('cors')


const app = express() 
app.use(cors())

let students = [
      {id: 0,name: "Brian",Major: "Cyber Security"},
      {id: 1,name: "James",Major: "Accounting"},
      {id: 2,name: "Julian",Major: "Accounting"},
      {id: "3",name: "Una",Major: "Cyber Security"}
    ]
  

app.get('/api/student', (req, res) => {
    res.json(students)
})

app.post('/api/units', (req, res) => {
  const body = req.body
  const newStudent = {
      id: body.title,
      name: body.code,
      Major: body.offering,
      key: units.length   
  }
  students.push(newStudent) 
  res.json(newStudent)
})

app.put('/api/student/:key', (req, res) => {
  const newStudent = req.body
  const key = Number(req.params.key)
  students = students.map(e => key === e.key ? newUnit : e)
  console.log("updated", newStudent)
  res.json(newStudent)
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 