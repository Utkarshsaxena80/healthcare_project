# XTENSIV

[XTENSIV](https://xtensive.onrender.com) is a simple inventory management website that allows users to **add, view, edit, delete, sort**, and **search products**. It also includes **user authentication** to ensure secure access. It is build with **MVC** pattern.

#### XTENSIV HAS BEEN DEPLOYED ON RENDER (https://xtensive.onrender.com)

## For a better user experience use the following ID 



**Important:**

- **Username**: `demo`
- **Password**: `demo123`

Use the credentials above to log in and explore the app or u can create one to start your inventory now.

## build commands

To run the project,
#### clone the repository
- git clone https://github.com/chawlasaksham/XTENSIVE.git

#### use command to go in particular directory
- cd XTENSIVE
#### you can use database at atlas data-base by creating your own account at cloudinary and atlas database
#### or you can directly use init.js to initialize mongo database and run it locally

#### write command in terminal :
- npm install
#### then write :
- nodemon app.js or node app.js (ensure to install the node.js from chrome)
  
### Environment Variables
you will need to create a `.env` file in the root directory and provide your own values for the following variables (you can copy the structure given below nad enter your own details):
- CLOUD_NAME= your_cloud_name
- CLOUD_API_KEY= your_own_cloud_api_key
- CLOUD_API_SECRET= your own_cloud_api_secret

- ATLAS_URL_DB=mongodb+srv://<username>:<password>@<clustername>.stgjz.mongodb.net/?retryWrites=true&w=majority&appName=<cluster-name>
- SECRET=<anystring>

#### also in app.js make a = 0 so that it come back at development phase!!

## Features

- **Add Products**: Easily add new products to your inventory by providing details like name, SKU, capacity, quantity, and price.
- **View Products**: View all products in a table format on the dashboard, with details such as product name, SKU, price, and category.
- **Edit Products**: Make changes to any product by editing its details directly from the product list.
- **Delete Products**: Remove products from the inventory with a simple delete option.
- **Search Products**: Quickly search for products by their SKU through the navbar.
- **Sort Products**: Sort products based on categories on the dashboard.
- **User Authentication**: Secure access with login and logout features. Only authenticated users can add, edit, or delete products.

## Usage

### Add a Product

- Go to the **Add Product** section on the Navbar.
- Fill in the necessary details like name, SKU, capacity, quantity, and price.
- Click **Add** to include the product in the inventory.

### View Products

- Click on the product card to view product details.
- Navigate to the **Products** table in the Navbar to see all listed products.

### Edit a Product

- Locate the product you want to edit in the product list.
- Click the **Edit** button, make your changes, and then click **Update**.

### Delete a Product

- Click the **Delete** button next to the product you wish to remove and confirm the action.

### Search a Product

- Enter the SKU of the product in the search bar in the Navbar and click the search button.

### Sort Products

- On the dashboard, use the sorting options to organize products based on categories.

## Built With

- **Node.js**: JavaScript runtime for building the backend
- **Express.js**: Web application framework for handling HTTP requests
- **MongoDB**: Database for storing product information
- **EJS**: Template engine for rendering views
- **Passport.js**: Authentication middleware for securing user access
- **Connect-flash**: For flashing success and error messages
- **Bootstrap**: Frontend framework for styling
- **Atlas**: For cloud database storage (uses AWS and Cloudinary for image URLs)
- **Render**: For deploying the project
- **multer**: used for uploading files
- **Joi** : used for schema validation 
  
## Future Changes

- User and admin authentication enhancements
- Integration of React into the project

## Features of each file

### controller
it contains the function that to be performend whaen a route recieve request
it is further divided into two
- listing.js: it has functionality for adding, deleting etc.. commands.
- user.js: it has  functionality for login, logout and signup commands.

### init
It contains the data for initializing mongodb database on local system

### models
It contains the listing and user schema

### public
- Has basic css and validation.js for the webpage
- Validation.js is used for schema validation

### listings
- it has all the ejs pages for separate task .
-  Boilerpalte.ejs is the main page that define how all the other pages are shown.
-  index.ejs is dasboard where all the products are displayed and similarly there are all the other ejs files...
- middleware.js has all validation related middleware that helps in validating owner,login and schemavalidation services.

### app.js
- it is the main file that runs the website basically it gives the cloud related information and the route related information

### cloudconfig
- contains the code for connecting cloud.

### schema.js
- it contains joi that validates data entered by user it is according to the format.

## Contact

For any questions or feedback, please reach out to [chawlasaksham02@gmail.com](mailto:chawlasaksham02@gmail.com).
