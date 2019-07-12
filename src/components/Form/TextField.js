import React, {Component} from 'react';
import TextFieldC from '@material-ui/core/TextField';


export default class TextField extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    };

    getValue() {
        return this.state.value;
    }

    setValue(value) {
        this.setState({value});
    }

    render() {

        const {label, type} = this.props;

        return (
            <TextFieldC
                autoFocus
                value={this.state.value || this.props.value}
                margin="dense"
                label={label}
                type={type}
                fullWidth
                onChange={this.handleValueChange}
            />
        )
    }
}