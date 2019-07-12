import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ('./index.css');

export default function FloatingActionButtons({btnPosition, onClick}) {

    return (
        <div className={btnPosition}>
            <Fab color="secondary" aria-label="Add" onClick={onClick}>
                <AddIcon />
            </Fab>
        </div>
    );
}