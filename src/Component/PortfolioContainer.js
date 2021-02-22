import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";


class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (this.state.currentPage === "Project") {
      return <Project />;
    } 
  };

  render() {
    return (
      <div>
          <Header/>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
         <Footer/>
      </div>
     
    );
  }
}

export default Portfolio;
