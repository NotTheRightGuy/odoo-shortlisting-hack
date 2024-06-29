import logo from "@/public/logo.svg";
import Image from "next/image";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";
import Slack from "@/public/slack.svg";
import Threads from "@/public/threads.svg";

export default function Section5() {
    return (
        <div className="flex w-screen p-10 justify-around">
            <div className="w-fit flex flex-col gap-2">
                <Image src={logo} alt="logo" height={55} />
                <p className="font-montserrat text-lg font-medium"> Transforming Security </p>
                <div className="flex gap-5">
                    <Image src={Facebook}  alt="Facebook" />
                    <Image src={Twitter}  alt="Twitter" />
                    <Image src={Instagram}  alt="Instagram" />
                    <Image src={Slack}  alt="Slack" />
                    <Image src={Threads}  alt="Threads" />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-min">
                <p className="font-semibold">Contact us</p>
                <p className="font-medium text-gray-600 "> 623 Harrison St., 2nd Floor, Gandhinagar, Guj-23840 </p>
                <p className="font-medium text-gray-600" > 415-201-634234 35hello@example.com </p>
            </div>
            <div className="flex flex-col gap-1 font-medium text-gray-600 text-lg">
                <p className="font-bold text-black" >Company</p>
                <p > About </p>
                <p> Features </p>
                <p> Pricing </p>
                <p> Wall of Love </p>
                <p> Athletes </p>
                <p> Manifesto </p>
                <p> Careers </p>
                <p> Blog </p>
                <p> Status Page </p>
                <p> Terms of use </p>
                <p> Disclaimer </p>
                <p> Privacy policy </p>
            </div>

            <div className="flex flex-col gap-1 font-medium text-gray-600 text-lg">
                <p className="font-bold text-black">Community</p>
                <p> Refer a friend </p>
                <p> Ideas </p>
                <p> Script </p>
                <p> Streams </p>
                <p> House Rules </p>
                <p> Moderators </p>
                <p> Chats </p>
            </div>

            <div className="flex flex-col gap-1 font-medium text-gray-600 text-lg">
                <p className="font-bold text-black">For Business</p>
                <p> Widgets </p>
                <p> Advertising </p>
                <p> Query Libs </p>
                <p> Referrals </p>
                <p> Partner Program </p>
                <p> Affiliate Program </p>
            </div>
        </div>
    );
}
