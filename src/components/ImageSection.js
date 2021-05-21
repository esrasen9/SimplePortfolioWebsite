import React from 'react';
import about from "../img/about.jpg";
const ImageSection = () => {
      return (
          <div className="ImageSection">
              <div className="image">
                  <img src={about} alt=""/>
              </div>
              <div className="about-info">
                  <h4>I am <span> Katie.</span></h4>
                  <p className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                      Desir per po la ta doso vi slone ve?
                  </p>
                  <div className="about-details">
                      <div className="details-left-section">
                          <p>Full Name</p>
                          <p>Age</p>
                          <p>Nationality</p>
                          <p>Languages</p>
                          <p>Countries</p>
                          <p>Address</p>
                      </div>

                      <div className="details-right-section">
                          <p>:Lorem Ipsum</p>
                          <p>:20</p>
                          <p>:England</p>
                          <p>:English,Spanish,French</p>
                          <p>:Spain,France</p>
                          <p>:106 Beightbridge Road,BJ6 8N9, United Kingdom</p>
                      </div>
                  </div>
                  <button className="btn">Download CV</button>
              </div>
          </div>);
}

export default ImageSection;