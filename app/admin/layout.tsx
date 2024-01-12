import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside>Admin Sidebar</aside>
      <div className="bg-slate-200 p-5 mr-5">{children}</div>
    </div>
  );
};

export default AdminLayout;
