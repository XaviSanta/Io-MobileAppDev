var b="breakfast";
var l="lunch";
var d="dinner";
var c="carbonhydrate";
var p="protein";
var v="vegetables"; //fruits also
 
var m="Dairy";
export const foodDB =[
  {
    // The name of the food
    name: "Apple",
    
    // Number of calories this food contains, used by the app to calculate which foods to include in a meal. 
    calories: 120,

    // An image for this food, displayed next to the name. If there is no image then we don't display one. We will keep all images in a folder like assets/images and then require/import the image from that path 
    image: "apple-icon.png",

    // an array of labels describing this food. Used so we don't give people cereal for dinner. See below for an example of how to use this
    labels: [b, "fruit"],
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
    
    labels: [b,l,d,c],
  },
  {
    name: "35 gr cornflakes",
    calories:370 ,
     
    labels: [b,c],
  },
  {
    name: "Macaroni (250gr)",
    calories: 238,
     
    labels: [d,c],
  },
  {
    name: "50 gr Muesli",
    calories: 195,
    
    labels: [b,c],
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
  {
    name: "2 Fish cake ",
    calories:180 ,
    labels: [d,p],
  },
  {
    name: "5 Fish fingers",
    calories: 250,
    labels: [l,d,p],
  },
  {
    name: "Gammon ",
    calories:320  ,
    labels: [d,p],
  },
  {
    name: " Haddock Fresh",
    calories:200  ,
    labels: [d,p],
  },
  {
    name: " 10 slice Ham",
    calories:60,
    labels: [b,l,p],
  },
  {
    name: " 100 gr Liver ",
    calories: 150 ,
    labels: [d,p],
  },
  {
    name: "100 gr Lamp",
    calories:  300,
    labels: [d,p],
  },
  {
    name: "Lobster boiled ",
    calories: 200 ,
    labels: [d,p],
  },
  {
    name: "100 gr Pork  ",
    calories: 290 ,
    labels: [l,d,p],
  },
  {
    name: "Pork Pie",
    calories: 450 ,
    labels: [d,p],
  },
  {
    name: " 100 gr Rabbit meat ",
    calories: 180 ,
    labels: [d,p],
  },
  {
    name: "200 gr fresh Salmon ",
    calories: 360 ,
    labels: [d,p],
  },
  {
    name: "100 gr Pork fried sausage ",
    calories: 320 ,
    labels: [l,d,p],
  },
  {
    name: " 100 gr sausage roll",
    calories:480 ,
    labels: [b,l,d,p],
  },
  {
    name: "120 gr Steak  & Kidney Pie ",
    calories:400,
    labels: [d,p],
  },
  {
    name: " 200 gr Fresh Trout ",
    calories: 200 ,
    labels: [d,p],
  },
  {
    name: "100 gr Oil tinned Tuna ",
    calories:  180,
    labels: [l,d,p],
  },
  {
    name: "200 gr Turkey ",
    calories: 320,
    labels: [l,d,p],
  },
  {
    name: "1 boiled egg",
    calories: 90,
    labels: [b,p],
  },
  {
    name: "1 fried egg",
    calories: 120,
    labels: [b,p],
  },
  {
    name: "100 gr Veal ",
    calories:240,
    labels: [l,d,p],
  },
  {
    name: "1 Banana",
    calories: 107,
    labels: [b,l,d,v],
  },
  {
    name: "200 gr Baked beans  ",
    calories: 170 ,
    labels: [l,d,v],
  },
  {
    name: "100 gr Blackberries ",
    calories:25,
    labels: [b,l,d,v],
  },
  {
    name: "100 gr blackcurrant ",
    calories:30 ,
    labels: [b,l,v],
  },
  {
    name: "100 gr Broccoli ",
    calories: 32 ,
    labels: [l,d,v],
  },
  {
    name: "200 gr Cabbage ",
    calories: 40 ,
    labels: [l,d,v],
  },
  {
    name: " 400 gr carrot",
    calories: 100 ,
    labels: [l.d,v],
  },
  {
    name: "100 gr Cherry ",
    calories:50,
    labels: [b,l,d,v],
  },
  {
    name: "1 bowl Courgette soup",
    calories: 50,
    labels: [l,d,v],
  },
  {
    name: " 2 Cucumber with salt ",
    calories: 6,
    labels: [b,l,d,v],
  },
  {
    name: "5 pieces dates",
    calories:235,
    labels: [l,d,b,v],
  },
  {
    name: "100 gr Grape",
    calories:62,
    labels: [b,l,d,v],
  },
  {
    name: "1 Grapefruit",
    calories: 32,
    labels: [b,l,d,v],
  },
  {
    name: " 3 Kiwi",
    calories: 150 ,
    labels: [b,l,d,v],
  },
  {
    name: "3 pieces Lettuce",
    calories:15,
    labels: [l,v],
  },
  {
    name: "1 slice melon",
    calories: 28,
    labels: [b,l,d,v],
  },
  {
    name: "5 Mushrooms boiled",
    calories: 60,
    labels: [l,d,v],
  },
  {
    name: "5 Mushrooms fried ",
    calories: 600,
    labels: [l,d,v],
  },
  {
    name: "50 g olives",
    calories:  40,
    labels: [b,v],
  },
  {
    name: " 1 Orange",
    calories: 40 ,
    labels: [b,l,d,v],
  },
  {
    name: " 1 Peach",
    calories: 35,
    labels: [b,l,d,v],
  },
  {
    name: " 1 Pear",
    calories: 45  ,
    labels: [b,l,d,v],
  },
  {
    name: "100 gr Pineapple",
    calories:40,
    labels: [b,l,d,v],
  },
  {
    name: "200 gr  Spinach",
    calories:16 ,
    labels: [l,d,v],
  },
  {
    name: "5 pieces strawberries",
    calories:50,
    labels: [b,l,d,v],
  },
  {
    name: "100 gr  Sweetcorn",
    calories:130,
    labels: [l,d,v],
  },
  {
    name: "200 gr Tomato",
    calories:40,
    labels: [b,l,d,v],
  },
  {
    name: "1 Avacado",
    calories:150,
    labels: [b,l,d,v],
  },
  {
    name: "1 mango",
    calories:40,
    labels: [b,l,d,v],
  },
  {
    name: "50 gr sultanas",
    calories:70,
    labels: [b,l,d,v],
  },
 
  {
    name: "6 pieces Cherry tomato",
    calories:36,
    labels: [b,l,d,v],
  },
  {
    name: "25 gr cheese",
    calories:110,
    labels: [ b,m],
  },
  {
    name: " 50 gr Cheaddar ",
    calories:130,
    labels: [ b,l,m],
  },
  {
    name: "50 gr cottage cheese ",
    calories:49,
    labels: [ b,m],
  },
  {
    name: "50 gr cream cheese ",
    calories:200,
    labels: [ b,m],
  },
  {
    name: "100 gr Fromage frais",
    calories:125,
    labels: [b ,m],
  },
  {
    name: "125 gr ice cream",
    calories:200,
    labels: [ l,d,m],
  },
  {
    name: "250 ml Whole milk ",
    calories:175,
    labels: [b ,m],
  },
  {
    name: "250 ml Semi skimmed Milk",
    calories:125,
    labels: [b ,m],
  },
  {
    name: "250 ml Skimmed milk",
    calories:95,
    labels: [b ,m],
  },
  {
    name: "250 ml Soya milk",
    calories:90,
    labels: [ b,m],
  },
  {
    name: " Omelette with cheese(1 egg 50 gr cheese)",
    calories:300,
    labels: [b ,m],
  },
  {
    name: "200 gr Natural Yogurt",
    calories:120,
    labels: [b,l,d ,m],
  },
 





 





  //...
]