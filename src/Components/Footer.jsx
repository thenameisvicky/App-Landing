  import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
  import { footerLinks, socialMedia } from "../Constants"

  const Footer = () => {
    return (
      <footer className="max-container" >
        <div className="flex justify-between items-start flex-wrap max-lg:flex-col gap-20" > 
          <div className="flex flex-col  items-start flex-wrap gap-10" >
            <a href="/" ><img src={footerLogo} width={150} height={46} /></a>
            <p className=" mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm" >Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            <div className="flex gap-5 items-center mt-8" >
              {socialMedia.map((icon,index)=>(
                <div key={index} className="flex justify-center items-center h-12 w-12 bg-white rounded-full" >
                  <img src={icon.src} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20 " >
            {footerLinks.map((section)=>(
              <div key={section} >
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6" >{section.title}</h4>
                <ul >
                  {section.links.map((link)=>(
                    <li key={link.name} className="text-white mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor:pointer" >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> 
        </div>
        <div className="flex justify-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center" >
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor:pointer " >
            <img src={copyrightSign} width={20} height={20} className="rounded-full m-0 cursor-pointer " />
            <p className="cursor-pointer hover:text-slate-gray" >Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer hover:text-slate-gray" >T & C </p>
        </div>
      </footer>
    )
  }

  export default Footer