import logo from "@/assets/logo.png";
import Image from "next/image";
// import 

export default function Section5() {
    return (
        <div className="flex">
            <div>
                <Image src={logo} alt="logo" />
                <p> Transforming Security </p>
            </div>
        </div>
    )
}
