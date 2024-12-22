import {useId} from 'react';
export const restaurants = [
  {
    name: 'Spicy Delights',
    cuisines: ['Indian', 'Thai', 'Chinese'],
    deliveryTime: '30-40 mins',
    rating: 4.5,
    id: useId(),
    description:
      'Experience a fusion of bold flavors with Spicy Delights, offering authentic Indian curries, zesty Thai dishes, and classic Chinese favorites.',
    image: 'https://cdn.dummyjson.com/recipe-images/30.webp',
    cuisineItems: [
      {
        type: 'Indian',
        items: [
          {
            name: 'Butter Chicken',
            image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
            price: 12.99,
            id: useId(),
            description: 'Rich and creamy tomato-based chicken curry.',
          },
          {
            name: 'Paneer Tikka',
            image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
            price: 9.99,
            id: useId(),
            description: 'Grilled paneer cubes marinated in spices.',
          },
        ],
      },
      {
        type: 'Thai',
        items: [
          {
            name: 'Pad Thai',
            image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
            price: 10.99,
            id: useId(),
            description: 'Stir-fried rice noodles with shrimp and peanuts.',
          },
        ],
      },
      {
        type: 'Chinese',
        items: [
          {
            name: 'Kung Pao Chicken',
            image: 'https://cdn.dummyjson.com/recipe-images/4.webp',
            price: 11.99,
            id: useId(),
            description:
              'Spicy stir-fried chicken with peanuts and vegetables.',
          },
          {
            name: 'Spring Rolls',
            image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
            price: 5.99,
            id: useId(),
            description: 'Crispy rolls filled with mixed vegetables.',
          },
          {
            name: 'Fried Rice',
            image: 'https://cdn.dummyjson.com/recipe-images/6.webp',
            price: 8.99,
            id: useId(),
            description: 'Classic Chinese-style fried rice.',
          },
        ],
      },
    ],
  },
  {
    name: 'Pasta Paradise',
    cuisines: ['Italian'],
    deliveryTime: '20-30 mins',
    id: useId(),
    description:
      'Indulge in a world of Italian goodness at Pasta Paradise, where every bite feels like a trip to Tuscany.',
    rating: 4.7,
    image: 'https://cdn.dummyjson.com/recipe-images/29.webp',
    cuisineItems: [
      {
        type: 'Italian',
        items: [
          {
            name: 'Spaghetti Carbonara',
            image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
            price: 13.99,
            id: useId(),
            description: 'Pasta with eggs, cheese, and pancetta.',
          },
          {
            name: 'Margherita Pizza',
            image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
            price: 14.99,
            id: useId(),
            description: 'Pizza with fresh basil and mozzarella.',
          },
        ],
      },
    ],
  },
  {
    name: 'Burger Hub',
    cuisines: ['American', 'Fast Food'],
    deliveryTime: '15-25 mins',
    rating: 4.3,
    id: useId(),
    description:
      'Sink your teeth into juicy, handcrafted burgers at Burger Hub, your ultimate destination for American classics.',
    image: 'https://cdn.dummyjson.com/recipe-images/28.webp',
    cuisineItems: [
      {
        type: 'American',
        items: [
          {
            name: 'Cheeseburger',
            image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
            price: 8.99,
            id: useId(),
            description: 'Beef patty with melted cheese in a bun.',
          },
          {
            name: 'Hot Dog',
            image: 'https://cdn.dummyjson.com/recipe-images/10.webp',
            price: 6.99,
            id: useId(),
            description: 'Grilled sausage in a bun with condiments.',
          },
        ],
      },
      {
        type: 'Fast Food',
        items: [
          {
            name: 'Fries',
            image: 'https://cdn.dummyjson.com/recipe-images/11.webp',
            price: 3.99,
            id: useId(),
            description: 'Crispy golden French fries.',
          },
          {
            name: 'Chicken Nuggets',
            image: 'https://cdn.dummyjson.com/recipe-images/12.webp',
            price: 7.99,
            id: useId(),
            description: 'Breaded and fried chicken pieces.',
          },
        ],
      },
    ],
  },
  {
    name: 'Sushi World',
    cuisines: ['Japanese'],
    deliveryTime: '40-50 mins',
    rating: 4.8,
    id: useId(),
    description:
      'Fresh, flavorful, and artfully prepared sushi awaits you at Sushi World, a haven for Japanese cuisine enthusiasts.',
    image: 'https://cdn.dummyjson.com/recipe-images/27.webp',
    cuisineItems: [
      {
        type: 'Japanese',
        items: [
          {
            name: 'California Roll',
            image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
            price: 10.99,
            id: useId(),
            description: 'Sushi roll with crab, avocado, and cucumber.',
          },
          {
            name: 'Salmon Sashimi',
            image: 'https://cdn.dummyjson.com/recipe-images/14.webp',
            price: 12.99,
            id: useId(),
            description: 'Fresh slices of salmon served raw.',
          },
          {
            name: 'Miso Soup',
            image: 'https://cdn.dummyjson.com/recipe-images/15.webp',
            price: 4.99,
            id: useId(),
            description: 'Traditional Japanese soup with tofu and seaweed.',
          },
          {
            name: 'Tempura',
            image: 'https://cdn.dummyjson.com/recipe-images/16.webp',
            price: 9.99,
            id: useId(),
            description: 'Lightly battered and fried seafood and vegetables.',
          },
        ],
      },
    ],
  },
  {
    name: 'Taco Fiesta',
    cuisines: ['Mexican'],
    deliveryTime: '25-35 mins',
    rating: 4.2,
    id: useId(),
    description:
      'Celebrate the flavors of Mexico with Taco Fiesta’s array of delicious tacos, burritos, and more.',
    image: 'https://cdn.dummyjson.com/recipe-images/26.webp',
    cuisineItems: [
      {
        type: 'Mexican',
        items: [
          {
            name: 'Tacos Al Pastor',
            image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
            price: 9.99,
            id: useId(),
            description:
              'Soft tortillas filled with marinated pork and pineapple.',
          },
          {
            name: 'Guacamole & Chips',
            image: 'https://cdn.dummyjson.com/recipe-images/18.webp',
            price: 5.99,
            id: useId(),
            description: 'Fresh guacamole served with crispy tortilla chips.',
          },
        ],
      },
    ],
  },
  {
    name: 'Green Bowl',
    cuisines: ['Healthy', 'Vegan'],
    deliveryTime: '20-30 mins',
    rating: 4.6,
    id: useId(),
    description:
      'Stay healthy and happy with Green Bowl’s fresh, vegan-friendly dishes crafted from the finest ingredients.',
    image: 'https://cdn.dummyjson.com/recipe-images/25.webp',
    cuisineItems: [
      {
        type: 'Healthy',
        items: [
          {
            name: 'Quinoa Salad',
            image: 'https://cdn.dummyjson.com/recipe-images/19.webp',
            price: 11.99,
            id: useId(),
            description:
              'A healthy mix of quinoa, veggies, and a light dressing.',
          },
          {
            name: 'Avocado Toast',
            image: 'https://cdn.dummyjson.com/recipe-images/20.webp',
            price: 8.99,
            id: useId(),
            description: 'Toasted bread topped with creamy avocado slices.',
          },
        ],
      },
      {
        type: 'Vegan',
        items: [
          {
            name: 'Vegan Buddha Bowl',
            image: 'https://cdn.dummyjson.com/recipe-images/21.webp',
            price: 12.99,
            id: useId(),
            description:
              'A hearty bowl with grains, greens, and roasted veggies.',
          },
          {
            name: 'Vegan Brownie',
            image: 'https://cdn.dummyjson.com/recipe-images/22.webp',
            price: 4.99,
            id: useId(),
            description: 'Rich and fudgy brownie made with vegan ingredients.',
          },
        ],
      },
    ],
  },
  {
    name: 'Pizza House',
    cuisines: ['Italian', 'Fast Food'],
    deliveryTime: '25-35 mins',
    rating: 4.4,
    id: useId(),
    description:
      'Savor the perfect slice at Pizza House, where cheesy, saucy goodness meets quick delivery.',
    image: 'https://cdn.dummyjson.com/recipe-images/24.webp',
    cuisineItems: [
      {
        type: 'Italian',
        items: [
          {
            name: 'Pepperoni Pizza',
            image: 'https://cdn.dummyjson.com/recipe-images/23.webp',
            price: 15.99,
            id: useId(),
            description: 'Classic pizza topped with pepperoni slices.',
          },
          {
            name: 'Garlic Bread',
            image: 'https://cdn.dummyjson.com/recipe-images/24.webp',
            price: 6.99,
            id: useId(),
            description: 'Crispy bread slices with garlic butter.',
          },
        ],
      },
      {
        type: 'Fast Food',
        items: [
          {
            name: 'Chicken Wings',
            image: 'https://cdn.dummyjson.com/recipe-images/25.webp',
            price: 9.99,
            id: useId(),
            description: 'Spicy and tangy chicken wings.',
          },
          {
            name: 'Cheesy Fries',
            image: 'https://cdn.dummyjson.com/recipe-images/26.webp',
            price: 7.99,
            id: useId(),
            description: 'French fries topped with melted cheese.',
          },
        ],
      },
    ],
  },
  {
    name: 'Curry Express',
    cuisines: ['Indian'],
    deliveryTime: '30-40 mins',
    rating: 4.1,
    id: useId(),
    description:
      'Enjoy the warmth of Indian spices at Curry Express, where every dish is a journey of taste.',
    image: 'https://cdn.dummyjson.com/recipe-images/23.webp',
    cuisineItems: [
      {
        type: 'Indian',
        items: [
          {
            name: 'Chicken Tikka Masala',
            image: 'https://cdn.dummyjson.com/recipe-images/27.webp',
            price: 12.99,
            id: useId(),
            description: 'Chicken in a creamy and spicy tomato-based sauce.',
          },
          {
            name: 'Naan Bread',
            image: 'https://cdn.dummyjson.com/recipe-images/28.webp',
            price: 3.99,
            id: useId(),
            description: 'Soft and fluffy Indian flatbread.',
          },
          {
            name: 'Vegetable Biryani',
            image: 'https://cdn.dummyjson.com/recipe-images/29.webp',
            price: 10.99,
            id: useId(),
            description: 'Flavorful rice cooked with vegetables and spices.',
          },
        ],
      },
    ],
  },
  {
    name: 'Dragon Wok',
    cuisines: ['Chinese', 'Asian'],
    deliveryTime: '35-45 mins',
    rating: 4.3,
    id: useId(),
    description:
      'Dive into the rich flavors of Asia with Dragon Wok’s authentic Chinese and Asian specialties.',
    image: 'https://cdn.dummyjson.com/recipe-images/22.webp',
    cuisineItems: [
      {
        type: 'Chinese',
        items: [
          {
            name: 'Sweet and Sour Chicken',
            image: 'https://cdn.dummyjson.com/recipe-images/30.webp',
            price: 11.99,
            id: useId(),
            description: 'Crispy chicken tossed in sweet and sour sauce.',
          },
          {
            name: 'Egg Fried Rice',
            image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
            price: 8.99,
            id: useId(),
            description: 'Classic fried rice with eggs and vegetables.',
          },
        ],
      },
      {
        type: 'Asian',
        items: [
          {
            name: 'Beef Teriyaki',
            image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
            price: 13.99,
            id: useId(),
            description: 'Tender beef slices in a sweet teriyaki sauce.',
          },
          {
            name: 'Vegetable Spring Rolls',
            image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
            price: 5.99,
            id: useId(),
            description: 'Crispy spring rolls filled with vegetables.',
          },
          {
            name: 'Hot and Sour Soup',
            image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
            price: 6.99,
            id: useId(),
            description: 'Tangy and spicy soup with vegetables and tofu.',
          },
        ],
      },
    ],
  },
  {
    name: 'Taco Fiesta',
    cuisines: ['Mexican'],
    deliveryTime: '25-35 mins',
    rating: 4.2,
    id: useId(),
    description:
      'Start your day right with The Bagel Spot’s fresh-baked bagels and delightful breakfast options.',
    image: 'https://cdn.dummyjson.com/recipe-images/21.webp',
    cuisineItems: [
      {
        type: 'Mexican',
        items: [
          {
            name: 'Tacos Al Pastor',
            price: 9.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
            description:
              'Soft tortillas filled with marinated pork and pineapple.',
          },
          {
            name: 'Guacamole & Chips',
            price: 5.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/11.webp',
            description: 'Fresh guacamole served with crispy tortilla chips.',
          },
        ],
      },
    ],
  },
  {
    name: 'Green Bowl',
    cuisines: ['Healthy', 'Vegan'],
    deliveryTime: '20-30 mins',
    rating: 4.6,
    id: useId(),
    description:
      'Fire up your taste buds with BBQ Nation’s mouthwatering grilled meats and smoky barbecue flavors.',
    image: 'https://cdn.dummyjson.com/recipe-images/20.webp',
    cuisineItems: [
      {
        type: 'Healthy',
        items: [
          {
            name: 'Quinoa Salad',
            price: 11.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
            description:
              'A healthy mix of quinoa, veggies, and a light dressing.',
          },
          {
            name: 'Avocado Toast',
            price: 8.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/15.webp',
            description: 'Toasted bread topped with creamy avocado slices.',
          },
        ],
      },
    ],
  },
  {
    name: 'Pizza House',
    cuisines: ['Italian', 'Fast Food'],
    deliveryTime: '25-35 mins',
    rating: 4.4,
    id: useId(),
    description:
      'Slurp your way to happiness at Noodle Haven, serving up comforting bowls of Asian noodle dishes.',
    image: 'https://cdn.dummyjson.com/recipe-images/19.webp',
    cuisineItems: [
      {
        type: 'Italian',
        items: [
          {
            name: 'Pepperoni Pizza',
            price: 15.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
            description: 'Classic pizza topped with pepperoni slices.',
          },
          {
            name: 'Garlic Bread',
            price: 6.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
            description: 'Crispy bread slices with garlic butter.',
          },
        ],
      },
    ],
  },
  {
    name: 'Curry Express',
    cuisines: ['Indian'],
    deliveryTime: '30-40 mins',
    rating: 4.1,
    id: useId(),
    description:
      'Satisfy your sweet tooth at Dessert Bliss with an array of heavenly desserts and baked treats.',
    image: 'https://cdn.dummyjson.com/recipe-images/18.webp',
    cuisineItems: [
      {
        type: 'Indian',
        items: [
          {
            name: 'Chicken Tikka Masala',
            price: 12.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
            description: 'Chicken in a creamy and spicy tomato-based sauce.',
          },
          {
            name: 'Vegetable Biryani',
            price: 10.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
            description: 'Flavorful rice cooked with vegetables and spices.',
          },
        ],
      },
    ],
  },
  {
    name: 'The Bagel Spot',
    cuisines: ['Breakfast', 'Bakery'],
    deliveryTime: '10-20 mins',
    rating: 4.7,
    id: useId(),
    image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
    cuisineItems: [
      {
        type: 'Breakfast',
        items: [
          {
            name: 'Everything Bagel',
            price: 3.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
            description:
              'Bagel with a blend of seeds, salt, garlic, and onion.',
          },
          {
            name: 'Bagel with Cream Cheese',
            price: 4.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
            description: 'Fresh bagel served with cream cheese spread.',
          },
        ],
      },
    ],
  },
  {
    name: 'BBQ Nation',
    cuisines: ['Barbecue', 'Grill'],
    deliveryTime: '45-55 mins',
    rating: 4.6,
    id: useId(),
    description:
      'Transport yourself to the sunny Mediterranean with dishes bursting with fresh and vibrant flavors.',
    image: 'https://cdn.dummyjson.com/recipe-images/16.webp',
    cuisineItems: [
      {
        type: 'Barbecue',
        items: [
          {
            name: 'BBQ Ribs',
            price: 19.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/23.webp',
            description: 'Tender ribs smothered in BBQ sauce.',
          },
          {
            name: 'Grilled Chicken Skewers',
            price: 12.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/25.webp',
            description: 'Chicken skewers marinated and grilled to perfection.',
          },
        ],
      },
    ],
  },
  {
    name: 'Noodle Haven',
    cuisines: ['Asian', 'Chinese'],
    deliveryTime: '30-40 mins',
    rating: 4.4,
    id: useId(),
    description:
      'Relax and unwind at Cafe Aroma, your go-to spot for aromatic coffee and tasty snacks.',
    image: 'https://cdn.dummyjson.com/recipe-images/15.webp',
    cuisineItems: [
      {
        type: 'Chinese',
        items: [
          {
            name: 'Chicken Chow Mein',
            price: 9.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/27.webp',
            description: 'Stir-fried noodles with chicken and vegetables.',
          },
          {
            name: 'Dumplings',
            price: 8.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/6.webp',
            description: 'Steamed dumplings filled with pork and vegetables.',
          },
        ],
      },
    ],
  },
  {
    name: 'Dessert Bliss',
    cuisines: ['Desserts', 'Bakery'],
    deliveryTime: '15-25 mins',
    rating: 4.9,
    id: useId(),
    image: 'https://cdn.dummyjson.com/recipe-images/14.webp',
    cuisineItems: [
      {
        type: 'Desserts',
        items: [
          {
            name: 'Chocolate Lava Cake',
            price: 6.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
            description: 'Warm cake with a gooey chocolate center.',
          },
          {
            name: 'Macarons',
            price: 5.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
            description: 'Assorted French macarons with various fillings.',
          },
        ],
      },
    ],
  },
  {
    name: 'Mediterranean Magic',
    cuisines: ['Mediterranean'],
    deliveryTime: '30-40 mins',
    rating: 4.5,
    id: useId(),
    description:
      'Experience the rich flavors of the Middle East at Kebab Corner, featuring expertly grilled delights.',
    image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
    cuisineItems: [
      {
        type: 'Mediterranean',
        items: [
          {
            name: 'Falafel Platter',
            price: 13.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
            description: 'Falafel served with hummus, salad, and pita bread.',
          },
          {
            name: 'Shawarma Wrap',
            price: 9.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
            description: 'Wrap filled with grilled meat and vegetables.',
          },
        ],
      },
    ],
  },
  {
    name: 'Cafe Aroma',
    cuisines: ['Cafe', 'Snacks'],
    deliveryTime: '10-15 mins',
    rating: 4.8,
    id: useId(),
    description:
      'Dive into a sea of flavors at Seafood Shack, serving the freshest catch in delicious preparations.',
    image: 'https://cdn.dummyjson.com/recipe-images/12.webp',
    cuisineItems: [
      {
        type: 'Cafe',
        items: [
          {
            name: 'Cappuccino',
            price: 4.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/16.webp',
            description: 'Classic espresso with steamed milk and foam.',
          },
          {
            name: 'Blueberry Muffin',
            price: 3.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
            description: 'Freshly baked muffin with blueberries.',
          },
        ],
      },
    ],
  },
  {
    name: 'Kebab Corner',
    cuisines: ['Middle Eastern', 'Grill'],
    deliveryTime: '25-35 mins',
    rating: 4.3,
    id: useId(),
    description:
      'Experience the rich flavors of the Middle East at Kebab Corner, featuring expertly grilled delights.',
    image: 'https://cdn.dummyjson.com/recipe-images/11.webp',
    cuisineItems: [
      {
        type: 'Middle Eastern',
        items: [
          {
            name: 'Lamb Kebab',
            price: 14.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/14.webp',
            description: 'Grilled lamb kebabs served with rice.',
          },
          {
            name: 'Hummus with Pita',
            price: 6.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/17.webp',
            description: 'Creamy hummus served with warm pita bread.',
          },
        ],
      },
    ],
  },
  {
    name: 'Seafood Shack',
    cuisines: ['Seafood'],
    deliveryTime: '35-45 mins',
    rating: 4.6,
    id: useId(),
    description:
      'Dive into a sea of flavors at Seafood Shack, serving the freshest catch in delicious preparations.',
    image: 'https://cdn.dummyjson.com/recipe-images/10.webp',
    cuisineItems: [
      {
        type: 'Seafood',
        items: [
          {
            name: 'Grilled Salmon',
            price: 18.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/11.webp',
            description:
              'Perfectly grilled salmon served with lemon butter sauce.',
          },
          {
            name: 'Shrimp Scampi',
            price: 15.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/10.webp',
            description:
              'Shrimp sautéed in garlic butter and served over pasta.',
          },
        ],
      },
    ],
  },
  {
    name: 'Smoothie Stop',
    cuisines: ['Beverages', 'Healthy'],
    deliveryTime: '10-20 mins',
    rating: 4.7,
    id: useId(),
    description:
      'Refresh and recharge with Smoothie Stop’s nutritious and flavorful blended beverages.',
    image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
    cuisineItems: [
      {
        type: 'Beverages',
        items: [
          {
            name: 'Berry Blast Smoothie',
            price: 6.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
            description:
              'A refreshing blend of strawberries, blueberries, and raspberries.',
          },
          {
            name: 'Green Detox Smoothie',
            price: 7.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
            description: 'A healthy mix of spinach, kale, and green apple.',
          },
        ],
      },
    ],
  },
  {
    name: 'Waffle Wonderland',
    cuisines: ['Breakfast', 'Desserts'],
    deliveryTime: '15-25 mins',
    rating: 4.8,
    id: useId(),
    description:
      'Treat yourself to a breakfast delight or dessert indulgence at Waffle Wonderland.',
    image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
    cuisineItems: [
      {
        type: 'Breakfast',
        items: [
          {
            name: 'Classic Belgian Waffle',
            price: 8.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
            description: 'Crispy waffles served with syrup and butter.',
          },
          {
            name: 'Chocolate Chip Waffle',
            price: 9.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
            description:
              'Waffles loaded with chocolate chips and whipped cream.',
          },
        ],
      },
    ],
  },
  {
    name: 'Hotpot Heaven',
    cuisines: ['Asian', 'Hotpot'],
    deliveryTime: '40-50 mins',
    rating: 4.5,
    id: useId(),
    description:
      'Share a cozy meal at Hotpot Heaven, where fresh ingredients meet bubbling broths.',
    image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
    cuisineItems: [
      {
        type: 'Hotpot',
        items: [
          {
            name: 'Spicy Sichuan Hotpot',
            price: 22.99,
            id: useId(),
            image: 'https://cdn.dummyjson.com/recipe-images/23.webp',
            description:
              'Hotpot with a spicy Sichuan broth and assorted ingredients.',
          },
          {
            name: 'Miso Soup Hotpot',
            image: 'https://cdn.dummyjson.com/recipe-images/25.webp',
            price: 20.99,
            id: useId(),
            description: 'Hotpot with a rich miso soup base and fresh seafood.',
          },
        ],
      },
    ],
  },
];
