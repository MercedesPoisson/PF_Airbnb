
import DashBoardStats from "./components/DashboardStats";
import TransactionChart from "./components/TransactionsChart";
import PropertiesDash from "./components/PropertiesDash";

const DashBoard = () => {
    return(
        <div className="flex flex-col gap-4">
            <DashBoardStats />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <PropertiesDash />
            </div>
            
            
        </div>
    )
}
export default DashBoard;