'use client';
import { useEffect, useState } from 'react';
import UsersTable from "@/components/Tables/UsersTable";
import { User } from "@/types/table";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import api from '@/utils/api';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '@/components/common/Modal';
import SearchBar from '@/components/Searchbar';
import 'react-toastify/dist/ReactToastify.css';

const CustomersPage = () => {
  const [tableData, setTableData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [agents, setAgents] = useState<{ id: number, first_name: string, last_name: string }[]>([]);

  const [newCustomer, setNewCustomer] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    date_of_birth: '',
    bvn: '',
    nin: '',
    agent_id: ''
  });

  const fetchCustomers = async (page: number, search: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/admin/users?search=${search}&page=${page}`);
      setTableData(response.data.data);
      setTotalPages(response.data.last_page);
      setLoading(false);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch data');
      setLoading(false);
    }
  };

  const fetchAgents = async () => {
    try {
      const response = await api.get('/admin/agents');
      setAgents(response.data.data);
    } catch (error: any) {
      toast.error('Failed to fetch agents');
    }
  };

  useEffect(() => {
    fetchCustomers(currentPage, searchTerm);
    fetchAgents();
  }, [currentPage, searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCustomer(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await api.post('/admin/users', newCustomer);
      setTableData(prevData => [...prevData, response.data]);
      setIsModalOpen(false);
      setNewCustomer({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        date_of_birth: '',
        bvn: '',
        nin: '',
        agent_id: ''
      });
      toast.success('Customer created successfully!');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to create customer');
      toast.error(error.response?.data?.message || 'Failed to create customer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/admin/users/${id}`);
      toast.success('Customer deleted successfully!');
      setTableData((prevData) => prevData.filter(customer => customer.id !== id));
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to delete customer');
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-4 mt-2">
          <SearchBar onSearch={handleSearch} />
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="mt-1 md:mt-0 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">
            Add New Customer
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <UsersTable data={tableData} onDelete={handleDelete} />
        )}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-blue-700 text-white' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Customer">
        <form onSubmit={handleCreateCustomer} className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={newCustomer.first_name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={newCustomer.last_name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={newCustomer.username}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={newCustomer.email}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={newCustomer.phone}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                value={newCustomer.date_of_birth}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="bvn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BVN</label>
              <input
                type="text"
                name="bvn"
                id="bvn"
                value={newCustomer.bvn}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="nin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIN</label>
              <input
                type="text"
                name="nin"
                id="nin"
                value={newCustomer.nin}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={newCustomer.password}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="agent_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign Agent (Optional)</label>
              <select
                name="agent_id"
                id="agent_id"
                value={newCustomer.agent_id}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select Agent</option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                   {agent.id} - {agent.last_name} {agent.first_name} 
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {isSubmitting ? <ClipLoader size={20} color={"#fff"} loading={isSubmitting} /> : (
                <>
                  <svg className="mr-1 ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                  Add new customer
                </>
              )}
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </DefaultLayout>
  );
};

export default CustomersPage;
