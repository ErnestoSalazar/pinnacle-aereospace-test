import * as ItemActionTypes from '../actiontypes/item';

export const addItem = (name, description, price, sizes, image, imageDescription) => {
    return {
        type: ItemActionTypes.ADD_ITEM,
        name,
        description,
        price,
        sizes,
        image,
        imageDescription
    };
};

export const removeItem = index => {
    return {
        type: ItemActionTypes.REMOVE_ITEM,
        index
    };
};

export const updateItem = (index, name, description, price, sizes, selectedSize, image, imageDescription) => {
    return {
        type: ItemActionTypes.UPDATE_ITEM,
        index,
        name,
        description,
        price,
        sizes,
        selectedSize,
        image,
        imageDescription
    }
};



export const selectItem = index => {
    return {
        type: ItemActionTypes.SELECT_ITEM,
        index
    };
};


export const insertToSelectedItem = (id, selectedSize) => {
    return {
        type: ItemActionTypes.INSERT_TO_SELECTED,
        id,
        selectedSize
    }
};