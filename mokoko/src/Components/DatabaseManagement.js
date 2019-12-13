import '../App.css';
import React, {Component} from 'react';
import myFirebaseConfig from '../app-config/firebase';
import Firebase from 'firebase';

class DatabaseManagement extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(myFirebaseConfig);

    this.state = {myMessages: []};
  }

  componentDidMount() {
    this.getMessagesFromDatabase();
  }

  getMessagesFromDatabase() {
    // Ask firebase to order the objects (messages) returned by timestamp
    let ref = Firebase.database().ref('messages').orderByChild('timestamp');
    ref.on('value', (snapshot) => {
      let msgData = snapshot.val();

      // This array will store the objects we download from the firebase db.
      let newStateMessages = [];
      for (let m in msgData)
      {
        // create a JSON object version of our object.
        let currObj =  {id: msgData[m].id, msg: msgData[m].msg,timestamp:msgData[m].timestamp}
        // add it to our newStateMessages array.
        newStateMessages.push(currObj);
      } // end for loop
      // call the method to update state in App.js component.
      this.updateStateMessages(newStateMessages);

    }); // end of the on method
    console.log('In getMessagesFromDatabase()');
  }

  updateStateMessages(newMessages)
  {
    this.setState({myMessages: newMessages});
    console.log(this.state.myMessages);
  }

  render() {

    return (
      <div className="container">
      </div>
    );
  }
}

export default DatabaseManagement;
