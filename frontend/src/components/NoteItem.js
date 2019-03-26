import React from 'react';

const NoteList = (props) => (
  <li onClick={props.onClickViewNote}>
    <h2>{props.title}</h2>
    <p>{props.body.slice(0, 30)}...</p>
  </li>
);

export default NoteList;
