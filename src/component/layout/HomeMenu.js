import Image from "next/image"
import MenuItem from "../Menu/MenuItem"
import SectionHeader from "./SectionHeader"

export default function HomeMenu() {
    return (
        <>
            <section className="">
                <div className="absolute left-0 right-0 w-full justify-start">
                    <div className="absolute left-0 -top-[70px] -z-10 text-left">
                        <Image 
                            src={"/sallad1.png"} 
                            width={109}
                            height={189}
                            alt={"Sallad"}
                        />
                    </div>
                    <div className="absolute right-0 -top-36 -z-10 text-right">
                        <Image 
                            src={"/sallad2.png"} 
                            width={107}
                            height={195}
                            alt={"Sallad"}
                        />
                    </div>
                </div>

                <SectionHeader 
                    subHeader={'Check Out'}
                    mainHeader={'Menu'}
                />

                <div className="grid grid-cols-3 gap-4">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </section>
        </>
    )
}