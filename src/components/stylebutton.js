import React from 'react';

export default class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    className += ' RichEditor-styleButton-' + this.props.style.toLowerCase();
    return (
      <span className={className + ' hint--top'} onMouseDown={this.onToggle} aria-label={this.props.description}>
        {this.props.icon ? <i className={"fa fa-" + this.props.icon} /> : this.props.label}
      </span>
    );
  }
}
