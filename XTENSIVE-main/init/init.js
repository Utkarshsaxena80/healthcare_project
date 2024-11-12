const sampleProducts = [
    {
      Product_name: "Smart TV 4K",
      image: {
        filename: "ProductImage",
        url: "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1200,
      quantity: 1,
      sku: "00001",
      category: "Electronics",
    },
    {
      Product_name: "Wireless Headphones",
      image: {
        filename: "ProductImage",
        url: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 200,
      quantity: 1,
      sku: "00002",
      category: "Electronics",
    },
    {
      Product_name: "Luxury Wool Coat",
      image: {
        filename: "ProductImage",
        url: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 500,
      quantity: 1,
      sku: "00003",
      category: "Clothing",
    },
    {
      Product_name: "Running Shoes",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 150,
      quantity: 1,
      sku: "00004",
      category: "Clothing",
    },
    {
      Product_name: "Portable Blender",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 100,
      quantity: 1,
      sku: "00005",
      category: "Home",
    },
    {
      Product_name: "Ergonomic Desk Chair",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1697807665474-974ab5eefaa9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 300,
      quantity: 1,
      sku: "00006",
      category: "Home",
    },
    {
      Product_name: "Adventure Novel",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1606715897809-f6b0c1e39c7e?q=80&w=404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 20,
      quantity: 1,
      sku: "00007",
      category: "Books",
    },
    {
      Product_name: "Self-Help Book",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1615253892603-719d2472c74c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 15,
      quantity: 1,
      sku: "00008",
      category: "Books",
    },
    {
      Product_name: "Educational Toy Set",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 50,
      quantity: 1,
      sku: "00009",
      category: "Toys",
    },
    {
      Product_name: "Building Blocks Set",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 30,
      quantity: 1,
      sku: "00010",
      category: "Toys",
    },
    {
      Product_name: "Smartphone",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 800,
      quantity: 1,
      sku: "00011",
      category: "Electronics",
    },
    {
      Product_name: "Bluetooth Speaker",
      image: {
        filename: "ProductImage",
        url: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120,
      quantity: 1,
      sku: "00012",
      category: "Electronics",
    },
    {
      Product_name: "Office Desk Lamp",
      image: {
        filename: "ProductImage",
        url: "https://plus.unsplash.com/premium_photo-1681412205381-c0e9681bcbb8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 80,
      quantity: 1,
      sku: "00013",
      category: "Home",
    },

  ];
  
  module.exports = { data: sampleProducts };