'use client';
import { useMenuListContext } from './MenuListContext';
const NavigationMenu = () => {
  const { menuList } = useMenuListContext();
  return (
    <div>
      {menuList.map((item, i) => (
        <p key={i}>
          {item.label} {item.url}
        </p>
      ))}
    </div>
  );
};

export default NavigationMenu;
