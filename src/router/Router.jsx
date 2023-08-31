import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../hooks/RequireAuth'
import PersistLogin from '../hooks/PersistLogin'
import { Invoices ,Table , CreateTenant,CreateUnit,CreateProperty, CreateAgent, Login, AgentOwnerDashboard, ManageAgents,
         ManageProperty,
         ManageTenants,
         ManageUnits,
         ManageUtility,
         Dashboard,
         ManageConsumption,
      } from '../pages'




const Router = () => {
  return (

     <Routes>
        {/* public routes  */}
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/unauthorised' element={<Login />} />
        <Route path='/404' element={<Login />} />
        


        {/* protected */}
        
        <Route element={<PersistLogin />}>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />

        <Route element={<RequireAuth allowedRoles={[2000]}/>}>
        <Route path='/home/tenant' element={<Login />} />

        </Route>
        
        {/* protected agents */}
        <Route element={<RequireAuth allowedRoles={[3000,5000]}/>}>
        <Route path='/home/agent' element={<Login />} />


        </Route>

        <Route element={<RequireAuth allowedRoles={[4000,5000]}/>}>
        <Route path='/home/owner' element={<Login />} />
        <Route path='/manage/agent' element={<ManageAgents />} />

        <Route path='/create/unit' element={<CreateUnit />} />
        <Route path='/create/tenant' element={<CreateTenant />} />


        </Route>

        

        <Route element={<RequireAuth allowedRoles={[4000,3000,5000,2000]}/>}>
        <Route path='/home' element={<Dashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[5000]}/>}>
        <Route path='/home/agent_owner' element={< AgentOwnerDashboard/>} />
        <Route path='/manage/tenants' element={< ManageTenants/>} />
        <Route path='/manage/properties' element={< ManageProperty/>} />
        <Route path='/manage/units' element={< ManageUnits/>} />
        <Route path='/manage/utilities' element={< ManageUtility/>} />
        <Route path='/manage/consumption' element={< ManageConsumption/>} />

        </Route>
        <Route element={<RequireAuth allowedRoles={[6000]}/>}>
        <Route path='/home/superuser' element={< Login/>} />

        </Route>

        <Route element={<RequireAuth allowedRoles={[2003]}/>}>
        <Route path='/lounge' element={<Login />} />
        </Route>
        
        
        <Route path='/admin' element={<Login />} />
        </Route>

        {/* missing path */}
        {/* <Route path='*' element={<Login />} /> */}
     </Routes>
  )
}

export default Router