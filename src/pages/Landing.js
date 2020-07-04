import React from "react";
import Layout from "../components/Layout";
import serv1 from "../serv1.jpeg";
import serv2 from "../serv2.jpeg";
import serv3 from "../serv3.jpeg";

const Landing = () => {
  return (
    <Layout>
      <section className="landing-hero">
        <div className="hero-heading">
          <h1>Babylon Technologies</h1>
        </div>
        <div className="hero-subheading">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corporis, sunt facilis
            tempore assumenda fuga.
          </p>
        </div>
        <div className="hero-button-container" id="hero-button-container">
          <button className="button">Our Services</button>
          <button className="button-ghost">Contact Us</button>
        </div>
      </section>
      <section className="landing-services">
        <h2>Services</h2>
        <div className="service-wrapper">
          <div className="service">
            <img src={serv1} alt="service 1" className="service-img" />
            <h3>Lorem</h3>
            <p className="underline">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores quaerat
            </p>
          </div>
          <div className="service">
            <img src={serv2} alt="service 2" className="service-img" />
            <h3>Lorem</h3>
            <p className="underline">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores quaerat
              explicabo qui laudantium ex.
            </p>
          </div>
          <div className="service">
            <img src={serv3} alt="service 3" className="service-img" />
            <h3>Lorem</h3>
            <p className="underline">
              Lorem, ipsum dolor sit amet consectetur Nihil asperiores quaerat
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
