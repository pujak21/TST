const products = [
  {
    id: "x990",
    name: "FINGER PRINT - X990",
    category: "Finger-print",
    tagline: "Advanced Biometric Access Control",
    capacity: "10,000",
    price: "Contact for Price"
  },
  {
    id: "f19",
    name: "FACE RECOGNITION - F19",
    category: "Face Recognition",
    tagline: "AI-Powered Face Detection System",
    capacity: "5,000",
    price: "Contact for Price"
  },
  {
    id: "ac100",
    name: "ACCESS CONTROL - AC100",
    category: "Access Control",
    tagline: "Smart Door Management System",
    capacity: "Unlimited",
    price: "Contact for Price"
  }
];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};
