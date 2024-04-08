import React, { useState } from 'react'
import "./App.css"

function App() {

  const [status, setStatus] = useState(1);

  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [age, setAge] = useState([])
  const [contect, setContect] = useState([])
  const [qulification, setQulification] = useState([])
  const [address, setAddress] = useState([])

  let info = {}

  function setDataInobj() {
    console.log("sudhir");
    info.skm = name;
    info.ch = email;
    info.e=age;
    info.d=contect;
    info.s=qulification;
    info.p=address


  }

  function skm() {

    let userDetails = localStorage.getItem("UserInfo");
    let setData = userDetails ? JSON.parse(userDetails) : [];
    setData.push(info);
    let ans = JSON.stringify(setData);
    // console.log(setData);
    window.localStorage.setItem("UserInfo", ans);
  }





  return (
    <div className='main'>
      <div className={status === 1 ? "form-active" : "form"}>
        <label htmlFor="">Name:</label>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
        <label htmlFor="" >Email:</label>
        <input type="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />

      </div>
      <div className={status === 2 ? "form-active" : "form"}>
        <label htmlFor="">Age:</label>
        <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
        <label htmlFor="">contect:</label>
        <input type="number" value={contect} onChange={(e) => { setContect(e.target.value) }} /><br />


      </div>

      <div className={status === 3 ? "form-active" : "form"}>
        <label htmlFor="">Qulification:</label>
        <input type="text" value={qulification} onChange={(e) => { setQulification(e.target.value) }} /><br />
        <label htmlFor="">Address:</label>
        <input type="number" value={address} onChange={(e) => { setAddress(e.target.value) }} /><br />
        <button onClick={ skm}>submit</button>

      </div>
      <button onClick={(e) => {
        setStatus(status + 1)
        
          setDataInobj()
      
      }} className={status === 3 ? "diactiveNext" : "activeNext"} >Next</button>

    </div>
  )
}

export default App