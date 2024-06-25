'use client';
import { useEffect, useState } from 'react';
import TableThree from "@/components/Tables/TableThree";
import { TableItem } from "@/types/table";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import api from '@/utils/api';
import Loader from '@/components/common/Loader/index';
import Modal from '@/components/common/Modal';

const AgentsPage = () => {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newAgent, setNewAgent] = useState({
    name: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
  });

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get('/admin/agents');
        setTableData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to fetch data');
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAgent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateAgent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/admin/agents', newAgent);
      setTableData(prevData => [...prevData, response.data]);
      setIsModalOpen(false);
      setNewAgent({
        name: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
      });
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to create agent');
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-blue-500 text-white py-2 px-4 rounded">
            Create Agent
          </button>
        </div>
        <TableThree data={tableData} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Agent">
        <form onSubmit={handleCreateAgent}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newAgent.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={newAgent.email}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="first_name"
              value={newAgent.first_name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={newAgent.last_name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={newAgent.phone}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded">
              Create
            </button>
          </div>
        </form>
      </Modal>
    </DefaultLayout>
  );
};

export default AgentsPage;
