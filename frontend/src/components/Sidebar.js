import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList searchTerm={this.props.searchTerm} currentUser={this.props.currentUser} allNotes={this.props.allNotes} onClickViewNote={this.props.onClickViewNote}/>
        <button onClick={this.props.onclickNewNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
