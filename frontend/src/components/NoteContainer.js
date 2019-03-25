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
    editViewOn: false,
    searchTerm: ''
  }

  componentDidMount(){
    API.getAllUsers()
      .then(users => this.setState({allUsers: users}))
      .then(() => this.setState({currentUser: this.state.allUsers[0]}))
    API.getAllNotes()
      .then(notes => this.setState({allNotes: notes}))
  }

  selectNote = note => this.setState({selectedNote: note})

  showEditor = () => this.setState({editViewOn: true})

  // updateNote = (title, body) => {
  //
  //   fetch("http://localhost:3000/api/v1/notes"+`/${this.state.selectedNote.id}`, {
  //     method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(updatedNote)
  //     })
  //       .then(res => res.json())
  //       .then(note =>
  //         this.setState({selectedNote: note}))
  //   }
  // }

  createNewNote = () => {
    console.log('clicked')
    const newNote = {
      title: 'Add new title...',
      body: 'Add content...',
      user_id: this.state.currentUser.id
    }
    return fetch("http://localhost:3000/api/v1/notes", {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
      })
        .then(res => res.json())
        .then(note => this.setState({ allNotes: [...this.state.allNotes, note] }))
    }

  handleChange = (event) => this.setState({searchTerm: event.target.value })

  render() {
    return (
      <Fragment>
        <Search handleChange={this.handleChange}/>
        <div className='container'>
          <Sidebar searchTerm={this.state.searchTerm} currentUser={this.state.currentUser} allNotes={this.state.allNotes} onClickViewNote={this.selectNote} onClickNewNote={this.createNewNote}/>
          <Content editViewOn={this.state.editViewOn} selectedNote={this.state.selectedNote} showEditor={this.showEditor} saveChanges={this.updateNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
