var menu = {
  courses: {
    appetizers:[],
    mains:[],
    desserts:[]
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    }
    menu.courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    var dishes = this.courses[courseName]
    let randomNumber = Math.floor(Math.random() * dishes.length)
    return dishes[randomNumber]
  },
  generateRandomMeal() {
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var dessert = this.getRandomDishFromCourse('desserts');

    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal will consist of ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price will be $${totalPrice}.`
  }
}

menu.addDishToCourse('appetizers', 'wings', 18.00)
menu.addDishToCourse('appetizers', 'fries', 12.00)
menu.addDishToCourse('appetizers', 'salad', 5.00)

menu.addDishToCourse('mains', 'steak', 20.00)
menu.addDishToCourse('mains', 'chicken', 16.00)
menu.addDishToCourse('mains', 'pork' , 17.00)

menu.addDishToCourse('desserts', 'cheesecake', 10.00)
menu.addDishToCourse('desserts', 'ice cream', 5.00)
menu.addDishToCourse('desserts', 'cookie', 1.00)

var meal = menu.generateRandomMeal()

console.log(meal)
