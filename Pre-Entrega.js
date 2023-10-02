class ProductManager {
  constructor() {
    this.products = []; 
    this.productIdCounter = 1; 
  }

  // Método para agregar un producto al conjunto de productos
  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    // Verificar si el código ya existe en productos
    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      console.log("Ya existe un producto con el mismo código.");
      return;
    }

    // Asignar un ID autoincrementable
    product.id = this.productIdCounter++;
    
    // Agregar el producto al arreglo
    this.products.push(product);
    console.log(`Producto "${product.title}" agregado con éxito.`);
  }

  // Método para obtener todos los productos
  getProducts() {
    return this.products;
  }

  // Método para obtener un producto por su ID
  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado (ID:", id + ")");
    }
  }
}
const manager = new ProductManager();

// Agregamos productos
manager.addProduct({
  title: "Producto 1",
  description: "Descripción del Producto 1",
  price: 10,
  thumbnail: "ruta/imagen1.jpg",
  code: "P001",
  stock: 100
});

manager.addProduct({
  title: "Producto 2",
  description: "Descripción del Producto 2",
  price: 20,
  thumbnail: "ruta/imagen2.jpg",
  code: "P002",
  stock: 50
});

manager.addProduct({
  title: "Producto 3",
  description: "Descripción del Producto 3",
  price: 30,
  thumbnail: "ruta/imagen3.jpg",
  code: "P003",
  stock: 75
});

// Obtenemos todos los productos
console.log("Todos los productos:", manager.getProducts());

// Buscamos un producto por ID existente
const product1 = manager.getProductById(2);
console.log("Producto encontrado:", product1);

// Buscamos un producto por ID inexistente
manager.getProductById(4);

// Intentamos agregar un producto con código repetido
manager.addProduct({
  title: "Producto Repetido",
  description: "Descripción del Producto Repetido",
  price: 40,
  thumbnail: "ruta/imagen4.jpg",
  code: "P001",
  stock: 25
});