export const NoAccountPrompt = "Don't Have An Account?";
export const Email = "Email";
export const Password = "Password";
export const SignIn = "Sign In";
export const SignUp = "Sign Up";
export const Name = "Name";
export const ConfirmPassword = "Confirm Password";
export const AlreadyRegisteredPrompt = "Already Have An Account?";

const Vendor = "Vendor";
const Customer = "Customer";
export const UserTypes = [Customer, Vendor];

export const WelcomeMessage = "Welcome Back";
export const UserName = "Hamid Ali";

export const SearchBarPlaceHolder = "Search for dish or restaurant";

export const Popular = "Popular Near You";
export const Categories = "Explore Categories";
export const Recommended = "Recommended";

export const ViewMore = "View More";
export const ShowAll = "Show All";

const Popular01 = {
  ImageSource: require("../images/burger.jpg"),
  Time: 25,
  Distance: 254,
  Name: "Burger",
  Description: "Ahmad Burger, Fast Food",
  Rating: 4.5,
};
const Popular02 = {
  ImageSource: require("../images/coffee.jpg"),
  Time: 16,
  Distance: 168,
  Name: "Coffee",
  Description: "Ahmad Burger, Fast Food",
  Rating: 4.7,
};
const Popular03 = {
  ImageSource: require("../images/fries.jpg"),
  Time: 9,
  Distance: 99,
  Name: "Fries",
  Description: "Ahmad Burger, Fast Food",
  Rating: 4.3,
};
const Popular04 = {
  ImageSource: require("../images/pizza.jpg"),
  Time: 12,
  Distance: 132,
  Name: "Pizza",
  Description: "Ahmad Burger, Fast Food",
  Rating: 5,
};
const Popular05 = {
  ImageSource: require("../images/shawarma.jpg"),
  Time: 18,
  Distance: 180,
  Name: "Shawarma",
  Description: "Ahmad Burger, Fast Food",
  Rating: 4.9,
};

export const PopularData = [
  Popular01,
  Popular02,
  Popular03,
  Popular04,
  Popular05,
];

export const PlacesWithSpace = " Places";

const FastFoods = {
  Name: "Fast Foods",
  IconName: "silverware-fork-knife",
  AvailablePlaces: 657,
  BackgroundColor: "darkgreen",
};
const SoftDrinks = {
  Name: "Soft Drinks",
  IconName: "bottle-wine",
  AvailablePlaces: 298,
  BackgroundColor: "red",
};
const Fruits = {
  Name: "Fruits",
  IconName: "food-apple",
  AvailablePlaces: 326,
  BackgroundColor: "darkgoldenrod",
};
const Vegetables = {
  Name: "Vegetables",
  IconName: "carrot",
  AvailablePlaces: 688,
  BackgroundColor: "crimson",
};
const BakeryItems = {
  Name: "Bakery Items",
  IconName: "cupcake",
  AvailablePlaces: 15,
  BackgroundColor: "blueviolet",
};

export const CategoriesData = [
  FastFoods,
  SoftDrinks,
  Fruits,
  Vegetables,
  BakeryItems,
];

export const RecommendedData = [
  Popular05,
  Popular04,
  Popular03,
  Popular02,
  Popular01,
];

const PastOrders01 = {
  IconName: FastFoods.IconName,
  Category: FastFoods.Name,
  IconColor: FastFoods.BackgroundColor,
  date: "May 02",
  Amount: "$ 10.00",
  Name: "Pizza",
};

const PastOrders02 = {
  IconName: SoftDrinks.IconName,
  Category: SoftDrinks.Name,
  IconColor: SoftDrinks.BackgroundColor,
  date: "May 01",
  Amount: "$ 03.00",
  Name: "Coke",
};

const PastOrders03 = {
  IconName: Fruits.IconName,
  Category: Fruits.Name,
  IconColor: Fruits.BackgroundColor,
  date: "Apr 30",
  Amount: "$ 05.00",
  Name: "Apples",
};

const PastOrders04 = {
  IconName: Vegetables.IconName,
  Category: Vegetables.Name,
  IconColor: Vegetables.BackgroundColor,
  date: "Apr 29",
  Amount: "$ 5.00",
  Name: "Potatoes",
};

const PastOrders05 = {
  IconName: BakeryItems.IconName,
  Category: BakeryItems.Name,
  IconColor: BakeryItems.BackgroundColor,
  date: "Apr 28",
  Amount: "$ 01.00",
  Name: "Biscuits",
};

export const PastOrdersData = [
  PastOrders01,
  PastOrders02,
  PastOrders03,
  PastOrders04,
  PastOrders05,
];
