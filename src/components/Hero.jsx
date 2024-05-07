 import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp"
 import hero2 from "../assets/hero2.webp"
 import hero3 from "../assets/hero3.webp"
 import hero4 from "../assets/hero4.webp";

function Hero() {
    const carouseImage = [hero1,hero2,hero3,hero4];
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab inventore
          nemo laudantium fuga obcaecati, excepturi deleniti dolorem fugit
          aspernatur totam illo porro ipsa facere! Fugit adipisci earum
          laudantium, nesciunt quis id eius cumque excepturi quo culpa
          reprehenderit facilis velit temporibus.
        </p>
        <div className="mt-8 ">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 bg-neutral rounded-box space-x-4">
        {carouseImage.map((image) => {
            return (
                <div key={image} className="carousel-item">
                    <img className="rounded-box h-full w-80 object-cover" src={image} />
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Hero