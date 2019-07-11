import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function RadioButtonsGroup({value, label}) {

    return (
        <FormControlLabel value={value} control={<Radio />} label={label} />
    );
}