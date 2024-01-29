import React, { Suspense } from 'react';
import UserTables from './UserTables';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <Link href="/users/new" className="btn btn-primary">
        Go to New User Page
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTables sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
