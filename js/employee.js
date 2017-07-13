console.log("test");

//Array of objects
let employeeList = [
	{
		image: "../imgs/Rza-1.jpg",
		name: "RZA",
		description: "Robert Fitzgerald Diggs (born July 5, 1969), better known by his stage name RZA, is an American rapper, record producer, musician, actor, filmmaker and author. A prominent figure in hip hop, RZA is the de facto leader of the Wu-Tang Clan."
	},
	{
		image: "../imgs/gfk.jpg",
		name: "Ghostface Killah",
		description: "Dennis Coles (born May 9, 1970),[3] better known by his stage name Ghostface Killah, is an American rapper and prominent member of the Wu-Tang Clan. Ghostface Killah debuted his solo-career with Ironman in 1996, which was well received by music critics."
	},
	{
		image: "../imgs/raekwon.jpg",
		name: "Raekwon",
		description: "Corey Woods (born January 12, 1970), better known by the stage name Raekwon the Chef, is an American rapper and a member of the Wu-Tang Clan. He released his solo debut, Only Built 4 Cuban Linx... in 1995, and has since recorded numerous solo albums."
	},
	{
		image: "../imgs/MethodMan.jpg",
		name: "Method Man",
		description: "Clifford Smith (born April 1, 1971), better known by his stage name Method Man, is an American rapper, record producer, and actor. He is known as a member of the East Coast hip hop collective Wu-Tang Clan. He is also one half of the hip hop duo Method Man & Redman."
	},
	{
		image: "../imgs/gza.jpg",
		name: "GZA",
		description: "Gary Grice (born August 22, 1966), better known by his stage names GZA (/ˈdʒɪzə/ JIZ-ə) and The Genius, is an American rapper and songwriter. A founding member of the hip hop group the Wu-Tang Clan, GZA is known as the group's 'spiritual head', being both the oldest and the first within the group to receive a record deal."
	},
	{
		image: "../imgs/Inspectah_Deck.jpg",
		name: "Inspectah Deck",
		description: "Jason Hunter (born July 6, 1970) better known by his stage name Inspectah Deck, is an American rapper, producer, and member of the groups Wu-Tang Clan and Czarface. He has acquired critical praise for his intricate lyricism, and for his verses on many of the group's most revered songs."
	},
	{
		image: "../imgs/U-God.jpg",
		name: "U-God",
		description: "Lamont Jody Hawkins (born October 11, 1970), better known as U-God (short for Universal God), is an American rapper and member of the hip hop collective, Wu-Tang Clan. He is known for having a deep, rhythmic flow that can alternate between being gruff or smooth"
	},
	{
		image: "../imgs/MK2.jpg",
		name: "Masta Killa",
		description: "Jamel Irief (born Elgin Turner; August 18, 1969), better known by his stage name Masta Killa, is an American rapper and member of the Wu-Tang Clan. Though one of the lesser-known members of the group, he has been prolific on Clan group albums and solo projects since the mid-1990s."
	},
	{
		image: "../imgs/Cappadonna.jpg",
		name: "Cappadonna",
		description: "Cappadonna, is an American rapper and unofficial member of the hip-hop collective Wu-Tang Clan. He is also a member of rap group Theodore Unit with Ghostface Killah."
	},
	{
		image: "../imgs/ODB.jpg",
		name: "Ol' Dirty Bastard",
		description: "R.I.P."
	}

];

// for loop to cycle through employees

for (let i = 0; i < employeeList.length; i++) {
	//declare employee variabes
	let employeeImage = employeeList[i].image;
	let employeeName = employeeList[i].name;
	let employeeDescription = employeeList[i].description;

	let employeeCard = `<article class="card"><img src="${employeeImage}" class="card-images">`;
	employeeCard += `<header class="card-header"><h3>${employeeName}</h3></header>`;
	employeeCard += `<section class="card-paragraph"><p>${employeeDescription}</p></section>`;
	employeeCard += `</article>`;

	console.log(employeeCard);

	let employeeHolder = document.getElementById("employee-target-div");
 	employeeHolder.innerHTML += employeeCard;
};




