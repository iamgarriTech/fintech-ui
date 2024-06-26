'use client';
import { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ActivityLogTable from '@/components/Tables/ActivityLogTable';
import { LogItem } from '@/types/table';
import api from '@/utils/api';
import Loader from '@/components/common/Loader';

const ActivityLogsPage = () => {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const response = await api.get('/admin/activity-logs');
      setLogs(response.data.data);
      setTotalPages(response.data.last_page);
      setLoading(false);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch activity logs');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold mb-4">Activity Logs</h1>
        <ActivityLogTable initialData={logs} totalPages={totalPages} />
      </div>
    </DefaultLayout>
  );
};

export default ActivityLogsPage;
