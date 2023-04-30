// import ResturantCard from "./ResturantCard";
import mockData from "../utlis/mockData";

import { CDN_URL } from "../utlis/constants.js";

const ResturantCard = (props) => {
    //const ResturantCard = ({resName,cusine}) => {
      const{resData}=props;
    //const ResturantCard = (props) => {
    
    // for clean code :- object destructure
    // here ? is optional chaining
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
    
      return (
        //<div className="res-card">
        //<div className="res-card" style={StyleCard}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          {/* <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId }/> */}
          <img className="res-logo" alt="res-logo" src={CDN_URL +cloudinaryImageId }/>
          {/* <h3>{props.resName}</h3> */}
          {/* <h3>{resName}</h3>
          <h4>{cusine}</h4> */}
          {/* <h3>{resData.data.name}</h3> */}
          {/* <h4>{props.cusine}</h4> */}
          {/* <h4>{resData.data.cuisines.join(", ")}</h4>
          <h4>{resData.data.avgRating} stars</h4>
         
        <h4>{resData.data.deliveryTime} minutes</h4> */}
        <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo/100} For Two </h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      );
    };
  
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* <ResturantCard resName="Meghana Food" cusine="Biryani,North Indian,Asian" /> */}
          {/* <ResturantCard resData={resList[0]} />
          <ResturantCard resData={resList[1]} />
          <ResturantCard resData={resList[2]} />
          <ResturantCard resData={resList[3]} />
          <ResturantCard resData={resList[4]} />
          <ResturantCard resData={resList[5]} />
          <ResturantCard resData={resList[6]} />
          <ResturantCard resData={resList[7]} />
          <ResturantCard resData={resList[8]} />
          <ResturantCard resData={resList[9]} />
          <ResturantCard resData={resList[10]} />
          <ResturantCard resData={resList[11]} />
          <ResturantCard resData={resList[12]} />
          <ResturantCard resData={resList[13]} />
          <ResturantCard resData={resList[14]} /> */}
         
         {/* here by using map we are using dynamic data for resturant */}
         {mockData.map((restaurant)=>(<ResturantCard  key={restaurant.data.id}resData ={restaurant}/>))}
          
        </div>
      </div>
    );
  };
  export default Body;