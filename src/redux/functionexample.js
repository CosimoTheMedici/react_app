import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTenants } from './redux/tenantActions';
import { fetchProperties } from './redux/propertyActions'; // Import the fetchProperties action

const TenantsList = () => {
  const dispatch = useDispatch();
  const tenantsData = useSelector((state) => state.tenant.tenantsData);

  useEffect(() => {
    // Dispatch both fetchTenants and fetchProperties actions
    dispatch(fetchTenants());
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleSubmit = async (updatedData) => {
    // Perform the update operation here, e.g., using axios.put or similar

    // After successful update, fetch updated data
    await dispatch(fetchTenants());
    await dispatch(fetchProperties());
  };

  // Render the component using tenantsData from Redux store
  return (
    <div>
      {/* Render your tenant and properties data here */}
    </div>
  );
};

export default TenantsList;
