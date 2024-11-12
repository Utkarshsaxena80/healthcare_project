const Product = require('../models/listing');

module.exports.index = async (req, res) => {
    try {let  loggedinuserid  = req.user._id;
        const alllistings = await Product.find({owner:loggedinuserid});
        res.render('listings/index.ejs', { alllistings });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.indextable = async (req, res) => {
    try {let  loggedinuserid  = req.user._id;
        const alllistings = await Product.find({owner:loggedinuserid});
        res.render('listings/indextable.ejs', { alllistings });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};
module.exports.indextablesort = async (req, res) => {
    try {
        let  loggedinuserid  = req.user._id;
        let { category } = req.params;
        const alllistings = await Product.find({category:category , owner:loggedinuserid});
        res.render('listings/sorttable.ejs', { alllistings });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.rendernewform = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showlist = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    
    res.render("listings/show.ejs", { product });
}

module.exports.sortlist = async (req, res) => {
    try {
        let  loggedinuserid  = req.user._id;
        let { category } = req.params;
        const alllistings = await Product.find({category:category , owner:loggedinuserid});
        res.render('listings/indexsort.ejs', { alllistings });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.searchSku = async (req, res, next) => {
    try{
        let { sku } = req.query;
        const alllistings = await Product.find({sku:sku});
        
        if(alllistings==""){
            req.flash("error", "product with this Sku id does not exist. Visit the SiteGuide for more Info");
            res.redirect("/product");        
        }
        else{
        res.render('listings/indexsort.ejs', { alllistings });}
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.createlist = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newProduct = new Product(req.body.product);
    newProduct.owner = req.user._id;
    newProduct.image = { url, filename };
    let savedProduct = await newProduct.save();
   
    req.flash("success", "NEW PRODUCT CREATED");
    res.redirect("/product");
}



module.exports.editlist = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        req.flash("error", "product not found");
        res.redirect("/product");
    }
   
    let origurl = product.image.url;
    origurl = origurl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { product, origurl });
}

module.exports.updatelist = async (req, res) => {
    let { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, { ...req.body.product });
    
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        product.image = { url, filename };
        await product.save();
    }
    
    req.flash("success", "Updated Product");
    res.redirect(`/product/${id}`);
}

module.exports.deletelist = async (req, res) => {
    let { id } = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success", "Deleted Product");
    res.redirect(`/product`);
}

