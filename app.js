import React from "react";
import ReactDOM from "react-dom";
// import firebase from "firebase";
 import Header from "./component/header";
import Context from "./context";
import Content from "./component/content";
// import Select from "./select.js";


//initialize firebase
// var config = {
//   apiKey: "AIzaSyA-7E8uwpkdLOZ8VU_qlXrjR1pZLhdtH-4",
//   authDomain: "racheta-51136.firebaseapp.com",
//   databaseURL: "https://racheta-51136.firebaseio.com",
//   projectId: "racheta-51136",
//   storageBucket: "racheta-51136.appspot.com",
//   messagingSenderId: "738135326378"
// };
// firebase.initializeApp(config);
// import React, { Component } from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pres: [{}],
      age: "",
      name: "",
      selectedOption: [],
      isAdd: false,
      isList: true
    };

  //   firebase
  //     .firestore()
  //     .collection("racheta")
  //     .orderBy("date", "desc")
  //     .onSnapshot(snapshot => {
  //       let pres = [];

  //       snapshot.forEach(doc => {
  //         pres.push(doc.data());
  //         this.setState({
  //           pres: pres
  //         });
  //       });
  //     });
   }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            onChangeName: value => {
              this.setState({
                name: value
              });
            },
            onChangeAge: value => {
              this.setState({
                age: value
              });
            },
            toggle: () => {
              if (this.state.isAdd == false) {
                this.setState({
                  isAdd: !this.state.isAdd
                });
              } else {
                this.setState({
                  isAdd: !this.state.isAdd
                });
              }
            },
             handleChange: selectedOption => {
              this.setState({ selectedOption });
             }
          }
        }}
      >
        <Header />
        <Content/>
        {/* <Pre_list/> */}
      </Context.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

