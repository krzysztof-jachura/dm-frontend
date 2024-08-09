import React, { ReactElement } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Link } from 'react-router-dom';

interface RouteCardProps {
  to: string;
  title: string;
  description: string;
  icon: ReactElement;
  color?: string;
  isDisabled?: boolean;
}

const RouteCard = ({
  to,
  title,
  description,
  icon,
  color = 'text-primary-500',
  isDisabled = false,
}: RouteCardProps) => {
  return (
    <Card
      isDisabled={isDisabled}
      isPressable={!isDisabled}
      isHoverable={!isDisabled}
      as={Link}
      to={!isDisabled ? to : undefined}
      className="p-4 sm:p-5 select-none"
      classNames={{ header: 'p-0 mb-1 sm:mb-2', body: 'p-0' }}
      shadow="sm"
    >
      <div className="flex items-center">
        {icon}
        <div className="flex flex-col pl-4 sm:pl-5">
          <CardHeader className={`text-lg sm:text-xl ${color}`}>{title}</CardHeader>
          <CardBody className="text-sm sm:text-lg font-light text-neutral-400">
            {description}
          </CardBody>
        </div>
      </div>
    </Card>
  );
};

export default RouteCard;
