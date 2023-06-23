// import resList from "../utlis/mockData";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utlis/constants.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utlis/useOnlineStatus.js";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId }/> */}
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} For Two </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  const [listOfResturants, setListOfRestutant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  // console.log("body rendered");
  // const [listOfResturants, setListOfRestutant] = useState(resList); data coming from mockdata reslist

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    //not got way of writing code
    //  setListOfRestutant(json.data.cards[2].data.data.cards)

    //optional chaning is good way
    setListOfRestutant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline! Please check your internet connection..
      </h1>
    );

  //loading will come before API renders, but not a good way
  //  if(listOfResturants.length === 0){
  // return <h1>Loading...</h1>;

  //for fake cards shimmer
  //   return <Shimmer/>;
  //  }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);

              const filteredResturant = listOfResturants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log("clicked");
            setListOfRestutant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {/* here by using map we are using dynamic data for resturant */}
        {filteredResturant.map((restaurant) => (
          // {listOfResturants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
