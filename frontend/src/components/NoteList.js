import React from 'react';
import NoteItem from './NoteItem';

export default class NoteList extends React.Component {

  renderList () {
    const matchSearch = this.props.allNotes.filter(note => note.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    const userNotes = this.props.allNotes.filter(note => note.user_id === this.props.currentUser.id)

    // if (this.props.searchTerm === '') {
      return userNotes.map(note => <NoteItem key={note.id} note={note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    // } else {
    //   return matchSearch.map(note => <NoteItem key={note.id} note={note} onClickViewNote={() => this.props.onClickViewNote(note)}/>)
    // }
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
