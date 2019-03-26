import React from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends React.Component {

  renderList () {
    const notesWithUser = this.props.allNotes.filter(note => note.user)
    const userNotes = notesWithUser.filter(note => note.user.id === this.props.currentUser.id)
    const matchSearch = userNotes.filter(note => note.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    if (this.props.searchTerm === '') {
      return userNotes.map(note => <NoteItem key={note.id} {...note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    } else {
      return matchSearch.map(note => <NoteItem key={note.id} {...note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    }
  }


  render() {
    return (
      <ul>
        {
         this.renderList()
        }
      </ul>
    );
  }

}
