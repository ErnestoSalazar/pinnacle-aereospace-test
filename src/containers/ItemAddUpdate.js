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
                price,
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

    handleUpdateItem = () => {
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
            const {updateItem} = this.props;

            updateItem(
                name,
                description,
                price,
                selectedItems.map(size => size.value),
                image,
                imageDescription
            )

        }
        else {
            alert('Debes rellenar todo el formulario')
        }
    };


    render() {
        const {isOpen, handleClose, item} = this.props;


        let name;
        let description;
        let price;
        let image;
        let imageDescription;
        if (item) {
            name        = item.name;
            description = item.description;
            price       = item.price;
            image       = item.image;
            imageDescription = item.imageDescription;
        }


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
                        ref='name'
                        type="text"
                        label="Nombre"
                        value={name}
                    />
                    <TextField
                        ref="description"
                        type="text"
                        label="Descripción"
                        value={description}
                    />

                    <FormLabel component="legend">Tamaños</FormLabel>
                    {checkboxes}

                    <TextField
                        ref="price"
                        type="number"
                        label="Precio"
                        value={price}
                    />
                    <TextField
                        ref="image"
                        type="text"
                        label="Imagen"
                        value={image}
                    />
                    <TextField
                        ref="imageDescription"
                        type="text"
                        label="Descripción de imagen"
                        value={imageDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button color="primary" onClick={() => {
                        if (!this.props.item) {
                            this.handleAddItem()
                        } else {
                            alert('not finished')
                            //this.handleUpdateItem();
                        }
                    }}>
                        {item? 'Actualizar' : 'Agregar'}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}