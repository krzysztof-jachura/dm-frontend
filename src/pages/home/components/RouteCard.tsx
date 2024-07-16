import React, { ReactElement } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Link } from 'react-router-dom';

interface RouteCardProps {
  to: string;
  title: string;
  description: string;
  icon: ReactElement;
  color?: string;
}

const RouteCard = ({
  to,
  title,
  description,
  icon,
  color = 'text-primary-500',
}: RouteCardProps) => {
  return (
    <Card
      isPressable
      isHoverable
      as={Link}
      to={to}
      className="p-5 select-none"
      classNames={{ header: 'p-0 mb-2', body: 'p-0' }}
      shadow="sm"
    >
      <div className="flex items-center">
        {icon}
        <div className="flex flex-col pl-5">
          <CardHeader className={`text-xl ${color}`}>{title}</CardHeader>
          <CardBody className="text-medium sm:text-lg font-light text-neutral-400">
            {description}
          </CardBody>
        </div>
      </div>
    </Card>
  );
};

export default RouteCard;
