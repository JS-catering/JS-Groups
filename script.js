// =============================
// Jithus Catering Website
// =============================

const defaultPackages = [

    {
        category:"veg",
        name:"Veg Menu 1",
        price:"₹130 / Person",
        items:[
            "White Rice",
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
        category:"veg",
        name:"Veg Menu 2",
        price:"₹150 / Person",
        items:[
            "Vegetable Biryani",
            "Onion Raitha",
            "White Rice",
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
        category:"veg",
        name:"Veg Menu 3",
        price:"₹160 / Person",
        items:[
            "Vegetable Biryani",
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
        category:"veg",
        name:"Veg Menu 4",
        price:"₹180 / Person",
        items:[
            "Mushroom Biryani",
            "Nunevankaya",
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
        category:"veg",
        name:"Veg Menu 5",
        price:"₹160 / Person",
        items:[
            "Karivepaku Rice / Kothimeera Rice / Pudhina Rice / Pulihora / Coconut Rice (Any One)",
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
        category:"veg",
        name:"Veg Menu 6",
        price:"₹190 / Person",
        items:[
            "Mushroom Biryani / Vegetable Biryani",
            "Nunevankaya",
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
        category:"veg",
        name:"Veg Menu 7",
        price:"₹200 / Person",
        items:[
            "Mushroom Biryani / Vegetable Biryani",
            "Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Oil Fry",
            "Masala Wada",
            "Sweet (Kova Cake / Milk Cake / Chandrakala / Poli)",
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
        category:"veg",
        name:"Veg Menu 8",
        price:"₹205 / Person",
        items:[
            "Mushroom Biryani / Vegetable Biryani",
            "Nunevankaya",
            "Onion Raitha",
            "1 Curry",
            "Oil Fry",
            "Masala Wada",
            "Sweet (Kova Jangri / Dry Jamun / Jangri / Laddu / Mysore Pak / Badusha)",
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
    category:"veg",
    name:"Veg Menu 9",
    price:"₹220 / Person",
    items:[
        "Mushroom Biryani / Vegetable Biryani",
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
    category:"veg",
    name:"Veg Menu 10",
    price:"₹205 / Person",
    items:[
        "Mushroom Biryani / Vegetable Biryani",
        "Nunevankaya",
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
        "Beeda",
        "Ice Cream",
        "Water Bottle",
        "Plates"
    ]
},
{
    category:"veg",
    name:"Veg Menu 11",
    price:"₹240 / Person",
    items:[
        "Mushroom Biryani / Vegetable Biryani",
        "2 Chapathi",
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
        "Beeda",
        "Ice Cream",
        "Banana",
        "Water Bottle",
        "Plates"
    ]
},
{
    category:"veg",
    name:"Veg Menu 12",
    price:"₹245 / Person",
    items:[
        "Mushroom Biryani",
        "Chapathi",
        "Kurma",
        "Onion Raitha",
        "2 Curry",
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
    category:"veg",
    name:"Veg Menu 13",
    price:"₹220 / Person",
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
    category:"veg",
    name:"Veg Menu 14",
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
    category:"veg",
    name:"Veg Menu 15",
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
    category:"veg",
    name:"Veg Menu 16",
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
    category:"veg",
    name:"Veg Menu 17",
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
    category:"veg",
    name:"Veg Menu 18",
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
    category:"veg",
    name:"Veg Menu 19",
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
},
    {
    category:"tiffin",
    name:"Tiffins Menu 1",
    price:"₹85 / Person",
    items:[
        "Ghee Pongal / Kichidi",
        "Uddi Wada",
        "Sambar",
        "Chutney",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 2",
    price:"₹90 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 3",
    price:"₹100 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Water Bottle",
        "Plates"
    ]
},
{
    category:"tiffin",
    name:"Tiffins Menu 4",
    price:"₹110 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Fruit Kesari",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 5",
    price:"₹121 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Bread Halwa",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 6",
    price:"₹130 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Poori - 2",
        "Aloo Masala / Vada Curry",
        "Fruit Kesari",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Coffee / Tea",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 7",
    price:"₹155 / Person",
    items:[
        "Idly - 1",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Poori - 3",
        "Aloo Masala / Vada Curry",
        "Uthappam - 1",
        "Fruit Kesari",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Coffee / Tea",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 8",
    price:"₹135 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 1",
        "Uthappam - 2",
        "Fruit Kesari",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Coffee / Tea",
        "Water Bottle",
        "Plates"
    ]
},

{
    category:"tiffin",
    name:"Tiffins Menu 9",
    price:"₹145 / Person",
    items:[
        "Idly - 2",
        "Ghee Pongal / Kichidi",
        "Uddi Wada - 2",
        "Poori - 2",
        "Aloo Masala",
        "Fruit Kesari",
        "Coffee / Tea",
        "Sambar",
        "Chutney",
        "Karam Chutney",
        "Water Bottle",
        "Plates"
    ]
}
    
    ];

    localStorage.setItem(
        "packages",
        JSON.stringify(defaultPackages)
    );

const packages = defaultPackages;

const container = document.getElementById("packageContainer");

function showPackages(category){

    if(!container) return;

    container.innerHTML = "";

    const filtered =
        category === "all"
        ? packages
        : packages.filter(pkg => pkg.category === category);

    filtered.forEach(pkg => {

        container.innerHTML += `

        <div class="card">

            <h3>${pkg.name}</h3>

            <h4>${pkg.price}</h4>

            <ul>
                ${pkg.items.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <p class="package-note">
                 📝 <strong>Note:</strong> The listed prices are indicative. Final pricing is negotiable based on the number of guests, menu customization, and event requirements.
            </p>

            <a class="btn"
            href="https://wa.me/917981027201?text=I want ${encodeURIComponent(pkg.name)}">
            Book Now
            </a>

        </div>

        `;

    });

}

showPackages("all");
