import { Button, Link } from '@nextui-org/react';
import React from 'react';

interface LoginButtonProps {
  className?: string;
  onClick?: () => void;
}

const LoginButton = ({ onClick, className }: LoginButtonProps) => {
  return (
    <Button
      startContent={
        <img
          className="w-5 sm:block hidden"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
        />
      }
      as={Link}
      onClick={onClick}
      className={'bg-[#5865F2] hover:bg-[#4C51BF] text-medium' + (className ? ` ${className}` : '')}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
