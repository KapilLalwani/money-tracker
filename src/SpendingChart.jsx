import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#e05c5c', '#e07b2e', '#e0c02e', '#5cb85c', '#2e8be0', '#7b5ce0', '#999'];

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return null;
  }

  const formatTooltip = (value) => `$${value.toLocaleString()}`;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
          <XAxis dataKey="name" tick={{ fontSize: 13 }} />
          <YAxis tickFormatter={(v) => `$${v}`} tick={{ fontSize: 12 }} width={60} />
          <Tooltip formatter={formatTooltip} />
          <Bar dataKey="value" radius={[3, 3, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
