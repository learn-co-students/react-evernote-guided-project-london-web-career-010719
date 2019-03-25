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
  }

  componentDidMount(){
    API.getAllUsers()
      .then(users => this.setState({allUsers: users}))
      .then(() => this.setState({currentUser: this.state.allUsers[0]}))
    API.getAllNotes()
      .then(notes => this.setState({allNotes: notes}))
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar currentUser={this.state.currentUser} allNotes={this.state.allNotes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
