import xSvg from '@svg/x-icon';
import { Button } from '@nextui-org/react';
import React from 'react';

interface DeleteButtonProps {
  className?: string;
  onClick?: () => void;
}

export const DeleteButton = ({ onClick, className }: DeleteButtonProps) => {
  return (
    <Button
      className={'bg-transparent hover:bg-danger text-danger hover:text-white ' + className}
      isIconOnly
      size="md"
      color="danger"
      variant="bordered"
      onClick={onClick}
    >
      {xSvg}
    </Button>
  );
};
