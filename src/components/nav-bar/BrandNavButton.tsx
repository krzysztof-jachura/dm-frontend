import { cn, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import React from 'react';

const BrandNavButton = ({ className }: { className?: string }) => {
  return (
    <Link to="/" className={cn('flex flex-row flex-nowrap gap-2 items-center', className)}>
      <Image
        src="brand_logo.webp"
        radius="none"
        width={55}
        className="select-none mt-1"
        loading="eager"
        disableSkeleton
      />
      <p className="text-xl font-medium select-none text-nowrap">Project Valorous</p>
    </Link>
  );
};

export default BrandNavButton;
