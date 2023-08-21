import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import { Invoices ,Table , CreateTenant,CreateUnit,CreateProperty, CreateAgent, Login } from '../pages'

export const router = createBrowserRouter([
   
    {
        path:'/',
        element: <Table />
    },

    {
        path:'/create/tenant',
        element: <CreateTenant />
    },
   
    {
        path:'/create/unit',
        element: <CreateUnit />
    },

    {
        path:'/create/property',
        element: <CreateProperty />
    },
    {
        path:'/create/agent',
        element: <CreateAgent />
    },
    {
        path:'/login',
        element: <Login />
    },
    // {
    //     path: '/create/property',
    //     element: (
    //       <PersistLogin>
    //         <RequireAuth allowedRoles={[3000, 5000]}>
    //           <CreateProperty />
    //         </RequireAuth>
    //       </PersistLogin>
    //     ),
    //   },
   
    // {
    //     path:'*',
    //     element:<PageNotFound/>
    // }
])


