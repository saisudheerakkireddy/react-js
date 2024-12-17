import React from "react"; 
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const RestaurantCard = (props) => {

    const{resData} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src ="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg"/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.locality}</h4>
            <h5>4.3 Stars</h5>
            <h6>36 Minutes</h6>
        </div>
    )
}
const resList = 
    {
      "info": {
        "id": "241027",
        "name": "Namaste",
        "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
        "locality": "3rd Sector",
        "areaName": "Hsr Layout",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Thalis"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "366271",
        "avgRatingString": "4.4",
        "totalRatingsString": "28K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e86c30af-7b45-4cfc-b89f-dfe41d9bd692"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/namaste-3rd-sector-hsr-layout-rest241027",
        "type": "WEBLINK"
      }
    };



const Body = () => {
    return (

<div className="body">
    <div className="search"> Search</div>
    <div className="res-container">
<RestaurantCard resData = {resList}/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>

</div>
</div>

    )
}


const AppLayout = () => {
    return ( 
        <div> 
            <Header />
            <Body/>
            </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 

