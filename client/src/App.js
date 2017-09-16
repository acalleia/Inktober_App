import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { base } from './base';
import Message from './components/Message';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     messages: [],
     messageContent: '',
     username: '',
     avatar: '',
     isUploading: false,
     progress: 0,
     avatarURL: ''
    };

    this.rootRef = firebase.database().ref();
    this.messageRef = this.rootRef.child('messages');
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

 
  handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };

  componentDidMount(){
    this.messageRef.on('child_added', snapshot => {
      const updatedMessages = [...this.state.messages];
      const newMessage = snapshot.val();
      newMessage.key = snapshot.key;
      updatedMessages.push(newMessage)
      this.setState({
        messages: updatedMessages,
      });
    });

    this.messageRef.on('child_removed', snapshot => {
      const updatedMessages = [...this.state.messages];
      for(let i=0; i < updatedMessages.length; i++){
        if(updatedMessages[i].key === snapshot.key){
          updatedMessages.splice(i,1)
          this.setState({
            messages: updatedMessages,
          })
        }
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const date = new Date();
    this.messageRef.push().set({
      time: date.toTimeString(),
      content: this.state.messageContent
    })

    this.setState({messageContent: ''})
  }

  handleChange(e){
    this.setState({messageContent: e.target.value})
  }


  render() {
    return (
      <div className="App">
        <div>
          {this.state.messages.map(message => {
            return <Message key={message.key} firebaseRef={this.messageRef.child(message.key)} message={message}/>
          })}
        </div>

        <form name="message" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.messageContent} onChange={this.handleChange}/>
          <input type="submit"  value="Send" />
        </form>

        <img src="https://firebasestorage.googleapis.com/v0/b/inktoberapp.appspot.com/o/images%2F2fe5fb2f-f0cc-46fb-9ec8-23b7a8b80c9d.jpg?alt=media&token=e859c653-b23e-4733-924a-1d2d9b421b27" />
          
       <form>
          <label>Username:</label>
          <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />
          <label>Avatar:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
    </div>
    );
  }
}

export default App;