// console.log("product-page.js");

let productList = [
	{
		image: "/imgs/product-iron-flag.jpg",
		name: "Wu_Tang Clan",
		title: "Iron Flag",
		description: "On Iron Flag, the rap assassins from Staten Island give you sharp reminders of what made them so brilliant. Knob twiddler extraordinaire RZA mishmashes obscure soul riffs and horn blasts on 'Uzi (Pinky Ring)' and 'Rules,' upping the mixing-console ante."
	},
	{
		image: "/imgs/product-abetter.jpg",
		name: "Wu_Tang Clan",
		title: "A Better Tomorrow",
		description: "A Better Tomorrow is the sixth studio album by American hip hop group Wu-Tang Clan. The album was released on December 2, 2014, Wu-Tang Records. The album was supported by the singles 'Keep Watch', 'Ron O'Neal' and 'Ruckus in B Minor'."
	},
	{
		image: "/imgs/product-GZALiquidSwords.jpg",
		name: "GZA",
		title: "Liquid Swords",
		description: "Loaded wordplay aside, beat-wise Liquid Swords is fully and exceptionally RZA-produced (peep the electric guitars and spacey synths on 'Investigative Reports'). Liquid Swords is a perfect purchase for rap fiends who crave ill experimental beats and even iller punchlines."
	},
	{
		image: "/imgs/product-rza-thecure.jpg",
		name: "RZA",
		title: "The Cure",
		description: "On Iron Flag, the rap assassins from Staten Island give you sharp reminders of what made them so brilliant. Knob twiddler extraordinaire RZA mishmashes obscure soul riffs and horn blasts on 'Uzi (Pinky Ring)' and 'Rules,' upping the mixing-console ante."
	},
	{
		image: "/imgs/product-raekwon-fila.jpg",
		name: "Raekwon",
		title: "F.I.L.A.",
		description: "Fly International Luxurious Art is the sixth studio album by American rapper and Wu-Tang Clan member Raekwon. The album was released on April 28, 2015. The album is supported by the singles 'All About You', 'Soundboy Kill It' and 'Wall to Wall'."
	},
	{
		image: "/imgs/product-miami.jpg",
		name: "Wayne Cochrane",
		title: "Goin' Back To Miami",
		description: "Hip-hop newcomer Wayne Cochrane debuts strong with this album about not being in Miami and then proceeding to then be in Miami."
	}				

];


for (let i = 0; i < productList.length; i++) {
	
	let productImage = productList[i].image;
	let productName = productList[i].name;
	let productTitle = productList[i].title;
	let productDescription = productList[i].description;

	let productCard = `<article class="card2"><img src="${productImage}" class="card-images">`;
	productCard += `<header class="card-header"><h3>${productName}</h3><h4>${productTitle}</h4></header>`;
	productCard += `<section class="card-paragraph"><p>${productDescription}</p></section>`;
	productCard += `</article>`;

	

	let productHolder = document.getElementById("product-diplay");
 	productHolder.innerHTML += productCard;

 	};
