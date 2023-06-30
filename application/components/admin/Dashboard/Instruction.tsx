import clsx from "clsx"

interface InstructionsProps {
    isDarkTheme: boolean
}


export const Instructions:React.FC<InstructionsProps> = ({isDarkTheme}) => {
    return (

        <div className={clsx('w-full')}>
            <div className="text-center">
                <h1 className="text-3xl font-semibold">Instructiuni</h1>
            </div>
            <div>
                <div>
                    <h2></h2>
                </div>
                <div></div>
            </div>
        </div>
    )
}   