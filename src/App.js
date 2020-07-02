import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <Layout>
        <section className="landing-hero">
          <div className="hero-heading">
            <h1>Babylon Technologies</h1>
          </div>
          <div className="hero-subheading">
            <p>
              Lorem ipsum dolor sit amet fuck bitches get money gang gang lorem lorem ipsum bitch
              sed in, consectetur porro amet earum?
            </p>
          </div>
          <div className="hero-button-container" id="hero-button-container">
            <button className="button">Our Services</button>
            <button className="button-ghost">Contact Us</button>
          </div>
        </section>
        <section className="landing-services"></section>
      </Layout>
    );
  }
}

export default App;
