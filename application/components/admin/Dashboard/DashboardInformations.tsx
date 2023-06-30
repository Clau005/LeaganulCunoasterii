import clsx from "clsx"

interface DashBoardInformationsProps {
    isDarkTheme : boolean
}

    export const DashBoardInformations:React.FC<DashBoardInformationsProps> = ({isDarkTheme}) => {
 
    
    return (
        <div className={clsx('grid grid-cols-3 grid-flow-col gap-4 w-[85%] m-auto', isDarkTheme ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-700' )}>
            <div>
                <button className="text-2xl font-semibold">User Management</button>
                <div className={clsx('w-full min-h-full p-4 mt-2 text-xl', isDarkTheme ? 'bg-gray-600' : 'bg-gray-50' )}>
                    <ul className="list-disc p-4 space-y-2">
                        <li>Useri: Poți crea, edita sau șterge utilizatori conform nevoilor tale.</li>
                        <li>Profil: Tot în bara de navigație de sus, vei găsi opțiuni pentru a modifica detaliile profilului tău și pentru a te deloga din aplicație.</li>
                    </ul>
                </div>
            </div>
           
            <div>
                <button className="text-2xl font-semibold">Content Management</button>
                <div className={clsx('w-full min-h-full p-4 mt-2 text-xl', isDarkTheme ? 'bg-gray-600' : 'bg-gray-50' )}>
                    <ul className="list-disc p-4 space-y-2">
                        <li>Produse: Ai posibilitatea de a schimba aspectul și layout-ul produselor, adăuga noi produse sau șterge produse existente. Totul poate fi gestionat printr-un simplu clic pe link-ul spre produse.</li>
                        <li>Blog: Ai control total asupra secțiunii de blog. Poți scrie noi articole, le poți modifica sau șterge prin intermediul link-ului către postări pentru blog.</li>
                        <li>Termeni și Condiții: Editează termenii și condițiile după cum dorești, utilizând link-ul către această secțiune.</li>
                        <li>ursuri: Gestionează cursurile tale prin intermediul link-ului dedicat. Poți crea, modifica sau șterge cursuri în funcție de nevoile tale.</li>
                    </ul>
                </div>
            </div>
            <div >
                <button className="text-2xl font-semibold">Settings and Customization</button>
                <div className={clsx('w-full min-h-full p-4 mt-2 text-xl', isDarkTheme ? 'bg-gray-600' : 'bg-gray-50' )}>
                    <ul className="list-disc p-4 space-y-2">
                        <li>Setări aplicație: Personalizează aspectul aplicației tale prin modificarea setărilor disponibile în secțiunea respectivă.</li>
                        <li>Temă Dashboard: Folosind bara de sus, poți modifica tema dashboard-ului. Atenție, această acțiune va afecta doar partea de admin a aplicației</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}