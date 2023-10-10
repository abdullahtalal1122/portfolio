import "../../index.css"

export default function Atag({link,content ,additionalClasses}) {
  return (
   <a href={link} className={`text-black  text-center  px-3 py-1 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 ${additionalClasses}`}>
    {content}
</a>
  )
}
