import Link from "next/link";
import {FaGithub,FaLinkedin,FaTwitter, FaYoutube} from "react-icons/fa";

const socials = [
    {icon:<FaGithub/>,path:"https://github.com/HemantKr071"},
    {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/hemant-kumar-b1b7a023b/"},
    {icon:<FaTwitter/>,path:"https://x.com/Hemant_Kr_071"},
    {icon:<FaYoutube/>,path:""},

];

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social