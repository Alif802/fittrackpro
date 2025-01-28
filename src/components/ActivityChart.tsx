import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', minutes: 30 },
  { name: 'Tue', minutes: 45 },
  { name: 'Wed', minutes: 60 },
  { name: 'Thu', minutes: 40 },
  { name: 'Fri', minutes: 50 },
  { name: 'Sat', minutes: 75 },
  { name: 'Sun', minutes: 55 },
];

export const ActivityChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="minutes" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={{ fill: '#3B82F6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};