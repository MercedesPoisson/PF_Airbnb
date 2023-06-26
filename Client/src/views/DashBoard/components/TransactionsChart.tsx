import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Properties", quantity: 100, active: 100 },
    { name: "Users", quantity: 200, active: 180},
    { name: "Rents", quantity: 20, active: 20 },
  ];

const TransactionChart = () => {
    return(
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Stadistics</strong>
            <div className="w-full mt-3 flex-1 text-xl">
                 <ResponsiveContainer width="100%" height={300}>
          <BarChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -10,
            bottom: 0
          }}>
            <CartesianGrid strokeDasharray="3 3"vertical={false}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#7DB9B6" />
            <Bar dataKey="active" fill="#E96479" />
          </BarChart>
        </ResponsiveContainer>
            </div>
       
      </div>
    )
}
export default TransactionChart;