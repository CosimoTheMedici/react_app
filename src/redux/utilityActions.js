// redux/tenantActions.js
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {
  FETCH_UTILITY_SUCCESS,
  FETCH_UTILITY_FAILURE,
  FETCH_UTILITYARRAYDATA_SUCCESS,
  FETCH_UTILITYARRAYDATA_FAILURE,
} from './actionTypes';

export const fetchUtilitySuccess = (utilityData) => ({
  type: FETCH_UTILITY_SUCCESS,
  payload: utilityData,
});

export const fetchUtilityFailure = () => ({
  type: FETCH_UTILITY_FAILURE,
});


// export const fetchUtilityDataArraySuccess = (utilityData) => ({
//   type: FETCH_UTILITYARRAYDATA_SUCCESS,
//   payload: utilityData,
// });

export const fetchUtilityDataArrayFailure = () => ({
  type: FETCH_UTILITYARRAYDATA_FAILURE,
});

export const fetchUtilityData = (axiosPrivate) => async (dispatch) => {
  try {
    const response = await axiosPrivate.get(`/api/v1/utilities/byproperyid/${7}`);
    const { data, status } = response.data;
    if (response.status === 200) {
    //   const utilityDataByType = {
    //     1: [],
    //     2: [],
    //     3: [],
    //  };
      const processedData = data.map((utilityData, index) => ({
        ...utilityData,
        _id: index + 1,
      }));

      // const utilityDataByType = {
      //   1: [],
      //   2: [],
      //   3: [],
      // };

      // processedData.forEach(data => {
      //   const chargeType = data.charge_type;
      //   if (utilityDataByType.hasOwnProperty(chargeType)) {
      //     utilityDataByType[chargeType].push(data);
      //   }
      // });


      // dispatch(fetchUtilityDataArraySuccess(utilityDataByType));
      
      dispatch(fetchUtilitySuccess(processedData));
    } else {
      dispatch(fetchUtilityFailure());
      dispatch(fetchUtilityDataArrayFailure());
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchUtilityFailure());
  }
};
