import * as ItemActioTypes from '../actiontypes/item';
import ItemC from '../classes/Item';


const initialState = {
    items: [],
    selectedItemIndex: -1
};

export default function Item (state = initialState, action) {

    switch (action.type) {
        case ItemActioTypes.ADD_ITEM: {
            const item = new ItemC(action.name, action.description, action.sizes, action.price, action.image, action.imageDescription);
            const addedItemList = [
                ...state.items,
                item
            ];
            return  {
                ...state,
                items: addedItemList
            };
        }

        case ItemActioTypes.REMOVE_ITEM: {
            const removedItemList = [
                ...state.items.slice(0, action.index),
                ...state.items.slice(action.index+1)
            ];
            return {
                ...state,
                items: removedItemList
            };
        }

        case ItemActioTypes.UPDATE_ITEM: {
            const updatedItemList = state.items.map((item, index) => {
                if (index === action.index) {
                    item.name = action.name;
                    item.description = action.description;
                    item.sizes = action.sizes;
                    item.price = action.price;
                    item.imageDescription = action.imageDescription;
                }

                return item;
            });
            return {
                ...state,
                items: updatedItemList
            }
        }

        default: {
            return state;
        }
    }

}