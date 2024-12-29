import { Link, useMatch } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import React from 'react';

interface NavButtonProps {
  route: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  endPath?: string;
}

const NavButton = ({ route, icon, children, disabled, endIcon, endPath }: NavButtonProps) => {
  const match = useMatch(route);

  return (
    <Button
      className={`justify-start py-6 pr-2 text-md ${!!match ? '' : 'bg-opacity-0'}`}
      radius="sm"
      fullWidth
      disableRipple
      isDisabled={disabled}
      startContent={icon}
      endContent={
        endIcon && endPath ? (
          <Link
            to={endPath}
            className="transition-colors-opacity subpixel-antialiased flex items-center p-1 border-opacity-60 rounded-full border-2 h-7 w-7 text-small opacity-50 hover:opacity-90 bg-opacity-0 text-default-foreground border-default-foreground hover:bg-default-foreground hover:text-black"
          >
            {endIcon}
          </Link>
        ) : null
      }
      as={Link}
      to={route}
    >
      <div className="flex-grow">{children}</div>
    </Button>
  );
};

export default NavButton;
