import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { base } from './base';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios'; 

import Auth from './modules/Auth';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ArtworkList from './components/ArtworkList';
import ArtworkSingle from './components/ArtworkSingle';
import ArtworkCreate from './components/ArtworkCreate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     auth: Auth.isUserAuthenticated(),
     shouldFireRedirect: false,
     messages: [],
     messageContent: '',
     username: '',
     isUploading: false,
     progress: 0,
     loginUserName: '',
     loginPassword: '',
     registerUserName: '',
     registerPassword: '',
     registerEmail: '',
     registerName: '',
     artworkUrl: '',
     artworkTitle: '',
     artworkDescription: '',
     artworkDate: '',
     artworkPrompt: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

    this.resetFireRedirect = this.resetFireRedirect.bind(this);

    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.handleArtworkSubmit = this.handleArtworkSubmit.bind(this);

  }
 
//  upload images to firebase
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  
  handleProgress = (progress) => this.setState({progress});
  
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({ progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({artworkUrl: url}));
  };

  // send artwork to rails
  handleArtworkSubmit(e) {
    e.preventDefault();
    axios('/artworks', {
      method: 'POST',
      data: {
        artwork: {
          url: this.state.artworkUrl,
          title: this.state.artworkTitle,
          description: this.state.artworkDescription,
          date: this.state.artworkDate,
          prompt: this.state.artworkPrompt,
        }
      },
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      this.setState({
        shouldFireRedirect: true,
      });
    }).catch(err => {
      console.log(err);
    });
  }


  // Auth
  handleInputChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.loginUserName,
      password: this.state.loginPassword,
    }).then(res => {
      console.log(res);
      if (res.data.token) {
        Auth.authenticateToken(res.data.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginUserPassword: '',
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleRegisterSubmit(e) {
    e.preventDefault();
    axios.post('/users', {
      user: {
        username: this.state.registerUserName,
        password: this.state.registerPassword,
        email: this.state.registerEmail,
        name: this.state.registerName,
      }
    }).then(res => {
      if (res.data.token) {
        Auth.authenticateToken(res.data.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  resetFireRedirect() {
    if (this.state.shouldFireRedirect) {
      this.setState({
        shouldFireRedirect: false,
      })
    }
  }

  logoutUser() {
    axios.delete('/logout', {
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUserName: '',
        loginUserPassword: '',
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Router>
        <div className="app">
          <Nav logoutUser={this.logoutUser} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() =>
              !this.state.auth ? (
                <LoginForm
                  auth={this.state.auth}
                  loginUserName={this.state.loginUserName}
                  loginPassword={this.state.loginPassword}
                  handleInputChange={this.handleInputChange}
                  handleLoginSubmit={this.handleLoginSubmit}
                />
              ) : (
                <Redirect to="/dashboard" />
              )}
          />
          <Route
            exact
            path="/register"
            render={() => 
              !this.state.auth ? (
                <RegisterForm
                  auth={this.state.auth}
                  registerUserName={this.state.registerUserName}
                  registerPassword={this.state.registerPassword}
                  registerEmail={this.state.registerEmail}
                  registerFirstName={this.state.registerFirstName}
                  registerLastName={this.state.registerLastName}
                  handleInputChange={this.handleInputChange}
                  handleRegisterSubmit={this.handleRegisterSubmit}
                />
              ) : (
                <Redirect to="/dashboard" />
              )}
            />
          <Route
              exact
              path="/dashboard"
              render={() =>
                this.state.auth ? <Dashboard auth={this.state.auth} resetFireRedirect={this.resetFireRedirect} />
                : <Redirect to="/login" />}
          />
           <Route exact path="/artworks"  
           render={() =>
             <ArtworkList 
              handleInputChange={this.handleInputChange}
              artworkPrompt={this.state.artworkPrompt}
              artworkDate={this.state.artworkDate}
              />}
            />
          <Route
            exact
            path="/newartwork"
            render={() =>
              this.state.auth ? (
                <ArtworkCreate
                  artworkUrl={this.state.artworkUrl}
                  artworkTitle={this.state.artworkTitle}
                  artworkDescription={this.state.artworkDescription}
                  artworkPrompt={this.state.artworkPrompt}
                  artworkDate={this.state.artworkDate}
                  handleInputChange={this.handleInputChange}
                  handleUploadSuccess={this.handleUploadSuccess}
                  handleArtworkSubmit={this.handleArtworkSubmit}
                  shouldFireRedirect={this.state.shouldFireRedirect}
                />
              ) : (
                <Redirect to="/login" />
              )}
          />
          </div>
          </Router>

    </div>
    );
  }
}

export default App;