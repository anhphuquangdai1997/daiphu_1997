var initState = [
  {
    id: 1,
    name: "iphong 12",
    price: 1500,
    status: true,
  },
  {
    id: 2,
    name: "iphong 13",
    price: 1400,
    status: true,
  },
  {
    id: 3,
    name: "iphong 10",
    price: 1000,
    status: true,
  },
];
const products = (state = initState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
