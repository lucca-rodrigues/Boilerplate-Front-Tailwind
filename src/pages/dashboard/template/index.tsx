interface DashboardTemplateProps {
  user: {
    name?: string;
  } | null;
  mockData: {
    totalUsers: number;
    activeUsers: number;
    totalRevenue: string;
    monthlyGrowth: string;
  };
}

export function DashboardTemplate({ user, mockData }: DashboardTemplateProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo, {user?.name || 'Usuário'}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total de Usuários</h3>
          <p className="text-2xl font-semibold">{mockData.totalUsers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Usuários Ativos</h3>
          <p className="text-2xl font-semibold">{mockData.activeUsers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Receita Total</h3>
          <p className="text-2xl font-semibold">{mockData.totalRevenue}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Crescimento Mensal</h3>
          <p className="text-2xl font-semibold text-green-500">{mockData.monthlyGrowth}</p>
        </div>
      </div>
    </div>
  );
}
