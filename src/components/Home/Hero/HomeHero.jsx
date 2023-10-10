import profileimg from "../../../images/heroimage1.png"
import { FaFacebook, FaTwitter ,FaInstagram ,FaLinkedin} from 'react-icons/fa';


export default function HomeHero() {
  return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
                
                <div className="md:w-1/2 p-4">
                <div className="py-3">
                    <p className="text-sm font-bold text-black">Hi I am</p>
                    <p className="text-lg text-main font-bold">Muhammad Umair</p>
                    <p className="text-lg md:text-7xl font-bold text-black">UI & UX</p>
                    <p className="text-lg md:text-7xl font-bold text-black md:pl-44 ">Designer</p>
                </div> 
                <p className="tracking-wide">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="bg-main text-white px-8 py-2 mt-2 rounded-md ">Hire Me</button>
                </div>
                
               
                <div className="md:w-1/2 md:hidden lg:block">
                    <div className="rounded-full w-3/5 h-auto p-0 mx-auto mt-5 border-5 border-gray-500 ">
                        <img src={profileimg}  alt="Image"  className=" lg mt-[-50px] rounded-full " />
                    </div>
                </div>
            </div>
            <div className="flex justify-end pr-56 py-2 space-x-5 md:hidden lg:flex">
                 <a href="https://www.facebook.com">
                    <FaFacebook className="text-black-500 hover:text-main transition h-6 w-6" />
                </a>
                <a href="https://twitter.com">
                    <FaTwitter className="text-black-400 hover:text-main transition h-6 w-6" />
                </a>
                <a href="https://twitter.com">
                    <FaInstagram className="text-black-400 hover:text-main transition h-6 w-6" />
                </a>
                <a href="https://twitter.com">
                    <FaLinkedin className="text-black-400 hover:text-main transition h-6 w-6" />
                </a>
            </div>
        </div>
  )
}
