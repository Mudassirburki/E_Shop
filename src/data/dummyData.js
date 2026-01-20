import { icon } from "@fortawesome/fontawesome-svg-core";

export const LOCATIONS = ["Peshawar", "Islamabad", "Karachi", "Lahore"];

export const CATEGORIES = [
  { id: 1, icon: "shirt-outline" },
  { id: 2, icon: "laptop-outline" },
  { id: 3, icon: "ticket" },
  { id: 4, icon: "laptop-outline" },
  { id: 5, icon: "shirt-outline" },
  { id: 6, icon: "ticket" },
  { id: 7, icon: "laptop-outline" },
  { id: 8, icon: "shirt-outline" },
];

export const IMAGE_CATEGORIES = [
  { id: 1, image: require("../../assets/homeImage.png") },
  { id: 2, image: require("../../assets/homeImage.png") },
  { id: 3, image: require("../../assets/homeImage.png") },
];
export const ProductImages = [
  require("../../assets/product.png"),
  require("../../assets/product.png"),
  require("../../assets/product.png"),
];
export const PRODUCT_DATA = [
  {
    id: "1",
    title: "Navy Mixed Stripe Trainers: Sizes 9-12 - 99p C&C",
    sizes: "9-12",
    description:
      "Step up your  casual style  with the Men's  Navy Mixed Stripe Trainers. Combining comfort with eye-catching ",
    price: "$34.00",
    originalPrice: "$64.00",
    discount: "33%",
    images:[
      require("../../assets/product.png"),
      require("../../assets/shoes.jpg"),
      require("../../assets/shoes2.jpg"),
    ],
    user:{ name: "Mudassir Burki", avatar: require("../../assets/burki.jpg") }
  },
];
export const NOTIFICATION_DATA = [
  {
    id: "1",
    title: "50% off Sale",
    avatar: require("../../assets/product.png"),
    description:
      "50% OFF in Ultra-boost All Terrain Ltd Shoes!!",
      time: "2 hours ago",
  },
  {
    id: "2",
    title: "New Arrivals Just In",
    avatar: require("../../assets/shoes.jpg"),
    description:
      "50% OFF in Ultra-boost All Terrain Ltd Shoes!!",
      time: "1 day ago",
  },
];
export const Notification_Settings = [
  {
    id: 1,
    title: "Add New Keyword",
    icon: "plus",
    type: "personalized"
  },
  {
    id: 2,
    title: "Someone Mentioned You",
    icons: ["cellphone", "email-outline", "bell-outline"],
    type: "general"
  },
  {
    id: 3,
    title: "Daily Picks",
    icons: ["cellphone", "email-outline", "bell-outline"],
    type: "general"
  },
  {
    id: 4,
    title: "Comment Response",
    icons: ["cellphone", "email-outline", "bell-outline"],
    type: "general"
  },
  {
    id: 5,
    title: "New Follower Alert",
    icons: ["cellphone", "email-outline", "bell-outline"],
    type: "general"
  },
];
export const SUGGESTED_KEYS = ["Laptops", "Mobiles", "Watches", "Furniture", "Shoes", "Fashion"];
export const CHAT_DATA = [
  {
    id: "1",
    name: "Mudassir Burki",
    avatar: require("../../assets/burki.jpg"),
    lastMessage: "Hello, is the item still available?",
    time: "2:30 PM",
    unreadCount: 0,
  },
  {
    id: "2",
    name: "Ammar barki",
    avatar: require("../../assets/burki.jpg"),
    lastMessage: "Can we negotiate the price?",
    time: "1:15 PM",
    unreadCount: 2,
  },
];
export const User_Profile=[
  {
    id:1,
    name:"Mudassir Burki",
    email:"mudassirburki@gmail.com",
    phone:"+923001234567",
    avatar:require("../../assets/burki.jpg")
  }
]

export const SETTINGS_MENU = [
  {
    id: 1,
    title: "Account Settings",
    icon: "account-circle-outline",
    type: "link"
  },
  {
    id: 2,
    title: "Language",
    icon: "web",
    type: "value",
    value: "English"
  },
  {
    id: 3,
    title: "Notification",
    icon: "bell-outline",
    type: "toggle",
    value: true
  },
  {
    id: 4,
    title: "Theme",
    icon: "theme-light-dark",
    type: "value",
    value: "Light Mode"
  },
  {
    id: 5,
    title: "Help & Support",
    icon: "help-circle-outline",
    type: "link"
  },
  {
    id: 6,
    title: "Privacy Policy",
    icon: "lock-outline",
    type: "link"
  },
  {
    id: 7,
    title: "Logout",
    icon: "logout",
    type: "logout"
  }
];