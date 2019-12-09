var b="breakfast";
var l="lunch";
var d="dinner";
var c="carbonhydrate";
var p="protein";
var v="vitamin";
var f="fruit";
export const foodDB =[
  {
    // The name of the food
    name: "Apple",
    
    // Number of calories this food contains, used by the app to calculate which foods to include in a meal. 
    calories: 120,

    // An image for this food, displayed next to the name. If there is no image then we don't display one. We will keep all images in a folder like assets/images and then require/import the image from that path 
    image: "apple-icon.png",

    // an array of labels describing this food. Used so we don't give people cereal for dinner. See below for an example of how to use this
    labels: ["breakfast", "fruit"],
  },

  {
    name: " 1 Bagel",
    calories: 140,
    
    labels: [b,l,d,c],
  },
  {
    name: "3 Biscuit Digestive",
    calories: 240,
    
    labels: [l,c],
  },
  {
    name: "1 piece thick size bread wholemeal",
    calories: 88,
    
    labels: ["breakfast",l,d,c],
  },
  {
    name: "35 gr cornflakes",
    calories:370 ,
     
    labels: ["breakfast",c],
  },
  {
    name: "Macaroni (250gr)",
    calories: 238,
     
    labels: [d,c],
  },
  {
    name: "50 gr Muesli",
    calories: 195,
    
    labels: ["breakfast",c],
  },
  {
    name: " 250 gr noodles",
    calories:175,
   
    labels: [d,c],
  },
  {
    name: "Boiled 300 gr potatoes",
    calories: 210,
     
    labels: [l,c],
  },
  {
    name: "Roasted 300 gr Potatoes",
    calories:420,
     
    labels: [l,d,c],
  },
  {
    name: "300 gr Rice",
    calories: 420,
     
    labels: [d,c],
  },
  {
    name: "300 gr brown rice",
    calories: 405,
     
    labels: [d,c],
  },
  {
    name: "3 peace rice cake",
    calories:90 ,
     
    labels: [l,c],
  },

  {
    name: "300 gr Spaghetti",
    calories:303 ,
     
    labels: [l,d,c],
  },

  {
    name: "100 gr Anchovies tinned",
    calories: 300,
    labels: [d,p],
  },
  {
    name: "200 gr(2 racher) fried bacon",
    calories:250 ,
    labels: [b,l,d,p],
  },
  {
    name: "100 gr roasted beef",
    calories: 300,
    labels: [l,d,p],
  },
  {
    name: "120 gr beef burgers",
    calories: 300,
    labels: [d,p],
  },
  {
    name: "100 gr chicken ",
    calories:200 ,
    labels: [l,d,p],
  },
  {
    name: "100 gr Cockles",
    calories: 50,
    labels: [d,p],
  },
  {
    name: "150 gr Cod fresh",
    calories: 150,
    labels: [d,p],
  },
  {
    name: "200 gr Fresh Crab",
    calories:220 ,
    labels: [d,p],
  },
  {
    name: "1 portion Duck Roast",
    calories:400 ,
    labels: [d,p],
  },




  //...
]