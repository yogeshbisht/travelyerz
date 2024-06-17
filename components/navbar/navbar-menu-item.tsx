"use client";

interface NavbarMenuItemProps {
  onClick: () => void;
  label: string;
}

const NavbarMenuItem = ({ onClick, label }: NavbarMenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-brand hover:text-white transition cursor-pointer"
    >
      {label}
    </div>
  );
};

export default NavbarMenuItem;
