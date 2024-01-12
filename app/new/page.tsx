'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const NavUser = () => {
  const router = useRouter();
  return <button className="btn btn-primary" onClick={() => router.push('/users')}></button>;
};

export default NavUser;
