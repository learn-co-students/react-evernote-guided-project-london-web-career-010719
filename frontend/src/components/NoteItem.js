import React from 'react';

const NoteList = (props) => (
  <li onClick={props.onClickViewNote}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 45)}...</p>
  </li>
);

export default NoteList;
