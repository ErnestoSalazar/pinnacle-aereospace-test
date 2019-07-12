import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import TextField from '../components/Form/TextField';
import Checkbox from '../components/Form/Checkbox';
import FormLabel from "@material-ui/core/FormLabel";

export default class ItemAddUpdate extends Component {

    state = {
        sizes: [
            {
                value: 's',
                label: 'S',
                isCheck: false
            },
            {
                value: 'm',
                label: 'M',
                isCheck: false
            },
            {
                value: 'l',
                label: 'L',
                isCheck: false
            }
        ]
    };


    handleCheck = (e) => {
        const updatdSizeList = this.state.sizes.map(item => {
            if (item.value === e.target.value) {
                return {
                    ...item,
                    isCheck: !item.isCheck
                }
            }
            return item;
        });

        this.setState({sizes: updatdSizeList});
    };


    handleAddItem = () => {

        const selectedItems = this.state.sizes.filter(item => item.isCheck !== false);
        const name = this.refs.name.getValue();
        const description = this.refs.description.getValue();
        const price = this.refs.price.getValue();
        const image = this.refs.image.getValue();
        const imageDescription = this.refs.imageDescription.getValue();
        if (
            name &&
            description &&
            price &&
            image &&
            imageDescription&&
            selectedItems.length
        ) {
            const {addItem} = this.props;

            addItem(
                name,
                description,
                selectedItems.map(size => size.value),
                image,
                imageDescription
            );
            this.props.handleClose();
        }
        else {
            alert('Debes rellenar todo el formulario')
        }
    };


    render() {
        const {isOpen, handleClose} = this.props;

        const checkboxes = this.state.sizes.map((size, index) => (
            <Checkbox
                key={index}
                ref={'checkbox'}
                value={size.value}
                label={size.label}
                isCheck={size.isCheck}
                handleCheck={this.handleCheck}
            />
        ));


        return (
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" className="add-item-form">
                <DialogTitle id="form-dialog-title">Agregat platillo</DialogTitle>
                <DialogContent>
                    <TextField
                        ref="name"
                        type="text"
                        label="Nombre"
                    />
                    <TextField
                        ref="description"
                        type="text"
                        label="Descripción"
                    />

                    <FormLabel component="legend">Tamaños</FormLabel>
                    {checkboxes}

                    <TextField
                        ref="price"
                        type="number"
                        label="Precio"
                    />
                    <TextField
                        ref="image"
                        type="text"
                        label="Imagen"
                    />
                    <TextField
                        ref="imageDescription"
                        type="text"
                        label="Descripción de imagen"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={this.handleAddItem}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}