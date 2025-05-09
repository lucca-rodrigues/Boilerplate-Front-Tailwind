import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package } from 'lucide-react';
import { useThemeStore } from '../../contexts/themeContext';
import { useState } from 'react';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { colors } = useThemeStore();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    {
      path: '/dashboard',
      label: 'Painel',
      icon: <LayoutDashboard className="mr-3 h-6 w-6" />,
    },
    {
      path: '/others',
      label: 'Outras páginas aqui',
      icon: <Package className="mr-3 h-6 w-6" />,
    },
  ];

  return (
    <aside
      className="w-64 min-h-screen border-r border-gray-200"
      style={{ background: colors.sidebar.background }}
    >
      <nav className="mt-5 px-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredItem === item.path;

          const getBackground = () => {
            if (isActive) return colors.sidebar.activeBackground;
            if (isHovered) return colors.sidebar.hoverBackground;
            return 'transparent';
          };

          const getTextColor = () => {
            if (isActive) return colors.sidebar.activeText;
            if (isHovered) return colors.sidebar.hoverText;
            return colors.sidebar.text;
          };

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
              className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-colors duration-200"
              style={{
                background: getBackground(),
                color: getTextColor(),
              }}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
