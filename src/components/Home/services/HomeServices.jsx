import icon1 from "../../../images/icon1.PNG"
import icon2 from "../../../images/icon2.PNG"
import icon4 from "../../../images/icon4.PNG"
import Services from "../../utlis/Services"

export default function HomeServices() {
  return (
    <div className="container">
        <div className='text-center mb-3'>
            <h1 className='font-bold  text-7xl'>Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between '>
            <Services title="UI/UX" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" icon={icon1}/>
            <Services title="Web Design" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" icon={icon2}/>
            <Services title="App Design" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" icon={icon1}/>
            <Services title="Graphic Design" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" icon={icon4}/>
        </div>
    </div>
  )
}
