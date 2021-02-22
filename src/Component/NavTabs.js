import React from "react";
// import "../styles/Navbar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#efdcd5",
    
  },
  button: {
    color: "white",
    fontSize: "10rem"
  }
  
}));


export default function NavTabs(props) {
  const styles = useStyles();

  return (

    <div className={styles.root}>
    <ul className="nav nav-tabs" >
      <li className="nav-item" >
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => props.handlePageChange("AboutMe")}
          className={props.currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => props.handlePageChange("Project")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
     
    </ul>
    </div>
  );
}

