
import { BiSolidDashboard } from 'react-icons/bi'
import { BsChatDots } from "react-icons/bs"
import { PiUsersFourFill } from 'react-icons/pi'
import { FaProductHunt } from 'react-icons/fa'
import { RiBook2Fill } from 'react-icons/ri'

export const AdminSidebar: React.FC = () => {



    return (

        <div className="bg-[#30303b]">
            <div className="left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-xl " aria-label="Sidebar">
                <div className=" px-3 py-4  space-y-12">
                    <ul className="space-y-2 font-medium mt-[32px]">
                        <li className="">
                            <a href="/admin" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-200">
                            <BiSolidDashboard className="w-6 h-6"/>
                            <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2 font-medium mt-[32px]">
                        <h1 className="text-xl font-semibold underline text-white">User Management</h1>
                        <li>
                            <a href="/admin/users" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                            <PiUsersFourFill className="h-6 w-6"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Useri</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                            <BsChatDots className="w-6 h-6 font-bold"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                    </ul>  
                    <ul>
                        <h1 className="text-xl font-semibold underline text-white">Content Management</h1>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                          <FaProductHunt className="w-6 h-6"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Produse</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                          <RiBook2Fill className="w-6 h-6"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Cursuri</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                          
                            <span className="flex-1 ml-3 whitespace-nowrap">Produse</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                          
                            <span className="flex-1 ml-3 whitespace-nowrap">Produse</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
                          
                            <span className="flex-1 ml-3 whitespace-nowrap">Produse</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>          
        </div>
    )
}