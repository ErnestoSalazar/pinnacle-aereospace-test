import React, {Component} from 'react';
import CheckboxC from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Checkbox extends Component{

    state = {
        isCheck: false,
        value: null,
    };

    handleCheck = (e) => {
        if (this.state.isCheck) {
            this.setState({isCheck: !this.state.isCheck, value: null});
        }
        else {
            this.setState({isCheck: !this.state.isCheck, value: e.target.value});
        }
    };


    getValue = () => {
        return this.state.value;
    };


    render() {

        const {value, label, handleCheck, isCheck} = this.props;

        return (
            <FormControlLabel
                label={label}
                labelPlacement={'top'}
                control={
                    <CheckboxC
                        checked={isCheck || this.state.isCheck}
                        onChange={handleCheck || this.handleCheck}
                        value={value}
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                }
            />
        );
    }
}