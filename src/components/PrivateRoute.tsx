"use client"

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/signin');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loader
  }

  if (!isAuthenticated) {
    return null; // Or a spinner/loader while redirecting
  }

  return <>{children}</>;
};

export default PrivateRoute;
