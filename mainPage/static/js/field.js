class Mao {
    constructor (name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;

        this.markers = [];
    }

    loadJSON (json) {
        this.markers.push(json);
    }
}