import * as itemActionTypes from '../actiontypes/item';

export const addItem = (name, description, sizes, image, imageDescription) => {
    return {
        type: itemActionTypes.ADD_ITEM,
        name,
        description,
        sizes,
        image,
        imageDescription
    };
};

export const removeItem = index => {
    return {
        type: itemActionTypes.REMOVE_ITEM,
        index
    };
};

export const updateItem = (index, name, description, sizes, image, imageDescription) => {
    return {
        type: itemActionTypes.UPDATE_ITEM,
        index,
        name,
        description,
        sizes,
        image,
        imageDescription
    }
};