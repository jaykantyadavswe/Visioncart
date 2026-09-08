import Product from "../models/Product.model.js";

const createProduct = async (productData) => {
    const product = await Product.create(productData);

    return product;
};

export { createProduct };