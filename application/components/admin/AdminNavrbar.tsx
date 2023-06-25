import clsx from 'clsx'
import  {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

interface AdminNavbarProps {
    setIsDarkTheme : (isDarkTheme : boolean) => void;
    isDarkTheme : boolean
}

export const AdminNavbar: React.FC<AdminNavbarProps> = ({setIsDarkTheme, isDarkTheme }) => {
  
    return (
        <div className={clsx('flex w-full items-center justify-between  p-8 border-b-2 shadow-lg', isDarkTheme ? 'bg-gray-700 text-white':'bg-gray-100 text-gray-700'  )}>
            <div>
                <h1>Admin navbar</h1>
            </div>
            <div className="flex space-x-4">
                <div>
                    <button>
                         SignOut!
                    </button>
                </div>
                <div>
                    <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                        {isDarkTheme ? <BsFillSunFill className='w-6 h-6 text-gray-100' /> :
                        <BsFillMoonFill  className='h-6 w-6 text-gray-700'/>}
                    </button>
                </div>
            </div>
        </div>
    )
}