
export default function Services({description,title,icon}) {
  return (
    <div className="bg-white pt-5 pb-3 px-3 mb-2  md:w-1/5 rounded-md">
        <img className="mb-1" src={icon} alt="" width="70px"/>
        <h1 className="mb-1 font-bold text-2xl">{title}</h1>
        <p className="mb-1">{description}</p>
    </div>
  )
}
