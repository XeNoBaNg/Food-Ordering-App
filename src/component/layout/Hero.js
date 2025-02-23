import Image from "next/image"
import Right from "../icons/Right"

export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything<br /> 
                    is better<br />
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-600 text-sm">
                    Pizza is the missing piece that makes everyday 
                    complete, a simple yet delicious joy in life
                </p>
                <div className="flex gap-4 text-sm">
                    <button
                        className="bg-primary text-white uppercase px-4 py-2 rounded-full flex items-center gap-2"
                    >
                        Order Now 
                        <Right />       
                    </button>
                    <button
                        className="flex gap-2 py-2 items-center text-gray-600 font-semibold"
                    >
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
            <Image 
                src="/pizza.png" 
                fill 
                alt="Pizza"
                style={{ objectFit: "contain" }} 
            />
            </div>
        </section>
    )
}