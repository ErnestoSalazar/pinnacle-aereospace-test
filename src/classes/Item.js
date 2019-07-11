import {generateRandomString} from '../util/randomStringGenerator';
export default class Item {

    /**
     *
     * @param {String} name
     * @param {String} description
     * @param {Array<Object>} sizes
     * @param {Number} price
     * @param {String}image
     * @param {String} imageDescription
     */
    constructor(name, description, sizes, selectedSize, price, image, imageDescription) {
        this.id = generateRandomString();
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.selectedSize =
        this.price = price;
        this.image = image;
        this.imageDescription = imageDescription;
    }
}