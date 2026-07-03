// =============================
// Jithus Catering Website
// =============================

// Default Packages (first time only)

if (!localStorage.getItem("packages")) {

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
