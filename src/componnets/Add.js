import React, { useState } from 'react'
import "../../src/App.css"
import Input from '../componnets/Input'
import data from '../mock-data.json'
import '../assets/style.css'


function Add() {

    const [userData, setUserData] = useState ({
        labels: data.map((data) => data.jenisKelamin),
        datasets: [
      {
        label: "Usia",
        data: data.map((data) => data.usia),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
    })

    const [dataTeman, setDataTeman] = useState(
       data 
    )
    const [addDataTeman, setAddDataTeman] = useState(
        {
            nama:"",
            usia:"",
            jenisKelamin:""
        }
    )

    const handleChange = (e) => {
        setAddDataTeman({
            ...addDataTeman,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(dataTeman);
        const newDataTeman = {
            nama: addDataTeman.nama,
            usia: addDataTeman.usia,
            jenisKelamin: addDataTeman.jenisKelamin
          };
      
          const newDataTemans = [...dataTeman, newDataTeman];
          setDataTeman(newDataTemans);
        
    }


  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <div class="row mb-3">
      <label for="nama" class="col-sm-3 col-form-label">Nama</label>
      <div class="col-sm-9">
      <input type="text" 
      name='nama' 
      onChange={handleChange}
      class="form-control"
      id="Nama"/>
      </div>
      </div>
      <div class="row mb-3">
      <label for="usia" class="col-sm-3 col-form-label">Usia</label>
      <div class="col-sm-9">
        <input type="age"
        name='usia'
        onChange={handleChange}
         class="form-control"
          id="Usia"/>
      </div>
      </div>
      <fieldset class="row mb-3">
      <legend class="col-form-label col-sm-3 pt-0 mb-3">Jenis Kelamin</legend>
      <div class="col-sm-9">
      <div class="form-check">
      <input class="form-check-input" type="radio" 
      name="jenisKelamin"
      value="laki-laki" 
      onChange={handleChange}/>
      <label class="form-check-label" >
            Laki-laki
          </label>
          </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" 
        name='jenisKelamin'
        onChange={handleChange}
          value="perempuan"/>
          <label class="form-check-label" for="gridRadios2">
            Perempuan
          </label>
        </div>
      </div>
    </fieldset>
    <div className='d-flex'>
    <button type="submit" class="btn btn-primary">Add</button>
    </div>
  </form>

  
  <div class="container mt-3">
  <h2>Table Teman</h2>
    <table class="table table-dark">
    <thead>
    <tr>
          <th>Nama</th>
          <th>Usia</th>
          <th>Jenis Kelamin</th>
        </tr>
      </thead>
      <tbody>
      {dataTeman?.map((hasil) => (
        <tr>
        <td>{hasil?.nama}</td>
        <td>{hasil?.usia}</td>
        <td>{hasil?.jenisKelamin}</td>
        </tr>
     ))}
     
     </tbody>
    </table>
  </div>
  </div>
  <div style={{ width: 600 , margin:'auto'}}>
  <Input chartData={userData} />
</div>
  </>
  )
}

export default Add