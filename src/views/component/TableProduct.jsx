import React from 'react'
import './style.css'

const TableProduct = () => {
    let arr = [
      {nama :"ayam", pekerjaan : "petok"}, 
      {nama : "gajah", pekerjaan : "makan"}
    ]

    const renderTable = () => {
      return arr.map((val, index) => {
        return(
          <>
        <tr>
        <td>{index+1}</td>
        <td>{val.nama}</td>
        <td>{val.pekerjaan}</td>
        </tr>
        </>
        )
      })
    }

    return (
      <div align="center"  >
        <table style={{border: "1px solid black", borderCollapse: "collapse"}}>
          <tr>
            <th>no</th>
            <th>nama</th>
            <th>pekerjaan</th>
          </tr>
          <tbody>
            {renderTable()}
          </tbody>
          
        </table>
      </div>
    )
    }

    export default TableProduct

