import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <div>Sort: &nbsp; &nbsp;
        <select onChange={this.props.handleSortChange}>
            <option value="alphabetically">alphabetically</option>
            <option value="longest">longest</option>
            <option value="shortest">shortest</option>
            <option value="newest">newest</option>
          </select>
        </div>
        <NoteList sortBy={this.props.sortBy} searchTerm={this.props.searchTerm} currentUser={this.props.currentUser} allNotes={this.props.allNotes} onClickViewNote={this.props.onClickViewNote}/>
        <button onClick={this.props.onclickNewNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
