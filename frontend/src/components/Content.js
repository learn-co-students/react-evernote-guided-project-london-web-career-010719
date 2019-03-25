import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = () => {
    if (this.props.editViewOn === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} saveChanges={this.props.saveChanges}/>;
    } else if (this.props.editViewOn === false && this.props.selectedNote) {
      return <NoteViewer selectedNote={this.props.selectedNote} onClick={this.props.showEditor}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
