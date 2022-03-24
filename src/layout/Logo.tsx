import Image from 'next/image';

import logo from '@/public/assets/images/logo.png';

const Logo = () => {
  return (
    <div className="h-auto w-12">
      <Image src={logo} alt="fr0stf0x" />
    </div>
  );
};

export default Logo;
