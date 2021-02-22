import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// import "../styles/Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#8c7b75",
    
  },
  button: {
    color: "white",
    fontSize: "10rem"
  }
  
}));

export default function Home() {
  const styles = useStyles();

  return (
    
    <BottomNavigation className={styles.root}>
  <BottomNavigationAction className={styles.button} href="https://www.linkedin.com/feed/" icon={<LinkedInIcon />} />
  <BottomNavigationAction className={styles.button} href="https://github.com/AmyBaguio" icon={<GitHubIcon />} />
  <BottomNavigationAction className={styles.button} href="https://drive.google.com/file/d/1uWR_H1lu6tGqvi607a2LYBtfwSyq7LgV/view?usp=sharing" icon={<PictureAsPdfIcon />} />
</BottomNavigation>

  );
};