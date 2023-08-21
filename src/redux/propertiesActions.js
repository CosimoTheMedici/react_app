// redux/tenantActions.js
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
} from './actionTypes';

export const fetchPropertiesSuccess = (propertiesData) => ({
  type: FETCH_PROPERTIES_SUCCESS,
  payload: propertiesData,
});

export const fetchPropertiesFailure = () => ({
  type: FETCH_PROPERTIES_FAILURE,
});

export const fetchProperties1 = () => async (dispatch) => {
  const axiosPrivate = useAxiosPrivate();
  try {
    const response = await axiosPrivate.get(`/api/v1/tenants/`);
    const { data, status } = response.data;

    if (status === 200) {
      const processedData = data.map((tenantData, index) => ({
        ...tenantData,
        _id: index + 1,
      }));

      dispatch(fetchPropertiesSuccess(processedData));
    } else {
      dispatch(fetchPropertiesFailure());
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchPropertiesFailure());
  }
};



export const fetchProperties = (axiosPrivate) => async (dispatch) => {
  

  try {
    const {data:response,status} = await axiosPrivate.get('/api/v1/properties/my_properties');
    const {data:getPropertyResponses} = response
    console.log("fetchPropertyResponse----me",getPropertyResponses)
  
    let data = [];
    let propertyArray = [];
    let x = 1;


    getPropertyResponses.forEach((getPropertyResponse) => {
  let {
        property_Name,
        property_agent,
        property_county,
        property_garbage_charge,
        property_id,
        property_images,
        property_kplc_charge,
        property_owner,
        property_town,
        property_units,
        property_water_charge
   
  } = getPropertyResponse;


  const propertyArraydata = {
         label:property_Name,
         value:property_id
  }
  propertyArray.push(propertyArraydata);
  x = x + 1;
});
    
    
    if (status === 201 || status === 200) {
      console.log("propertyArrayssss",propertyArray)
      dispatch(fetchPropertiesSuccess(propertyArray));


      
    } else {
      dispatch(fetchPropertiesFailure());
    }
  } catch (ex) {
    dispatch(fetchPropertiesFailure());
    console.log({ex})
  }
}