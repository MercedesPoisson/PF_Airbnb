import { HiHome, HiUsers, HiShoppingCart } from "react-icons/hi";

const DashBoardStats = () => {
    return(
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-primero">
                <HiHome className="text 2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Registered Properties</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">QUANTITY</strong>
                        <span className="text-sm text-argentina pl-2">+1</span>
                    </div>
                    </div>
                </BoxWrapper>

            <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-segundo">
                <HiUsers className="text 2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Registered Users</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">QUANTITY</strong>
                        <span className="text-sm text-argentina pl-2">+1</span>
                    </div>
                    </div>
            </BoxWrapper>

            <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-tercero">
                <HiShoppingCart className="text 2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Registered Rent</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">QUANTITY</strong>
                        <span className="text-sm text-argentina pl-2">+1</span>
                    </div>
                    </div>
                </BoxWrapper>          
            
        </div>
    )
}
export default DashBoardStats;

function BoxWrapper({children}) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}