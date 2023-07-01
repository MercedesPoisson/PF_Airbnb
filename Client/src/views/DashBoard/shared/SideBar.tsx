import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function SideBar() {
    return(
        <div className="flex flex-col bg-segundo w-60 p-3 text-white font-cairo">
            <div className="flex items-center gap-2 px-1 py-3">
                <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
                <span className="ml-1 text-argentina font-comfortaa text-lg">airebnb</span>
                </div>
                <div className=" py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item => (
                <SideBarLink key={item.key} item={item} />
            )))}
            <div 
            
            className={classNames( "text-argentina cursor-pointer", linkClasses) }>
                <span className="text-xl"><HiOutlineLogout /></span>
                Logout
            </div>
            </div>
        </div>
    )
}

function SideBarLink({ item }) {
    const { pathname } = useLocation()
    return (
      <Link to={item.path} className={classNames(pathname === item.path ? "text-argentina " : "" , linkClasses) }>
        <span className="text-xl">{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    );
  }
