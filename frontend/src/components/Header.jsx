import { Navbar ,Button,TextInput, NavbarToggle} from "flowbite-react";
import { Link , useLocation} from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from "react-icons/fa"; 
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";


export default function Header() {
    const path = useLocation().pathname;
    const Location = useLocation();
  return (
    <Navbar className="broder-b-2">
        {/* logo */}
        <Link to='/' className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-950 via-purple-500 to-pink-500 rounded-lg text-white">
                Niveditha's
            </span>
            Blog
        </Link>
       {/* search icon */}
       <form>
        <TextInput  text = 'text'
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className=" hidden lg:inline"
        />
       </form>
       <Button className="w-12 h-10 lg:hidden" color='grey' pill>
        <AiOutlineSearch/>
       </Button>

       {/* div for dark mode and signin and toggle */}
       <div className="flex gap-2 md:order-2">
        <Button className=" w-12 h-10 hidden sm:inline" color='grey' pill>
            <FaMoon/>
        </Button>
        <Link to= '/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline >
                <Signin/>
            </Button>
        </Link>
        <NavbarToggle/>
       </div>

       {/* menu */}
       <Navbar.Collapse>
        <Navbar.Link active = { path === '/'} as = {'div'}>
            < Link path ='/' element = {<Home/>} >
                Home
            </Link>
        </Navbar.Link>
        <Navbar.Link active = { path === '/about'} as = {'div'}>
            < Link path ='/about' element = {<About/>} >
                About
            </Link>
        </Navbar.Link>
        <Navbar.Link active = { path === '/project'} as = {'div'}>
            < Link path ='/projects' element = {<Projects/>} >
                Projects
            </Link>
        </Navbar.Link>
       </Navbar.Collapse>
    </Navbar>
  )
}
