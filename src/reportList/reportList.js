import React, { useEffect,useState } from "react";
import {Button, Grid,Stack} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import ViewPopup from "./viewpopup/viewPopup";
import "./style.module.css"

const ReportList=()=>{
    const [reportlistData, setReportListData] = useState([]);
    const [openPopup,setOpenPopup]=useState(false);
    const [reportId,setReportId]=useState(0);
    const[reportViewProp,setReportViewProp]=useState("")

    const renderDateCell = (cellValues) => {
      if (cellValues.value && cellValues.value) {
        return moment.utc(cellValues.value).local().format("L LT");
      }
    };

    const handleButtonClick=(id)=>{
      setReportId(id)
      setOpenPopup(true)
    }

    const handlePopupClose=(reportId)=>{
      setOpenPopup(false)
      setReportViewProp("")
    }

    const columns = [
        { 
          field: 'id', 
          headerName: 'ID', 
          width: 100,
          headerAlign: "center",
          align:"center", 
      },
        {
          field: 'name',
          headerName: 'Name',
          width: 350,
          headerAlign: "center",
          align:"center",
        },
        {
          field: 'description',
          headerName: 'Description',
          width: 450,
          headerAlign: "center",
          align:"center",
        },
        {
          field: 'modifiedDate',
          headerName: 'Date',
          width: 350,
          headerAlign: "center",
          align:"center",
          renderCell: renderDateCell,
        },
        {
          field: "action",
          headerName: "Actions",
          headerAlign: "center",
          align:"center",
          width: 160,
          renderCell: (cellValues) => {
            return (
              <>
                <Stack direction="row" spacing={2}>
                  <div >
                    <Button onClick={() => handleButtonClick(cellValues.id)}>View</Button>
                  </div>
                </Stack>
              </>
            );
          },
        },
      ];

      useEffect(()=>{
        fetch('./api/reports.json')
          .then((res) => res.json())
          .then((data) => {
            setReportListData(data.content)})
            .catch((err)=>{
              alert("error while fetching")
          });;
      }, []);

    return(
      <>
      <h2 style={{color:"#7ebda2", marginLeft:"20px"}}>Phone call report List</h2>
         <Grid item xs={12}>
        <div
          className="ag-theme-alpine"
          style={{
            height: 550,
            width: "100%",
            textAlign: "initial",
            backgroundColor: "#fff",
          }}
        >
        <DataGrid
        rows={reportlistData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        
      />
        </div>
      </Grid> 
      <ViewPopup 
      openPopup={openPopup} 
      handlePopupClose={handlePopupClose} 
      reportId={reportId}
      reportViewProp={reportViewProp}
      setReportViewProp={setReportViewProp}
      />
      
      </>
    )
}
export default ReportList;