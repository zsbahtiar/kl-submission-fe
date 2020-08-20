

const parent = [
	{name: "bunga", "title": "Bunga"},
	{name: "hewan", "title": "Hewan"}
];

const child = [
	{name: "mawar", "title": "Mawar", parent_ref: "bunga"},
	{name: "melati", "title": "Melati", parent_ref: "bunga"},
	{name: "kucing", "title": "Kucing", parent_ref: "hewan"},
	{name: "anjing", "title": "Anjing", parent_ref: "hewan"}
];

const genre = [
	{id: 1, "title": "Mawar Biru", child_ref: "mawar"},
	{id: 2, "title": "Mawar Merah", child_ref: "mawar"},
	{id: 3, "title": "Melati Hutan", child_ref: "melati"},
	{id: 4, "title": "Melati Primrose", child_ref: "melati"},
	{id: 5, "title": "Melati Casablanca", child_ref: "melati"},
	{id: 6, "title": "Kucing Ocicat", child_ref: "kucing"},
	{id: 7, "title": "Kucing Manx", child_ref: "kucing"},
	{id: 8, "title": "Kucing British Shorthair", child_ref: "hewan"},
	{id: 9, "title": "Anjing Doberman", child_ref: "anjing"},
	{id: 10, "title": "Anjing Welsh", child_ref: "anjing"},
	{id: 11, "title": "Anjing Corgi", child_ref: "anjing"},
	{id: 12, "title": "Anjing Pudel", child_ref: "anjing"}
];


export {parent, child, genre};