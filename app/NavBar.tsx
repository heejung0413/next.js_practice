'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
  const { status, data: session } = useSession();
  if (status === 'loading') {
    return null;
  }
  return (
    <div>
      <Link className="mr-5" href="/">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            sign out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  );
};

export default NavBar;
