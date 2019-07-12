import * as ItemActioTypes from '../actiontypes/item';
import ItemC from '../classes/Item';

import faker from 'faker';

let itemsArr = [];
(function() {
    for (let i = 0; i < 100; i++) {
        const randomProductName = faker.commerce.productName();
        const sizes = ['s', 'm', 'l'];
        const price = faker.commerce.price();
        const image = faker.image.food();

        const item = new ItemC(randomProductName, randomProductName, sizes, null, price, image, randomProductName);
        itemsArr.push(item);
    }
}());


const initialState = {
    items: [
        ...itemsArr
    ],
    selectedItems: [],
    selectedItemIndex: -1
};

export default function Item (state = initialState, action) {

    switch (action.type) {
        case ItemActioTypes.ADD_ITEM: {
            const item = new ItemC(action.name, action.description, action.sizes, null, action.price, action.image, action.imageDescription);
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
            const item = state.items.find((item, index) => index === action.index );
            const removedItemList = [
                ...state.items.slice(0, action.index),
                ...state.items.slice(action.index+1)
            ];
            const removedSelectedItem = state.selectedItems.filter(fitem => fitem.id !== item.id);
            console.log(removedSelectedItem);
            return {
                ...state,
                items: removedItemList,
                selectedItems: removedSelectedItem
            };
        }

        case ItemActioTypes.UPDATE_ITEM: {
            const updatedItemList = state.items.map((item, index) => {
                if (index === action.index) {
                    return {
                        ...item,
                        name: action.name,
                        description: action.description,
                        sizes: action.sizes,
                        selectedSize: action.selectedSize,
                        price: action.price,
                        image: action.image,
                        imageDescription: action.imageDescription
                    };
                }
                return item;
            });
            return {
                ...state,
                items: updatedItemList
            }
        }

        case ItemActioTypes.INSERT_TO_SELECTED: {
            const selectedItem = {
                id: action.id,
                selectedSize: action.selectedSize
            };
            const addedSelectedItemList = [
                ...state.selectedItems,
                selectedItem
            ];
            return {
                ...state,
                selectedItems: addedSelectedItemList
            }
        }

        case ItemActioTypes.SELECT_ITEM: {
            return {
                ...state,
                selectedItemIndex: action.index
            }
        }

        default: {
            return state;
        }
    }

}