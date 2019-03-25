import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import API from '../adapters/API';

class NoteContainer extends Component {

  state = {
    allUsers:[],
    allNotes:[],
    currentUser: '',
    selectedNote: '',
    editViewOn: false
  }

  componentDidMount(){
    API.getAllUsers()
      .then(users => this.setState({allUsers: users}))
      .then(() => this.setState({currentUser: this.state.allUsers[0]}))
    API.getAllNotes()
      .then(notes => this.setState({allNotes: notes}))
  }

  selectNote = note => this.setState({selectedNote: note})

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar currentUser={this.state.currentUser} allNotes={this.state.allNotes} onClickViewNote={this.selectNote}/>
          <Content editViewOn={this.state.editViewOn} selectedNote={this.state.selectedNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
