import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

interface SubSectionProps {
  name: string;
  route: string;
  classname: string;
  image: string;
}

const SubSection: React.FC<SubSectionProps> = ({ name, route, classname, image }) => {
  
  return (
    <Link href={route}>
      <Button type="button" className={`${classname} flex flex-col items-center`}>
        <div className="w-36 h-36 relative mb-2"> {/* fixed size container */}
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem' }} // cover ensures consistent sizing
          />
        </div>
        <span className="text-center">{name}</span>
      </Button>
    </Link>
  );
};

export default SubSection;
