import CKEditor from "react-ckeditor-component";
import React, { Component } from "react";
class Editor extends Component {
  render() {
    const { content, onChange, onBlur, onAfterPaste } = this.props;

    return (
      <CKEditor
        id="1"
        activeClass="p10"
        content={content}
        events={{
          blur: onBlur,
          afterPaste: onAfterPaste,
          change: onChange
        }}
      />
    );
  }
}

export default Editor;
