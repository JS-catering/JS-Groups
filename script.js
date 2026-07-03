// =============================
// Jithus Catering Website
// =============================
localStorage.removeItem("packages");

const defaultPackages = [

    {
        name:"Veg Menu 1",
        price:"₹120 / Person",
        items:[
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "1 Curry",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 2",
        price:"₹150 / Person",
        items:[
            "Vegetable Biryani",
            "Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 3",
        price:"₹160 / Person",
        items:[
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "1 Curry",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 4",
        price:"₹180 / Person",
        items:[
            "Mushroom Biryani",
            "Kurma / Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Masala Wada",
            "Pickle",
            "Banana",
            "Papad",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 5",
        price:"₹149 / Person",
        items:[
            "Karivepaku Rice / Kothimeera Rice / Pudhina Rice / Pulihora / Coconut Rice (Any One)",
            "Kurma",
            "Onion Raitha",
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "1 Curry",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 6",
        price:"₹190 / Person",
        items:[
            "Vegetable Biryani",
            "Kurma / Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Oil Fry",
            "Masala Wada",
            "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 7",
        price:"₹195 / Person",
        items:[
            "Vegetable Biryani",
            "Kurma / Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Oil Fry",
            "Masala Wada",
            "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala / Poli)",
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
    {
        name:"Veg Menu 8",
        price:"₹205 / Person",
        items:[
            "Vegetable Biryani",
            "Kurma / Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Oil Fry",
            "Masala Wada",
            "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
            "White Rice",
            "Pappu",
            "Sambar",
            "Rasam",
            "Curd",
            "Pickle",
            "Papad",
            "Banana",
            "Water Bottle",
            "Plates"
        ]
    },
{
    name:"Veg Menu 9",
    price:"₹209 / Person",
    items:[
        "Vegetable Biryani",
        "Kurma / Nunevankaya",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala / Poli)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 10",
    price:"₹210 / Person",
    items:[
        "Mushroom Biryani",
        "Kurma / Nunevankaya",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 11",
    price:"₹205 / Person",
    items:[
        "Mushroom Biryani",
        "Kurma / Nunevankaya",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 12",
    price:"₹240 / Person",
    items:[
        "Mushroom Biryani",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 13",
    price:"₹245 / Person",
    items:[
        "Mushroom Biryani",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala / Poli)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 14",
    price:"₹221 / Person",
    items:[
        "Vegetable Biryani",
        "Chapathi / Poori",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 15",
    price:"₹225 / Person",
    items:[
        "Vegetable Biryani",
        "Chapathi / Poori",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala / Poli)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 16",
    price:"₹255 / Person",
    items:[
        "Vegetable Biryani",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet - 1",
        "Sweet - 2",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd with Fruits",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 17",
    price:"₹225 / Person",
    items:[
        "Paneer Biryani",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Jangri / Laddu / Mysore Pak / Badusha)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 18",
    price:"₹256 / Person",
    items:[
        "Paneer Biryani",
        "Chapathi / Poori",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Oil Fry",
        "Masala Wada",
        "Sweet (Kova Jangri / Dry Jamun / Kova Cake / Milk Cake / Chandrakala / Poli)",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Poli",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 19",
    price:"₹330 / Person",
    items:[
        "Mushroom Biryani",
        "Kaju Paneer Butter Masala",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "1 Curry",
        "Baby Corn Fry",
        "Masala Wada",
        "Sweet - 1",
        "Sweet - 2",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd with Fruits",
        "Pickle",
        "Papad",
        "Welcome Drink",
        "Kaju Pepper Fry",
        "Soup",
        "Poli",
        "Rumali Roti",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    name:"Veg Menu 20",
    price:"₹415 / Person",
    items:[
        "Mushroom Biryani",
        "Kaju Paneer Butter Masala",
        "Onion Raitha",
        "1 Curry",
        "Baby Corn Fry",
        "Onion Pakoda",
        "Sweet - 1",
        "Sweet - 2",
        "White Rice",
        "Pappu",
        "Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Papad",
        "Banana",
        "Beeda",
        "Ice Cream",
        "Fruit Salad with Ice Cream (American Nuts / Black Currant etc.)",
        "Badam Kheer",
        "Water Bottle",
        "Plates"
     ]
}
    
    ];

    localStorage.setItem(
        "packages",
        JSON.stringify(defaultPackages)
    );

}

const packages =
JSON.parse(localStorage.getItem("packages")) || [];

const container =
document.getElementById("packageContainer");

if(container){

container.innerHTML="";

packages.forEach(pkg=>{

container.innerHTML += `

<div class="card">

<h3>${pkg.name}</h3>

<h4>${pkg.price}</h4>

<ul>

${pkg.items.map(item=>`<li>${item}</li>`).join("")}

</ul>

<a class="btn"
href="https://wa.me/917981027201?text=I want ${encodeURIComponent(pkg.name)}">

Book Now

</a>

</div>

`;

});

}
