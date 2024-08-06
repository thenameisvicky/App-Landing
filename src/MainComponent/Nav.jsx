import  {headerLogo} from '../assets/images'
import  {hamburger} from  '../assets/icons'
import { navLinks } from '../Constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/"><img src={headerLogo} alt='logo' width={130} height={29} className='justify-start'/> </a>
        <ul className='flex-1 flex justify-end gap-16 items-center  max-lg:hidden'>
           {navLinks.map((item)=>(
            <li key={item.label}>
              <a className='text-slate-gray font-montserrat leading-normal text-lg underline-link' href={item.href}>{item.label}</a>
            </li>
           ))}
        </ul>
        <div className='hidden max-lg:block'><img src={hamburger} alt="hamburger" width={25} height={25} /></div>
      </nav>
    </header>
  )
}

export default Nav