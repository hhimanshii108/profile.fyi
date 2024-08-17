const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((curr) => {
        return curr.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: [...action.payload],
        copyProducts: [...action.payload],
        featureProducts: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData = [...action.payload];
      //console.log("sort data" + newSortData);
      if (state.sorting_value === "a-z") {
        newSortData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sorting_value === "z-a") {
        newSortData.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.sorting_value === "lowest") {
        newSortData.sort((a, b) => a.price - b.price);
      } else if (state.sorting_value === "highest") {
        newSortData.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        copyProducts: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    // case "FILTER_PRODUCTS":
    //   let data = [...action.payload];
    //   let temp = data.filter((element) =>
    //     element.name.toLowerCase().includes(state.filters.text.toLowerCase())
    //   );
    //   return {
    //     ...state,
    //     copyProducts: temp,
    //   };
    case "FILTER_PRODUCTS":
      let data = [...action.payload];
      console.log("data" + data);
      let temp = [...data];

      const { text, category, company } = state.filters;

      if (text) {
        temp = temp.filter((element) => {
          return element.name.toLowerCase().includes(text);
        });
        console.log(temp);
      }
      if (category != "All") {
        temp = temp.filter((element) => {
          return element.category === category;
        });
      }
      if (company != "All") {
        temp = temp.filter((element) => {
          return element.company.toLowerCase() === company.toLowerCase();
        });
      }
      return {
        ...state,
        copyProducts: temp,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
        },
      };

    default:
      return state;
  }
};

export default ProductReducer;
