import React from 'react';

const DashboardDetailPage = ({ params, searchParams }: { params: { id: string }, searchParams: { code: string }, }) => {
  console.log("params", params.id);
  console.log("params", searchParams.code);
  return (
    <div>
      DashboardDetailPage
    </div>
  );
};

export default DashboardDetailPage;