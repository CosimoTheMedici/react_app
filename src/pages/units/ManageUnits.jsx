import React, { useState ,useEffect } from 'react';
import { PageTitleBreadCrumbs, mainLayoutAuth } from '../../layout';
import { Modal, TableComponent, TableComponent2, TextArea, TextArea1 } from '../../customComponents';
import { items, fields, unit_type_array } from '../../utils/arrayData';
import { unitDetailsInitialState } from '../../utils/initialStates';
import { Input } from '../../customComponents/input/customInputs';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { displayUnitsfields } from '../../utils/helpers';
import { Select, SelectCharges } from '../../customComponents/select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../../redux/propertiesActions';
import { fetchUtilityData } from '../../redux/utilityActions';
import { errorNotification, successNotification } from '../../utils/notification';


const ManageUnits = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [unitData, setUnitData] = useState([])
  const [tableDataRefresh, setTableDataRefresh] = useState(false)
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
    const propertyArray = useSelector((state) => state.utilityData.utilityData);
    const utilityArray = useSelector((state) => state.utilityArray.utilityArrayData);
    useEffect(() => {
      // Dispatch both fetchTenants and fetchProperties actions
      dispatch(fetchProperties(axiosPrivate));
      dispatch(fetchUtilityData(axiosPrivate));
    }, [dispatch]);
   


  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    
    fetchUnitsList()
    
  }, [tableDataRefresh])
  useEffect(() => {
    
    fetchUnitsList()
  
  }, [])


  async function fetchUnitsList() {

    let id=1
    try {
      const { data: responses, status } = await axiosPrivate.get(`/api/v1/units/myassignedunits/${id}`);
     // const fetchUnitsResponses = await axiosPrivate.get(`/api/v1/units/myassignedunits/${id}`);
      const { data:unitsdatas } =responses
     // const { data:unitsdatas } =fetchUnitsResponses


     
  //     let data = [];
  //        let x = 1   

  //       unitsdatas.forEach((unitsdata) => {
  //         let charge = unitsdata.charges//.trim()//.replace(" ","?")
  //         let chargeType1
  //         let chargeType2
  //         let chargeType3

  //         if(charge === null || charge === undefined || charge === ""){
  //           chargeType1={charge_per_unit:"n/a"}
  //           chargeType2={charge_per_unit:"n/a"}
  //           chargeType3={charge_per_unit:"n/a"}

  //         }else {
  //         let chargeArr = []
  //          const stringArray = charge.split(",{");
  //          chargeArr.push(JSON.parse("{"+stringArray[1]))
  //          chargeArr.push(JSON.parse("{"+stringArray[2]))
  //          chargeArr.push(JSON.parse(stringArray[0]))
  //          //str1 = stringArray[1] + str1 + str2
  //          console.log(("chargeArr",chargeArr))
  //           chargeType1 = chargeArr.find(charge => charge.charge_type === 1);
  //           chargeType2 = chargeArr.find(charge => charge.charge_type === 2);
  //           chargeType3 = chargeArr.find(charge => charge.charge_type === 3);
  //          //console.log(("chargeType3",chargeType3))
  //         }


  //   let {
  //               _id=x,
  //               chargeType1:waterChargeData,
  //               chargeType2:kplcChargeData,
  //               chargeType3:garbageChargeData,
  //               property_Name,
  //               property_id,
  //               unit_rent_Amount,
  //               unit_water_charge,
  //               unit_garbage_charge,
  //               unit_kplc_charge,
  //               unit_property_id,
  //               unit_name,
  //               unit_id,
  //               unit_description,
  //               unit_occupancy,
  //               unit_status,
  //               unit_type,
               
     
  //   } = unitsdata;

  //   const datas = {
  //       _id,
  //       unit_rent_Amount,
  //       property_Name,
  //       unit_description,
  //       unit_garbage_charge:chargeType3.charge_per_unit,
  //       unit_id,
  //       unit_kplc_charge:chargeType2.charge_per_unit,
  //       unit_name,
  //       unit_occupancy,
  //       unit_property_id,
  //       unit_status,
  //       unit_type,
  //       unit_water_charge:chargeType1.charge_per_unit,

  //   };
  //   data.push(datas);
  //   x = x + 1;
  // });
      

    

      if (status === 200) {
       
        setUnitData(unitsdatas);
        console.log("propertiesData",unitsdatas[0].charges)

       
      } else {
        errorNotification("Unable to units data ");
      }
    } catch (ex) {
      //errorNotification("Unable to fetch Partners--");
      console.log({ ex });
    }
  }




  return (
    <>
    <PageTitleBreadCrumbs title="Manage Units"/>

    <div class="main-container">
    <div class="row gutters">
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-eye1"></i>
								</div>
								<div class="sale-num">
									<h3>9500</h3>
									<p>Visitors</p>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
						
							</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-shopping-bag1"></i>
								</div>
								<div class="sale-num">
									<h3>7500</h3>
									<p>Sales</p>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-activity"></i>
								</div>
								<div class="sale-num">
									<h3>3500</h3>
									<p>Expenses</p>
								</div>
							</div>
						</div>
          
		</div>

    <div class="row gutters">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="table-container">
      <div className="t-header" style={{color: "green"}}>Fixed Header</div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <TableModal stateChange= {tableDataRefresh} stateChanger={setTableDataRefresh} />
          </div>
              <TableComponent
                fields={displayUnitsfields}
                items={unitData}
                scopedSlots={{
                  ACTION: (item, index) => (
                    <div class="task-block">
                    <ul class="task-actions">
																	
                                <li class="dropdown">
                                  <a href="#" id="task-actions" data-toggle="dropdown" aria-haspopup="true">
                                    <i class="icon-more_vert"></i>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
                                    <div className="header-profile-actions">
                               <a href="user-profile.html">
                                 <i className="icon-user1"></i> My Profile
                               </a>
                               <a href="account-settings.html">
                                 <i className="icon-settings1"></i> Account Settings
                               </a>
                               <a href="login.html">
                                 <i className="icon-log-out1"></i> Sign Out
                               </a>
                             </div>
																		</div>
																	</li>
																</ul>
                                </div>
                  ),
                }}
              />
              </div>
              </div>
              </div>
              </div>
              </>
            
  );
};

export default mainLayoutAuth(ManageUnits);




									


const TableModal = ({stateChanger ,stateChange,}) => {
  const [unitDetails, setUnitDetails] = useState(unitDetailsInitialState);
    const{auth}= useAuth()
    const axiosPrivate = useAxiosPrivate();
    const dispatch = useDispatch();
    const propertyArray = useSelector((state) => state.properties.propertiesData);
    const utilityArray = useSelector((state) => state.utilityArray.utilityArrayData);
    const [waterData,setWaterData]=useState([])
    const [kPLCData,setKPLCData]=useState([])
    const [garbageData,setGarbageData]=useState([])
    
  

    useEffect(() => {
      //fetchUtilityData
      //fetchChargesPropertiesList()
      fetchUtilitiesList()
      // Dispatch both fetchTenants and fetchProperties actions
      dispatch(fetchProperties(axiosPrivate));
      //dispatch(fetchUtilityData(axiosPrivate));
      
    }, [dispatch]);
    // async function fetchChargesPropertiesList() {
    //   try {
    //     const { data: fetchPropertiesResponses, status } = await axiosInstance.get(`/api/v1/utilities/agentCharges`);
    //     const { data:propertydatas } =fetchPropertiesResponses
    //     console.log("fetchPropertiesResponses---charges->|",fetchPropertiesResponses)
    //     let data = [];
    //     let waterChargeArray = [];
    //     let kplcChargeArray = [];
    //     let garbageChargeArray = [];
    //     let x = 1;

        


    //     propertydatas.forEach((propertydata) => {
    //   let {
    //     charge_created_by,
    //     charge_description,
    //     charge_id,
    //     charge_name,
    //     charge_per_unit,
    //     charge_property_id,
    //     charge_status,
    //     charge_type,
    //     charge_visibility,
       
    //   } = propertydata;
 
    //   const datas = {
    //           _id:x,
    //           charge_created_by,
    //           charge_description,
    //           charge_id,
    //           charge_name,
    //           charge_per_unit,
    //           charge_property_id,
    //           charge_status,
    //           charge_type,
    //           charge_visibility,
  
    //   };
    //   const chargeArraydata = {
    //     label:charge_name,
    //     value:charge_id
    //      }
    //   if(charge_type===1){
    //     waterChargeArray.push(chargeArraydata);
    //   }
    //   if(charge_type===2){
    //     kplcChargeArray.push(chargeArraydata);
    //   }
    //   if(charge_type===3){
    //     garbageChargeArray.push(chargeArraydata);
    //   }
      
    //   data.push(datas);
      
    //   x = x + 1;
    // });
        
  
      
  
    //     if (status === 200) {
    //        setWaterData(waterChargeArray)
    //        setKPLCData(kplcChargeArray)
    //        setGarbageData(garbageChargeArray)
        

         
    //     } else {
    //       //errorNotification("Unable to fetch Partners");
    //     }
    //   } catch (ex) {
    //     //errorNotification("Unable to fetch Partners--");
    //     console.log({ ex });
    //   }
    // }

 

    async function fetchUtilitiesList() {

      let id=1
      try {
        const response = await axiosPrivate.get(`/api/v1/utilities/byproperyid/${id}`);
        const { data:resData, status } = response.data;
         if (response.status === 200) {
          
    
          const utilityTypes = {
            1: [],
            2: [],
            3: [],
          };
          
          
          resData.forEach((datas) => {
            
            if (datas.charge_type==1) {
              utilityTypes[1].push(datas);
            }
            if (datas.charge_type==2) {
              utilityTypes[2].push(datas);
            }
            if (datas.charge_type==3) {
              utilityTypes[3].push(datas);
            }
          });
    
          setWaterData(utilityTypes[1])
          setKPLCData(utilityTypes[2])
          setGarbageData(utilityTypes[3])
         } else {
           console.log(response.status);
  
         }
        
      } catch (ex) {
        //errorNotification("Unable to fetch Partners--");
        console.log({ ex });
      }
    }


    const handleSubmit =  async (event) => {
      event.preventDefault()
    
      
      const {
        unit_name,
        unit_property_id,
        unit_rent_Amount,
        unit_water_charge,
        unit_kplc_charge,
        unit_garbage_charge,
        unit_description,
 
        unit_type,
      } = unitDetails;
  
      const check = 
      [ 
        unit_name,
        unit_property_id,
        unit_rent_Amount,
        unit_water_charge,
        unit_kplc_charge,
        unit_garbage_charge,
        unit_description,
        unit_type,].every(value => value);
        if (check===true) {

          let payload = {
            'unit_name':unitDetails.unit_name,
            'unit_property_id':unitDetails.unit_property_id,
            'unit_rent_Amount':unitDetails.unit_rent_Amount,
            'unit_water_charge':unitDetails.unit_water_charge,
            'unit_kplc_charge':unitDetails.unit_kplc_charge,
            'unit_garbage_charge':unitDetails.unit_garbage_charge,
            'unit_description':unitDetails.unit_description,
            'unit_type':unitDetails.unit_type,
            'unit_createdBy':auth.user

          }      
    
          try {
            const createUnitsResponse = await axiosPrivate.post('api/v1/units/create',payload);
            const { status } = createUnitsResponse; 
            
          
            if (status === 201) {
              successNotification("Unit added successful")
              setUnitDetails(unitDetailsInitialState)
            } else {
              errorNotification("something went wrong")
            }
          } catch (ex) {
            console.log({ex})
            errorNotification("Error:something went wrong")

          }
        } else if (check === false) {
        }
    }

    const handleChange = ({ currentTarget: input }) => {
      let name = input.id;
      let value = input.value;

      setUnitDetails({
        ...unitDetails,
        [name]: value,
      });
    };
	return (
		<>
		<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
		<div class="custom-actions-btns mb-5">
			{/* <a href="#" class="btn btn-primary">
				<i class="icon-export"></i> Export
			</a>
			<a href="#" class="btn btn-dark">
				<i class="icon-printer"></i> Print
			</a> */}
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#customModalTwo">
			<i class="icon-person_add" style={{fontSize:'18px'}}></i> Create Unit
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										<Modal 
										modalheader={
											<>
											<h5 class="modal-title" id="customModalTwoLabel">Create Unit</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</>
										}
										modalbody={
                                           <form onSubmit={handleSubmit}>
										
										
									
									
										
                    
											<Select
                                                labelText="First Name"
                                                defaultSelectText="Select Property Name"
                                                //inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_property_id"
                                                id="unit_property_id"
                                                arrayData={propertyArray}

                                            />
										
                    <Input
                                                labelText="Unit Name"
                                                placeholder="Unit Name"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                rows={10}
                                                name="unit_name"
                                                id="unit_name"

                                            />
                    
										
                    <Input
                                                labelText="Rent Amount"
                                                placeholder="Rent Amount"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                rows={10}
                                                name="unit_rent_Amount"
                                                id="unit_rent_Amount"

                                            />
										
                    <SelectCharges
                                                labelText={"Water Charge"}
                                                defaultSelectText="Select Water Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_water_charge"
                                                id="unit_water_charge"
                                                arrayData={waterData}

                                            />
                                            
										
                    <SelectCharges
                                                labelText="Kplc Charge"
                                                defaultSelectText="Select Kplc Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_kplc_charge"
                                                id="unit_kplc_charge"
                                                arrayData={kPLCData}

                                            />
										
                    <SelectCharges
                                                labelText="Garbage Charge"
                                                defaultSelectText="Select Garbage Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_garbage_charge"
                                                id="unit_garbage_charge"
                                                arrayData={garbageData}

                                            />
										
                    
                    
                    <Select
                                                labelText="Unit Type"
                                                defaultSelectText="Select Unit Type"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_type"
                                                id="unit_type"
                                                arrayData={unit_type_array}

                                            />

                    <TextArea1
                                                labelText="Unit Description"
                                                placeholder="Unit Description"
                                                inputType="textarea"
                                                onChange={handleChange}
                                                //value=
                                                rows={5}
                                                name="unit_description"
                                                id="unit_description"

                                            />
                    
										
										

										<div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" > <i class="icon-export"></i>  Close</button>
                                        <button type="submit" class="btn btn-primary" onClick={handleSubmit}  data-dismiss="modal" > Save Data </button>
												</div>

                 
                   
									
                  </form>
										}
										
										/>
									</div>

		</>

	)
  }
