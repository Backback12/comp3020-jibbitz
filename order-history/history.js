//a list of all the users
users = []

//a class to create users
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.orders = [];
    }

    // Method to add an order
    addOrder(order) {
        this.orders.push(order);
    }
}

// Define an Order class
class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = [];
      this.totalAmount = 0;
    }
  
    // Method to add items to an order
    addItem(item) {
      this.items.push(item);
      this.totalAmount += item.price * item.quantity;
    }
}
  
// Export the classes
export { User, Order };