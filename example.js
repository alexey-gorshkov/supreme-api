var categories = require('./options')
var api = require('./app');

api.getAll(categories.all, (product, category, err) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(`${product} found in ${category}`);
});

api.getItem(categories.item, (product, err) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(product);
});

api.getAll(categories.category.sweatshirts, (product, category, err) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(`${product} found in ${category}`);
});