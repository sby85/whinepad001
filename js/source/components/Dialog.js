import React, {Component, PropTypes} from 'react';
import Button from './Button';

class Dialog extends Component {
  componentWillUnmount(){
    
  }
  
  componentDidMount(){
    
  }
  
  render(){
    return(
      <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
        <div className={this.props.modal ? 'DialogModalWrap' : null}>
          <div className="DialogHeader">{this.props.header}</div>
          <div className="DialogBody">{this.props.children}</div>
          <div className="DialogFooter">
            {this.props.hasCancel
              ?
                <span
                  className="DialogDismiss"
                  onClick={this.props.onAction.bind(this, 'dismiss')}
                >Cancel</span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this,
              this.props.hasCancel ? 'confirm' : 'dismiss'
            )}>
              {this.props.confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  

  
}

Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  hasCancel: PropTypes.bool,
  confirmLable: PropTypes.string,
  onAction: PropTypes.func,
  modal: PropTypes.bool,
};

Dialog.defaultProps = {
  confirmLabel: 'OK',
  modal: false,
  onAction: ()=>{},
  hasCancel: true,
};

export default Dialog

