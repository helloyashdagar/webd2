import './App.css'
import Student from './Student'

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <div className="box">
        <Student name="Yash dagar" course="Computer Science" marks="95" />
        <Student name="Venkatesh singh  " course="Information Technology" marks="87" />
        <Student name="Yash vaish  " course="Electronics" marks="88" />
      </div>

      <p>Yash dagar <br /> Cse-26 <br /> 2503201001342</p>
    </div>
  )
}

export default App