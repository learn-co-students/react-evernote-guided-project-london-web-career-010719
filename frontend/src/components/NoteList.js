import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
       props.allNotes.map(note => <NoteItem allNotes={props.allNotes}/>)
      }
    </ul>
  );
}

export default NoteList;
