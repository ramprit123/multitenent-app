import { FC } from "react";

interface NavItemProps {
  item: {
    label: string;
    href: string;
  };
  isActive: boolean;
}
export const NavItem: FC<NavItemProps> = ({ item, isActive }) => {
  return (
    <li key={item.href}>
      <a
        href={item.href}
        className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 
        ${
          isActive
            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
            : "text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </a>
    </li>
  );
};
