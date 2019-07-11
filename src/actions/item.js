import * as ItemActionTypes from '../actiontypes/item';

export const addItem = (name, description, sizes, image, imageDescription) => {
    return {
        type: ItemActionTypes.ADD_ITEM,
        name,
        description,
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

export const updateItem = (index, name, description, sizes, image, imageDescription) => {
    return {
        type: ItemActionTypes.UPDATE_ITEM,
        index,
        name,
        description,
        sizes,
        image,
        imageDescription
    }
};