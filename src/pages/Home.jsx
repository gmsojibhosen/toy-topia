import React, { useEffect } from "react";
import Slider from "../components/Slider";
import RatingToy from "../components/RatingToy";
import Category from "../components/Category";
import BudgetToy from "../components/Reviews";
const Home = () => {

  useEffect(() => {
    document.title = "Home - ToyTopia";
  }, []);

  return (
    <section>
      <Slider />
      <RatingToy />
      <Category />
      <BudgetToy />
    </section>
  );
};

export default Home;
