import { useAuthStore } from '@/contexts/authContext';

export function useDashboard() {
  const user = useAuthStore((state) => state.user);

  const mockData = {
    totalUsers: 1234,
    activeUsers: 789,
    totalRevenue: 'R$ 50.000,00',
    monthlyGrowth: '15%',
  };

  return {
    user,
    mockData,
  };
}
