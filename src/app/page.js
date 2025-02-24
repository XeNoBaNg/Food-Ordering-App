import Image from "next/image";
import Hero from "../component/layout/Hero.js"
import HomeMenu from "../component/layout/HomeMenu.js"
import SectionHeader from "@/component/layout/SectionHeader.js";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="my-16">
        <SectionHeader  
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-center">
        Welcome to Nigginos, where passion meets flavor! 🍕🥗 <br />
        At Nigginos, we believe that great food brings people together.
        Our journey started with a simple idea: to create a menu filled 
        with authentic, mouth-watering dishes made from the freshest ingredients.
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-center">
        Whether you're craving a cheesy Pepperoni Pizza, a refreshing Sallad Bowl,
        or a handcrafted pasta dish, we've got something special for everyone.
        Our chefs are dedicated to crafting every meal with love and precision,
        ensuring each bite is packed with rich flavors and unforgettable textures.
        From our secret homemade sauces to our hand-tossed pizza dough, we take pride 
        in delivering quality that speaks for itself.
        </p>
      </section>
      <section className="text-center my-8">
        <SectionHeader 
          subHeader={'Don\'t Hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-600" href="tel:+91235456789">+91 235 456 789</a>
        </div>
      </section>
    </>
  );
}
