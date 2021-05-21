import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faGithub,faYoutube} from "@fortawesome/free-brands-svg-icons";
import homePageAvatar from "../img/../img/purple-tutor11.svg";
class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <header className="hero">
                          <h1 className="hero-text">
                              Hi, I am
                              <span> Katie.</span>
                          </h1>
                          <div>
                              <img className="home-avatar" src={homePageAvatar} alt=""/>
                          </div>
                          <p className="home-sub-text" >
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Animi beatae culpa hic incidunt, quis quisquam veniam? Adipi
                              sci assumenda, consequatur dolore eaque, ipsum minima provident
                              repellat reprehenderit rerum suscipit ut voluptatem.
                          </p>
                          <div className="icons">
                              <Link className="icon-holder" to="/">
                                  <FontAwesomeIcon className="icon icon-github" icon={faGithub}/>
                              </Link>
                              <Link className="icon-holder" to="/">
                                  <FontAwesomeIcon className="icon icon-twitter" icon={faTwitter}/>
                              </Link>
                              <Link className="icon-holder" to="/">
                                  <FontAwesomeIcon className="icon icon-youtube" icon={faYoutube}/>
                              </Link>
                          </div>
                </header>
                </div>
        );
    }
}

export default HomePage;