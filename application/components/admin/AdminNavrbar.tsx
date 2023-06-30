import { ThemeContext } from '@/providers/context/ThemeContext';
import clsx from 'clsx'
import { useContext } from 'react';
import  {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { MdArrowRight } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { useSupabase } from '@/providers/SupabaseProvider';
import { redirect } from 'next/navigation';

interface AdminNavbarProps {
}

export const AdminNavbar: React.FC<AdminNavbarProps> = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const {supabase} = useSupabase();

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        redirect('/login')
    }
  
    return (
        <div className={clsx('flex w-full items-center justify-between  p-8 border-b-2 shadow-lg', isDarkTheme ? 'bg-gray-700 text-white':'bg-gray-100 text-gray-700'  )}>
            <div>
                <h1 className='text-2xl'>LOGO</h1>
            </div>
            <div className="flex space-x-4 items-center">
                <div className='flex items-center justify-center'>
                    <details className={clsx("dropdown", isDarkTheme && 'bg-slate-600')}>
                        <summary className={clsx("m-1 btn")}><CgProfile className="h-12 w-12"/></summary>
                        <ul className={clsx("p-2 mr-12 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52", isDarkTheme ? 'bg-gray-100 text-gray-700' : 'bg-gray-700 text-gray-100')}>
                            <li><a>Item 1</a></li>
                            <li><button onClick={handleSignOut} className="">Sign Out!</button></li>
                        </ul>
                    </details>
                </div>
                <div>
                    <button onClick={toggleTheme}>
                        {isDarkTheme ? <BsFillSunFill className='w-6 h-6 text-gray-100' /> :
                        <BsFillMoonFill  className='h-6 w-6 text-gray-700'/>}
                    </button>
                </div>
            </div>
        </div>
    )
}