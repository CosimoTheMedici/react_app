// redux/tenantActions.js
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {
  FETCH_TENANTS_SUCCESS,
  FETCH_TENANTS_FAILURE,
} from './actionTypes';

export const fetchTenantsSuccess = (tenantsData) => ({
  type: FETCH_TENANTS_SUCCESS,
  payload: tenantsData,
});

export const fetchTenantsFailure = () => ({
  type: FETCH_TENANTS_FAILURE,
});

export const fetchTenants = () => async (dispatch) => {
  try {
    const response = await axiosPrivate.get(`/api/v1/tenants/`);
    const { data, status } = response.data;

    if (status === 200) {
      const processedData = data.map((tenantData, index) => ({
        ...tenantData,
        _id: index + 1,
      }));

      dispatch(fetchTenantsSuccess(processedData));
    } else {
      dispatch(fetchTenantsFailure());
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchTenantsFailure());
  }
};
