interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Blog",
		link: "/grid-blog",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Contact Us",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
