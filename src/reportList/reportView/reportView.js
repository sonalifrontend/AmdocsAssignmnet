import { Typography } from "@mui/material";
import React, { useEffect,useState } from "react";
import "./style.module.css"

const ReportView=(props)=>{
    const {reportViewProp} = props;
    const [rowData,setRowData]=useState();
    const [columnData,setColumnData]=useState();

useEffect(()=>{
    if(reportViewProp!==undefined){
    fetch(`./api/reports/${reportViewProp}.json`)
        .then((res) => res.json())
        .then((resdata) => {
            setColumnData(resdata.columns)
            setRowData(resdata.data)
        })
        .catch((err)=>{
            alert("error while fetching")
        });    
         }  
},[reportViewProp]);

    return(
        columnData && rowData ?
        <>
        <tbody>
                <tr>
                    {columnData && columnData.map((col,key)=>{
                        return <th>{col}</th> 
                    })}
                </tr>
                {rowData.map((item, i) => {
                    return (<tr key={i}>
                        {item.map((r,n)=>{
                            return(<td key={n}>{r}</td>)
                        })}
                    </tr>)
                })}
        </tbody>
      </>
      :
      <><Typography align="center" style={{padding:"20px"}}>Error while fetching!</Typography></>
    )
}
export default ReportView;