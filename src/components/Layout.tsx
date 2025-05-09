import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, LogOut } from 'lucide-react';
import { useAuthStore } from '@/contexts/authContext';
import { Sidebar } from './Sidebar';
import { useThemeStore } from '@/contexts/themeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: LayoutProps) {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();
  const { colors } = useThemeStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen" style={{ background: colors.background }}>
      <nav className="border-b border-gray-200" style={{ background: colors.sidebar.background }}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Package className="h-8 w-8" style={{ color: colors.primary }} />
                <span className="ml-2 text-xl font-bold" style={{ color: colors.primary }}>
                  App Admin
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4" style={{ color: colors.text }}>
                {user?.name || 'Usuário'}
              </span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md hover:bg-gray-100"
                style={{ color: colors.text }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
