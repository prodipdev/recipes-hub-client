import React, { useEffect, useState } from "react";
import ChefCard from "./chefCard";
import Marquee from "react-fast-marquee";

const ChefSection = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipes-hut-prodipdev.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-10 px-5 sm:px-10">
      <h2 className="text-3xl font-bold text-center">Popular Chef</h2>
      <p className="text-lg text-center mt-2">GOOD FOOD || GOOD LIFE</p>
      <div className="my-7 space-y-6">
        <Marquee gradient={true} pauseOnHover={true} speed={25}>
          {chef.map((chefBio) => (
            <ChefCard key={chefBio.chef_id} chef={chefBio}></ChefCard>
          ))}
        </Marquee>
        <Marquee
          gradient={true}
          pauseOnHover={true}
          speed={25}
          direction="right"
        >
          {chef.map((chefBio) => (
            <ChefCard key={chefBio.chef_id} chef={chefBio}></ChefCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ChefSection;
