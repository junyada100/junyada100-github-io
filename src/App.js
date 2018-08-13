import React, { Component } from 'react';
import './App.css';
// import SideNav from './nav/SideNav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll_to_topic: ''
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick(event) {
    event.preventDefault();
    window.scrollTo(500, 330);
    this.setState({
      scroll_to_topic: event.target.getAttribute("href")
    });
  }
  render() {
    return (
    <div className="container">
      <div className="container-menu">
	      <img className="profile-pic" src="img/profile.jpg" alt="my profile pic" />
        <ul>
          <li>
            <a href="#aboutme">about me</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#license">license</a>
          </li>
        </ul>
      </div>
      <div className="container-content">
        <section id="aboutme">
          <div>
            <h1>jun<span className="color-pink">yada</span></h1>
            <span className="inline-i-middle">
              <a href="mailto:junyada@outlook.com" className="color-pink">
                <i className="socicon-mail" />  junyada@outlook.com
              </a>
            </span>
            <p>Programmer, Software Tester, Gamer</p>
            <ul className="icon-inline">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/junyada100"><i className="socicon-github" /></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="mailto:junyada@outlook.com"><i className="socicon-mail" /></a>
              </li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <div>
            <h2>projects</h2>
            <p>Coming soon...</p>
            <p>Coming soon...</p>
            <p>Coming soon...</p>
            <p>Coming soon...</p>
          </div>
        </section>
        <section id="license">
          <div>
            <h2><span className="color-pink">license</span></h2>
            Social Icons by: <a target="_blank" rel="noopener noreferrer" href="http://socicon.com">socicon</a>
            <br />
            favicon/Graphics by: <a target="_blank" rel="noopener noreferrer" href="https://www.vecteezy.com">Vecteezy.com</a>
          </div>
        </section>

      </div>
    </div>
    );
  }
}

export default App;
