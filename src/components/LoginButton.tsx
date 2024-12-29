import { Button, cn, Image, Link } from '@nextui-org/react';
import React from 'react';

interface LoginButtonProps {
  className?: string;
  onPress?: () => void;
}

const LoginButton = ({ onPress, className }: LoginButtonProps) => {
  return (
    <Button
      startContent={
        <Image
          width={20}
          loading="lazy"
          className="sm:block hidden"
          src="discord-white-icon.webp"
        />
      }
      as={Link}
      onPress={onPress}
      className={cn('bg-discord-normal hover:bg-discord-hover text-medium text-white', className)}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
