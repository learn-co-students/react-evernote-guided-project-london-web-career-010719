import React from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends React.Component {

  renderList () {
    if (this.props.searchTerm === "") {
      const userNotes = this.props.allNotes.map(note => note.user_id === this.props.currentUser.id)
      userNotes.map(note => <NoteItem key={note.id} note={note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    } else {
      const matchSearch = this.props.allNotes.map(note => note.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      return matchSearch.map(note => <NoteItem key={note.id} note={note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    }
  }

  render() {
    return (
      <ul>
        {
         this.renderList
        }
      </ul>
    );
  }
}
