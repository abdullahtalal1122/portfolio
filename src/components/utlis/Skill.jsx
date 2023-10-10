
export default function skills({Value , Img  }) {
  return (
     <div className="py-2 ">
        <h1 className="mb-2">{Value}</h1>
        <img src={Img} alt="reading"  />
    </div>
  )
}
