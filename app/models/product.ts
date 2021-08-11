export class Product {
    id: number;
    name: string;
    discription: string;
    price: number;
    imageurl: string;

    constructor(id: number , name='', discription = '', price = 0, imageurl = 'https://pngimg.com/uploads/mario/mario_PNG53.png') {
        this.id = id
        this.name = name
        this.discription = discription
        this.price = price
        this.imageurl = imageurl

    }


}
