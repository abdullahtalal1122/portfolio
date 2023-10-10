import profileimg from "../../../images/heroimage.png"
import rectangle from "../../../images/Rectangle.png"
import Skills from "../../utlis/Skill"

export default function HomeAbout() {
  return (
    <div className="container mx-auto mt-10">
         <div className="flex flex-col md:flex-row">
           <div className="md:w-1/2">
                <div className="rounded-full w-3/5 h-auto p-0 mx-auto mt-5 border-5 border-gray-500 ">
                    <img src={profileimg}  alt="Image"  className=" mt-[-50px] rounded-full " />
                </div>
            </div>
            <div className="md:w-1/2 p-4">
                <p className="text-7xl font-bold text-black ">About Me</p>
                <p className="tracking-wide">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Skills Value="UI/UX" Img={rectangle}  />
                <Skills Value="Website Design" Img={rectangle}  />
                <Skills Value="App Design" Img={rectangle}  />
                <Skills Value="Graphic Design" Img={rectangle}  />
            </div>    
        </div>
    </div>
  )
}
