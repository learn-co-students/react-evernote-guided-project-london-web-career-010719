import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
       props.allNotes.map(note => note.user.id === props.currentUser.id ? <NoteItem key={note.id} note={note} onClickViewNote={props.onClickViewNote(note)}/> : null)
      }
    </ul>
  );
}

export default NoteList;
