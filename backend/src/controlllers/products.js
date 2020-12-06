const productCtrl = {};
const Products = require('../models/Products');

// Get all products
productCtrl.getProducts = async (req, res) => {
    try {
        
        const product = await Products.find();

        res.status(201).json(product);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// Create a new product
productCtrl.createProduct = async (req, res) => {
    try {
 
        const { title, description, authorName } = req.body;

        const newProduct = await new Products({ title, description, authorName });

        await newProduct.save()

        res.status(201).json({ message: 'Created' });

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


// Get a product
productCtrl.getProduct = async (req, res) => {
    try {
     
        const id = req.params.id;
    
        const product = await Products.findOne({ _id: id });
    
        res.status(201).json(product);
    
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// Edited a product
productCtrl.updateProduct = async (req, res) => {
    Products.findOne(req.params.id)
    .then(product => {
        product.title = req.body.title;
        product.description = req.body.description;
        product.authorName = req.body.authorName;

        product.save()
            .then(() => res.json('Updated'))
            .catch(err => res.status(400).json(`Error: ${err}`))
    })
    
    // try {
 
    //     const { title, description, authorName } = req.body;

    //     await Products.findOneAndUpdate( req.params.id ,{ title, description, authorName });

    //     res.status(201).json({ message: 'Updated' });

    // } catch (error) {
    //     res.status(404).json({ message: error.message })
    // }
}


// Deleted a product
productCtrl.deleteProduct = async (req, res) => {
    try {
 
        const id = req.params.id;

        await Products.findOneAndDelete({ _id: id });

        res.status(201).json({ message: 'Deleted' });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = productCtrl