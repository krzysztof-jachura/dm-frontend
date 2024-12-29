import xSvg from '@svg/x-icon';
import { Button } from '@nextui-org/react';
import React from 'react';

interface DeleteButtonProps {
  className?: string;
  onPress?: () => void;
}

export const DeleteButton = ({ onPress, className }: DeleteButtonProps) => {
  return (
    <Button
      className={'bg-transparent hover:bg-danger text-danger hover:text-white ' + className}
      isIconOnly
      size="md"
      color="danger"
      variant="bordered"
      onPress={onPress}
    >
      {xSvg}
    </Button>
  );
};
