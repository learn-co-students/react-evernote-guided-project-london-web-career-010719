import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  saveChanges = () => {
    this.props.saveChanges(this.state.title, this.state.body)
  }

  render() {
    return (
      <form onClick={this.saveChanges} className="note-editor">
        <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
        <textarea onChange={this.handleChange} name="body" value={this.state.body} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.props.onClick} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
