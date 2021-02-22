import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: "center",
      backgroundColor: "#0077c2",
      
    },
    
  }));

export default function Home() {
    const styles = useStyles();
    return (
        <div className={styles.root}>  
            <Grid item xs={12} style={{boxSizing: "border-box"}}>
              <Paper>
                <img className={styles.img} alt="diary" src="./image/keyboard.jpg" />
              </Paper>
            </Grid>   
        </div>
      );
}
