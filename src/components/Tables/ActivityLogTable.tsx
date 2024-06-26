'use client';
import React, { useEffect, useState } from 'react';
import { LogItem } from '@/types/table';
import api from '@/utils/api';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

interface ActivityLogTableProps {
  initialData: LogItem[];
  totalPages: number;
}

const ActivityLogTable: React.FC<ActivityLogTableProps> = ({ initialData, totalPages }) => {
  const [logs, setLogs] = useState<LogItem[]>(initialData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLogs = async (page: number) => {
    setLoading(true);
    try {
      const response = await api.get(`/admin/activity-logs?page=${page}`);
      setLogs(response.data.data);
      setCurrentPage(page);
      setLoading(false);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to fetch activity logs');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 rounded-sm border border-stroke bg-white  dark:border-strokedark dark:bg-boxdark">
      <div className="max-w-full overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <div className="timeline">
            {logs.map((log) => (
              <div key={log.id} className="timeline-item">
                <div className="timeline-time">
                  {new Date(log.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    {/* icons based on the action name; customize as needed */}
                    {log.name === 'created' && <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" fill=""/>
                      <path d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z" fill=""/>
                    </svg>}
                    {/*  more conditions for different actions */}
                  </div>
                  <div className="timeline-details">
                    <div className="timeline-title uppercase">{log.name}</div>
                    <div className="timeline-description">{JSON.parse(log.data).details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => fetchLogs(index + 1)}
            className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-blue-700 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );

};

export default ActivityLogTable;
