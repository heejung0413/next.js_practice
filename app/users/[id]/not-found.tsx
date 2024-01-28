import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: number };
}

const UserNotFound = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>숫자 10보다 큰 사용자는 존재하지 않습니다. </div>;
};

export default UserNotFound;
