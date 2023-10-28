"use client";
import React, { useState, useEffect } from "react";

const TimeAndLocation = () => {
  // const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // // Get user's location
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const { latitude, longitude } = position.coords;
    //     // based on the lat and long, get the city name
    //     fetch(
    //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setLocation(data.city + ", " + data.countryName);
    //       });
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // Get current time
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sm:visible top-8 left-8 fixed hidden sm:block">
      {/* {location ? (
        <p className="font-mono text-xs capitalize text-neutral-500">
          {location}
        </p>
      ) : (
        ""
      )} */}
      <p className="font-mono text-xs capitalize text-neutral-500">{time}</p>
    </div>
  );
};

export default TimeAndLocation;

