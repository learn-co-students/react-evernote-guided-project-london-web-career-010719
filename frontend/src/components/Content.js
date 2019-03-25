import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = () => {
    if (this.props.editViewOn === true) {
      return <NoteEditor />;
    } else if (this.props.editViewOn === false && this.props.selectedNote) {
      return <NoteViewer selectedNote={this.props.selectedNote}/>;
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
