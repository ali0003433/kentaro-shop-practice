const Product = require('../models/product');

const mongoose =require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds123454.mlab.com:23454/kentaro-test');

const products = [
    new Product({
        filePath: 'https://commons.wikimedia.org/wiki/Category:Dotted_dresses#/media/File:Ronai_dottedlady.jpg',
        title: 'black dress',
        description: 'Halvah cupcake jujubes dessert chupa chups candy canes. Cake topping croissant jelly-o. Fruitcake pie chupa chups. Lemon drops sweet brownie cupcake cupcake sugar plum jelly.',
        price:300,
    }),
    new Product({
        filePath:'https://commons.wikimedia.org/wiki/Category:Women_wearing_pink_zip_up_hoodies#/media/File:Larry_the_cat_in_a_harness_being_held_by_a_pink_human_in_Auderghem,_Belgium.jpg',
        title: 'sweater',
        description: 'Tart powder cupcake gummi bears sesame snaps chocolate cake. Gingerbread tootsie roll jujubes dessert marshmallow oat cake. Candy icing donut bonbon icing marzipan soufflé tart.',
        price: 767,
    })
];

let done=0;
for (let i=0; i <products.length;i++){
    products[i].save(function(err,result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}