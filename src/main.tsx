import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { useAuthStore } from "@/features/auth/store/auth.store";

import { isTokenExpired } from "@/features/auth/utils/token.utils";

import './index.css'

import { router } from './routes'
import { queryClient } from './api/queryClient'
import { Toaster } from "@/components/ui/sonner";

const authState = useAuthStore.getState();

if (
  authState.token &&
  isTokenExpired(authState.token)
) {
  authState.logout();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)