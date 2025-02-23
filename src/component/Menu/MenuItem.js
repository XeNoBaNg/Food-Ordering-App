export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center
            grup hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div>
                <img src="/pizza.png" className="max-h-auto max-h-24block mx-auto" alt="Pizza" />
            </div>
            <h4 className="font-semibold my-3 text-xl">Pepporoni Pizza</h4>
            <p className="text-gray-500 text-sm">Covered with cheese, this mouth-watering dish is 
                super tasty and filling.
            </p>
            <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">Add To Cart $12</button>
        </div>
    )
}   