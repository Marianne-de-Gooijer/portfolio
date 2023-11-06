import Image from "next/image";
import heroImage from "../../public/images/hero-programmer.jpg";

function Hero() {
    return (
        <div className="w-screen overflow-hidden h-screen">
            <Image src={heroImage} alt="/" className="w-full h-full object-cover" />
        </div>
    )
}

export default Hero;