export default class Item {

    /**
     *
     * @param {String} name
     * @param {String} description
     * @param {Array<Object>} sizes
     * @param {String}image
     * @param {String} imageDescription
     */
    constructor(name, description, sizes, image, imageDescription) {
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.image = image;
        this.imageDescription = imageDescription;
    }
}