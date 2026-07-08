var productName = document.getElementById("productName");
var productdes = document.getElementById("productdescription");
var producttag1 = document.getElementById("producttag1");
var producttag2 = document.getElementById("producttag2");
var productImage = document.getElementById("productImage");
var productreview = document.getElementById("productreview");
var reviewCount = document.getElementById("reviewCount");
var prepProduct = document.getElementById("prepProduct");
var cookProduct = document.getElementById("cookProduct");
var servingsProduct = document.getElementById("servingsProduct");
var ingredientsStep1 = document.getElementById("ingredientsStep1");
var ingredientsStep2 = document.getElementById("ingredientsStep2");
var ingredientsStep3 = document.getElementById("ingredientsStep3");
var ingredientsStep4 = document.getElementById("ingredientsStep4");
var ingredientsStep5 = document.getElementById("ingredientsStep5");
var ingredientsStep6 = document.getElementById("ingredientsStep6");
var ingredientsStep7 = document.getElementById("ingredientsStep7");
var instructionsStep1 = document.getElementById("instructionsStep1");
var instructionsStep2 = document.getElementById("instructionsStep2");
var instructionsStep3 = document.getElementById("instructionsStep3");
var instructionsStep4 = document.getElementById("instructionsStep4");
var instructionsStep5 = document.getElementById("instructionsStep5");
var instructionsStep6 = document.getElementById("instructionsStep6");
var nutritionCalories = document.getElementById("nutrition-Calories");
var nutritionProtein = document.getElementById("nutrition-Protein");
var nutritionCarbohydrates = document.getElementById("nutrition-Carbohydrates");
var nutritionFat = document.getElementById("nutrition-Fat");
var nutritionFiber = document.getElementById("nutrition-Fiber");
var nutritionSodium = document.getElementById("nutrition-Sodium");
var chefTip1 = document.getElementById("chefTip1");
var chefTip2 = document.getElementById("chefTip2");
var chefTip3 = document.getElementById("chefTip3");
var chefTip4 = document.getElementById("chefTip4");


var productList = []

var newProduct = 
{
  name:"BBQ Pulled Pork",
  tag1: "Intermediate",
  tag2: "American",
  description:"Slow-cooked tender pork in smoky barbecue sauce", 
  image: "Images/The-Speckled-Palate-BBQ-Pulled-Pork-Sandwiches-Photo.jpg",
  review: "4.6",
  reviewCount: "(200 reviews)",
  prepProduct: "15 min",
  cookProduct: "20 min",
  servingsProduct: "4 people",
  ingredientsStep1: "​1 kg pork shoulder",
  ingredientsStep2: "​1 cup barbecue sauce",
  ingredientsStep3: "​1 tbsp smoked paprika",
  ingredientsStep4: "​1 tbsp brown sugar",
  ingredientsStep5: "​1 tsp garlic powder",
  ingredientsStep6: "1 tsp onion powder",
  ingredientsStep7: "Salt and black pepper",
  instructionsStep1:"Season the pork shoulder with salt, pepper, smoked paprika, garlic powder, and onion powder.",
  instructionsStep2:"Place the seasoned pork in a slow cooker or a deep baking dish.",
  instructionsStep3:"Pour the barbecue sauce over the pork until well coated.",
  instructionsStep4:"Cook on low heat for 6-8 hours (or until the meat is very tender).",
  instructionsStep5:"Remove the pork from the cooker and shred it using two forks.",
  instructionsStep6:"Mix the shredded meat with the remaining juices and serve on buns.",
  nutritionCalories: "220 kcal",
  nutritionProtein:"25g",
  nutritionCarbohydrates:"15g",
  nutritionFat:"8g",
  nutritionFiber:"1g",
  nutritionSodium:"450mg",
  chefTip1:"For the most tender meat, cook the pork slowly until it pulls apart effortlessly with a fork.",
  chefTip2:"Toast your buns lightly with butter before adding the pork to prevent them from getting soggy.",
  chefTip3:"Let the meat rest for 10 minutes after shredding so it absorbs all the flavorful juices.",
  chefTip4:"Add a touch of apple cider vinegar to the barbecue sauce to balance the sweetness.",
}

var newProduct2 = 
{
  name:"Caesar Salad",
  tag1: "Easy",
  tag2: "Mediterranean",
  description:"Classic salad with crispy romaine and creamy dressing", 
  image: "Images/greek_salad_600x900.webp",
  review: "4.9",
  reviewCount: "(187 reviews)",
  prepProduct: "10 min",
  cookProduct: "0 min",
  servingsProduct: "2 people",
  ingredientsStep1: "1 large romaine lettuce",
  ingredientsStep2: "​1/2 cup Caesar dressing",
  ingredientsStep3: "​1/2 cup parmesan cheese, shaved",
  ingredientsStep4: "​1 cup croutons",
  ingredientsStep5: "​2 anchovy fillets (optional)",
  ingredientsStep6: "Lemon wedges",
  ingredientsStep7: "Black pepper",
  instructionsStep1:"Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
  instructionsStep2:"Place lettuce in a large salad bowl.",
  instructionsStep3:"Add Caesar dressing and toss until evenly coated.",
  instructionsStep4:"Add croutons and half the parmesan cheese. Toss gently.",
  instructionsStep5:"Top with remaining parmesan shavings and anchovies if using.",
  instructionsStep6:"Serve immediately with lemon wedges and fresh black pepper.",
  nutritionCalories: "320 kcal",
  nutritionProtein:"12g",
  nutritionCarbohydrates:"18g",
  nutritionFat:"22g",
  nutritionFiber:"3g",
  nutritionSodium:"680mg",
  chefTip1:"Use cold, crisp lettuce for best texture.",
  chefTip2:"Make homemade croutons for better flavor.",
  chefTip3:"Add grilled chicken for a complete meal.",
  chefTip4:"Don't dress salad until ready to serve.",
}

var newProduct3 = 
{
  name:"Margherita Pizza",
  tag1: "Medium",
  tag2: "Italian",
  description:"Classic pizza with fresh mozzarella and basil", 
  image: "Images/Margherita-Pizza-4.jpg",
  review: "4.8",
  reviewCount: "(150 reviews)",
  prepProduct: "40 min",
  cookProduct: "25 min",
  servingsProduct: "4 people",
  ingredientsStep1: "Pizza dough",
  ingredientsStep2: "​Tomato sauce",
  ingredientsStep3: "​Fresh mozzarella cheese",
  ingredientsStep4: "Fresh basil leaves",
  ingredientsStep5: "​Extra virgin olive oil",
  ingredientsStep6: "Salt",
  ingredientsStep7: "Parmesan cheese",
  instructionsStep1:"Preheat your oven to 475°F (245°C).",
  instructionsStep2:"Roll out the pizza dough on a floured surface to your desired thickness.",
  instructionsStep3:"Spread a thin layer of tomato sauce evenly over the dough.",
  instructionsStep4:"Arrange fresh mozzarella slices on top and sprinkle with salt.",
  instructionsStep5:"Bake in the preheated oven for 10-12 minutes until the crust is golden.",
  instructionsStep6:"Remove from the oven, garnish with fresh basil leaves, and drizzle with olive oil.",
  nutritionCalories: "250 kcal",
  nutritionProtein:"10g",
  nutritionCarbohydrates:"30g",
  nutritionFat:"9g",
  nutritionFiber:"2g",
  nutritionSodium:"400mg",
  chefTip1:"For a crispy crust, preheat your pizza stone or baking tray in the oven before placing the dough on it.",
  chefTip2:"If using fresh mozzarella, pat it dry with paper towels before adding it to the pizza to avoid excess moisture.",
  chefTip3:"Add the fresh basil leaves after taking the pizza out of the oven to keep their vibrant color and fresh aroma.",
  chefTip4:"Use high-quality canned tomatoes crushed by hand with a little salt and olive oil for an authentic Italian flavor.",
}

var newProduct4 = 
{
  name: "Beef Burger",
  tag1: "Easy",
  tag2: "American",
  description: "Juicy grilled beef burger with cheddar cheese and fresh vegetables.",
  image: "Images/beef-burger-recipe-2.jpg",
  review: "4.8",
  reviewCount: "(150 reviews)",
  prepProduct: "60 min",
  cookProduct: "35 min",
  servingsProduct: "4 people",
  ingredientsStep1: "Ground beef patty",
  ingredientsStep2: "​Hamburger buns",
  ingredientsStep3: "​Cheddar cheese slices",
  ingredientsStep4: "Lettuce leaves",
  ingredientsStep5: "​Tomato slices",
  ingredientsStep6: "Red onion slices",
  ingredientsStep7: "Burger sauce",
  instructionsStep1:"Season the ground beef with salt and black pepper, then shape into patties.",
  instructionsStep2:"Heat a grill or skillet over medium-high heat and cook the patties to your preferred doneness.",
  instructionsStep3:"Place a slice of cheddar cheese on each patty during the last minute of cooking to melt.",
  instructionsStep4:"Toast the hamburger buns lightly on the grill or in a pan.",
  instructionsStep5:"Assemble the burger by placing the patty on the bun, then adding lettuce, tomato, and onion.",
  instructionsStep6:"Spread your favorite burger sauce on the bun and serve immediately.",
  nutritionCalories: "450 kcal",
  nutritionProtein:"28g",
  nutritionCarbohydrates:"35g",
  nutritionFat:"22g",
  nutritionFiber:"2g",
  nutritionSodium:"800mg",
  chefTip1:"For a juicier burger, use ground beef with at least 20% fat content to ensure it stays moist during grilling.",
  chefTip2:"Season the patties generously with salt and pepper only right before placing them on the grill to keep the meat tender.",
  chefTip3:"Avoid pressing down on the patties with a spatula while cooking, as this releases the flavorful juices and dries out the meat.",
  chefTip4:"Toast your burger buns lightly with a thin layer of butter to create a barrier that prevents them from becoming soggy.",
}

var newProduct5 = 
{
  name: "Chicken Alfredo Pasta",
  tag1: "Medium",
  tag2: "Italian",
  description: "Creamy Alfredo pasta served with grilled chicken.",
  image: "Images/Instant-Pot-Chicken-Alfredo-Pasta-2.jpg",
  review: "4.8",
  reviewCount: "(150 reviews)",
  prepProduct: "60 min",
  cookProduct: "35 min",
  servingsProduct: "4 people",
  ingredientsStep1: "Fettuccine pasta",
  ingredientsStep2: "​Chicken breast",
  ingredientsStep3: "​Heavy cream",
  ingredientsStep4: "Parmesan cheese",
  ingredientsStep5: "​Butter",
  ingredientsStep6: "Garlic cloves",
  ingredientsStep7: "Fresh parsley",
  instructionsStep1:"Boil a large pot of salted water and cook the pasta according to package instructions.",
  instructionsStep2:"Season chicken breast with salt and pepper, then grill until fully cooked.",
  instructionsStep3:"In a pan, melt butter and add minced garlic, sautéing until fragrant.",
  instructionsStep4:"Pour in the heavy cream and bring to a gentle simmer.",
  instructionsStep5:"Stir in the grated parmesan cheese until the sauce is smooth and creamy.",
  instructionsStep6:"Add the cooked pasta and sliced grilled chicken to the sauce, tossing to coat evenly.",
  nutritionCalories: "550 kcal",
  nutritionProtein:"30g",
  nutritionCarbohydrates:"45g",
  nutritionFat:"25g",
  nutritionFiber:"1g",
  nutritionSodium:"600mg",
  chefTip1:"Always use freshly grated parmesan cheese; pre-grated cheese contains anti-caking agents that prevent a smooth sauce.",
  chefTip2:"Reserve a small amount of pasta cooking water; if the sauce becomes too thick, add a splash to reach the perfect consistency.",
  chefTip3:"Don't overcook the garlic; it should be golden and aromatic, not brown or bitter.",
  chefTip4:"For a lighter version, you can substitute half of the heavy cream with milk or half-and-half.",
}
productList.push(newProduct)
productList.push(newProduct2)
productList.push(newProduct3)
productList.push(newProduct4)
productList.push(newProduct5)



var currentIndex = 0;

function changeProduct() 
{
    var selectedProduct = productList[currentIndex];

    productName.innerText = selectedProduct.name;
    productdes.innerText = selectedProduct.description;
    producttag1.innerText = selectedProduct.tag1;
    producttag2.innerText = selectedProduct.tag2;
    productImage.src = selectedProduct.image;
    productreview.innerText = selectedProduct.review;
    reviewCount.innerText = selectedProduct.reviewCount;
    prepProduct.innerText = selectedProduct.prepProduct;
    cookProduct.innerText = selectedProduct.cookProduct;
    servingsProduct.innerText = selectedProduct.servingsProduct;
    ingredientsStep1.innerHTML= selectedProduct.ingredientsStep1;
    ingredientsStep2.innerHTML= selectedProduct.ingredientsStep2;
    ingredientsStep3.innerHTML= selectedProduct.ingredientsStep3;
    ingredientsStep4.innerHTML= selectedProduct.ingredientsStep4;
    ingredientsStep5.innerHTML= selectedProduct.ingredientsStep5;
    ingredientsStep6.innerHTML= selectedProduct.ingredientsStep6;
    ingredientsStep7.innerHTML= selectedProduct.ingredientsStep7;
    instructionsStep1.innerHTML=selectedProduct.instructionsStep1;
    instructionsStep2.innerHTML=selectedProduct.instructionsStep2;
    instructionsStep3.innerHTML=selectedProduct.instructionsStep3;
    instructionsStep4.innerHTML=selectedProduct.instructionsStep4;
    instructionsStep5.innerHTML=selectedProduct.instructionsStep5;
    instructionsStep6.innerHTML=selectedProduct.instructionsStep6;
    nutritionCalories.innerText=selectedProduct.nutritionCalories;
    nutritionCarbohydrates.innerText=selectedProduct.nutritionCarbohydrates;
    nutritionFat.innerText=selectedProduct.nutritionFat;
    nutritionFiber.innerText=selectedProduct.nutritionFiber;
    nutritionSodium.innerText=selectedProduct.nutritionSodium;
    nutritionProtein.innerText=selectedProduct.nutritionProtein;
    chefTip1.innerText=selectedProduct.chefTip1;
    chefTip2.innerText=selectedProduct.chefTip2;
    chefTip3.innerText=selectedProduct.chefTip3;
    chefTip4.innerText=selectedProduct.chefTip4;

    currentIndex++;

    if (currentIndex >= productList.length) {
        currentIndex = 0;
    }
}