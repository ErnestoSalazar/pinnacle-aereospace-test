import * as ItemActioTypes from '../actiontypes/item';
import ItemC from '../classes/Item';


const initialState = [];

export default function Item (state = initialState, action) {

    switch (action.type) {
        case ItemActioTypes.ADD_ITEM: {
            const item = new ItemC(action.name, action.description, action.sizes, action.price, action.image, action.imageDescription);
            return [
                ...state,
                item
            ];
        }

        case ItemActioTypes.REMOVE_ITEM: {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ];
        }

        case ItemActioTypes.UPDATE_ITEM: {
            return state.map((item, index) => {

                if (index === action.index) {
                    item.name = action.name;
                    item.description = action.description;
                    item.sizes = action.sizes;
                    item.price = action.price;
                    item.imageDescription = action.imageDescription;
                }

                return item;
            });
        }

        default: {
            return state;
        }
    }

}