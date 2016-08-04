import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

export default class FindButton extends Component {
    render() {
        return (
            <RaisedButton
                label="Find"
                primary={true}
                onMouseDown={ _.debounce((term) => { this.props.onClick(); }, 300) }/>
        );
    }
}

FindButton.propTypes = {
    onClick: React.PropTypes.func
};
