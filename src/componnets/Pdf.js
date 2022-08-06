import React, {useRef, useState} from 'react'
import {useReactToPrint} from 'react-to-print'
import "../../src/App.css"
import Input from '../componnets/Input'
import data from '../mock-data.json'
import '../assets/style.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Table } from 'react-bootstrap'

const Pdf =() => {
    const componnetsRef = useRef()
    const handlePrint = useReactToPrint({
        content: () =>componnetsRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print Success')
    })

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
    <div ref={componnetsRef} style={{width: '100%', height: window.innerHeight}}>
    <h1 className='text-center my-3 border py-2'>Data Teman</h1>
    <div style={{ width: 600 , margin:'auto'}}>
    <Input chartData={userData} />
  </div>
    <div class="container mt-3">
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
              <button onClick={handlePrint}>Save</button>
            </div>
            </div>
    
    </>
  )
}

export default Pdf