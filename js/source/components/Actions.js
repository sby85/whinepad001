import React, {Component, PropTypes} from 'react';

const Actions = props =>
  <div className="Actions">
    <span
      tabIndex="0"
      className="ActionInfo"
      title="more..."
      onClick={props.onAction.bind(null, 'info')}
    >&#8505;</span>
    <span
      tabIndex="0"
      className="ActionEdit"
      title="Edit"
      onClick={props.onAction.bind(null, 'edit')}
    >&#10000;</span>
    <span
      tabIndex="0"
      className="ActionDelet"
      title="delete"
      onClick={props.onAction.bind(null, 'delete')}
    >x</span>
  </div>
;

Actions.propTypes = {
  onAction: PropTypes.func,
};

Actions.defaultProps = {
  onAction: ()=>{},
};

export default Actions

