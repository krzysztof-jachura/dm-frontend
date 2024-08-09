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
      className={
        'bg-discord-normal hover:bg-discord-hover text-medium text-white' +
        (className ? ` ${className}` : '')
      }
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
