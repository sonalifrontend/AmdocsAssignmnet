import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Link,
    Typography,
  } from "@mui/material";
  import CloseIcon from '@mui/icons-material/Close';
import ReportView from "../reportView/reportView";
import style from "./style.module.css";

const ViewPopup=(props)=>{
    const {openPopup,handlePopupClose,reportId,reportViewProp,setReportViewProp} = props;

    const handlecomponent=(period)=>{
        setReportViewProp(`${reportId}-${period}`)
    }

  return (
    <Dialog
    open={openPopup}
    onClose={handlePopupClose}
    fullWidth
  >
    <DialogTitle>
      Select Period of Report
      <Button onClick={handlePopupClose} className={style.close} >
        <CloseIcon />
      </Button>
    </DialogTitle>
    <DialogContent>
        {reportId===41?
        <div>
            <Typography align="center" >
        <Link className={style.links} onClick={()=>handlecomponent(201708)}>2017-08</Link>
        <br></br>
        <Link className={style.links} onClick={()=>handlecomponent(201709)}>2017-09</Link>
        </Typography>
        </div>:
        <div>
            <Typography align="center" >
        <Link className={style.links} onClick={()=>handlecomponent(201708)}>2017-08</Link>
        <br></br>
        <Link className={style.links} onClick={()=>handlecomponent(201710)}>2017-10</Link>
        </Typography>
        </div>}

        {reportViewProp!==""?<ReportView reportViewProp={reportViewProp}/>:<></>}
    </DialogContent>
    <DialogActions>
      <Button onClick={handlePopupClose} >
        cancel
      </Button>
    </DialogActions>
  </Dialog>
  );
}
export default ViewPopup;