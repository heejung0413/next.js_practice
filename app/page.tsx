import ProductCards from '@/components/ProductCards';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>
        안녕하세요 ,
        {session && (
          <div>
            <span>{session.user!.name}님 반갑습니다</span>
            <Link href="/api/auth/signout" className="ml-3">
              Sign out
            </Link>
          </div>
        )}
      </h1>
      <Link href="/users">users</Link>
      <ProductCards />
    </main>
  );
}
