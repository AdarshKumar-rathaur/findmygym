import "./App.css";
import Gym from "./components/Gym/Gym";
import Line from "./components/Line/Line";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [userPosition, setUserPosition] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [search, setSearch] = useState("");
  const API_KEY = process.env.REACT_APP_APIKEY;

  const getUserPostion = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const Position = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setUserPosition(Position);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const getUserAddress = () => {
    if (userPosition) {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${userPosition.latitude}&lon=${userPosition.longitude}&type=city&apiKey=${API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((result) => {
          if (result.features && result.features[0] && result.features[0].properties.city) {
            setUserAddress(result.features[0].properties.city);
          } else {
            setUserAddress("City not found"); // Handle non-city response
          }
        })
        .catch((error) => console.error("Geoapify Error:", error));
    }
  };

  useEffect(getUserPostion, []);
  // eslint-disable-next-line
  useEffect(getUserAddress, [userPosition]);

  return (
    <>
      <div className="page-container">
        <header>
          <Navbar
            location={userAddress}
            setSearch={setSearch}
          />
        </header>
        <main>
          <Hero />
          <Line />
          <Gym userPosition={userPosition} API_KEY={API_KEY} search={search} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
