import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from "./card.css";

export default function MediaCard() {
    const [visible, setVisible] = useState(false);
    const [reportListData,setReportListData] = useState([]);

    useEffect(()=>{
        fetch('./api/card.json', {
            headers:{
                "Content-Type": "applicaion/json",
                "Accept": "application/json",
            },

        }).then((res)=>res.json())
        .then((data)=> {setReportListData(data)})
    })
  

    const [isActive, setIsActive] = useState(true);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(!isActive);
    };

  return (
    <>

<Grid container spacing={3}>
  
    {reportListData.map((user, index) => (
        <Grid item xs={4} >
    <Card key={index}>
      
      <CardContent>
      <Typography gutterBottom  variant="body2" >
          <div style={{height:"100px", background:"#7b8581", fontSize:"40px", textAlign:"center",paddingTop:"20px"}}>{user.id}</div>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {user.title} 
        </Typography>
        <Typography variant="body2" color="text.primary">
        {user.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.intro}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
        {user.details.map((detail,index)=>(
           <>            
              <p  className={isActive ? 'bg-salmon' : ''} key={index}>{detail}</p>
            </>
          )
            
        )}          
        </Typography>
      </CardContent>
      
      <CardActions>
        
        <Button onClick={handleClick}>show more</Button>
      </CardActions>
    </Card>
    </Grid>))}
  
</Grid>
    
    </>
  );
}
