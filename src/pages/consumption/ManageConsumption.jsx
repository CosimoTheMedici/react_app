import React, { useState ,useEffect } from 'react';
import { PageTitleBreadCrumbs, mainLayoutAuth } from '../../layout';
import { Modal, Select, TableComponent, TableComponent2 } from '../../customComponents';
import { items, fields, charge_type_ArrayData } from '../../utils/arrayData';
import { tenantDetailsInitialState, utilityConsumptionDetailsInitialState } from '../../utils/initialStates';
import { Input } from '../../customComponents/input/customInputs';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { displayPropertyfields, displayTenantfields } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../../redux/propertiesActions';
import { errorNotification, warningNotification } from '../../utils/notification';


const ManageConsumption = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [tenantsData, setTenantsData] = useState([])
  const [tableDataRefresh, setTableDataRefresh] = useState(false)
  const axiosPrivate = useAxiosPrivate();



  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    
    fetchTenantsList()
    
  }, [tableDataRefresh])
  useEffect(() => {
    
    fetchTenantsList()
    
  }, [])
  

  async function fetchTenantsList() {
    try {
      const { data: fetchTenantsResponses, status } = await axiosPrivate.get(`/api/v1/tenants/`);
      console.log("fetchTenantsResponses",fetchTenantsResponses)
      const { data:agentsDatas } =fetchTenantsResponses
      
      let data = [];
      let x = 1;

      
      agentsDatas.forEach((agentsData) => {
    let {
        IDNumber,
        createdBy,
        email,
        emergencyNumber,
        emergencyPerson,
        emergencyPersonRelation,
        firstName,
        lastName,
        phoneNumber,
        propertyID,
        secondName,
        unitName,
        unit_name,

        
     
    } = agentsData;

    const datas = {
        _id:x,
        IDNumber,
        createdBy,
        email,
        emergencyNumber,
        emergencyPerson,
        emergencyPersonRelation,
        firstName,
        lastName,
        phoneNumber,
        propertyID,
        secondName,
        unitName,
        unit_name,
        //agent_status:agent_status===1?'active':'inactive',

    };
    data.push(datas);
    x = x + 1;
  });
      

    

      if (status === 200) {
        //setPropertiesData(propertydatas);
        console.log("tenants",data)
        setTenantsData(data);

       
      } else {
        //errorNotification("Unable to fetch Partners");
      }
    } catch (ex) {
      //errorNotification("Unable to fetch Partners--");
      console.log({ ex });
    }
  }


  return (
    <>
    <PageTitleBreadCrumbs title="Manage Tenants"/>

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
                fields={displayTenantfields}
                items={tenantsData}
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

export default mainLayoutAuth(ManageConsumption);




									


const TableModal = ({stateChanger ,stateChange}) => {
    const [tenantDetails, setTenantDetails] = useState({tenantDetailsInitialState});
    const [utilityconsumptionDetails,setUtilityconsumptionDetails]=useState(utilityConsumptionDetailsInitialState)
    const{auth}= useAuth()
    const axiosPrivate = useAxiosPrivate();
    const [unitsArrayData,setUnitsArrayData]=useState([])
    const dispatch = useDispatch();
    const propertyData = useSelector((state) => state.properties.propertiesData);


    useEffect(() => {
      // Dispatch both fetchTenants and fetchProperties actions
      dispatch(fetchProperties(axiosPrivate));
    }, [dispatch]);

    const fetchUnits = async( { currentTarget: input}) => {
      let value = input.value;
  

  
      try {
        const {data:response,status} = await axiosPrivate.get(`api/v1/units/vacantUnitsproperyID/${value}`);
        const { data:getUnitResponses } = response;
        console.log("getUnitResponses---->",getUnitResponses)
  
  
        
  
        let data = [];
        let unitArray = [];
        let x = 1;
  
  
        getUnitResponses.forEach((getUnitResponse) => {
      let {
      
        unit_id,
        unit_name,
     
       
      } = getUnitResponse;
  
    
      const unitArraydata = {
             label:unit_name,
             value:unit_id
      }
      unitArray.push(unitArraydata);
      x = x + 1;
   });
        
        if (status === 201 || status === 200) {
          setUnitsArrayData(unitArray)
  
          
        } else {
          errorNotification("Tenant not created successfully");
        }
      } catch (ex) {
        warningNotification("Error creating Tenant ");
        console.log({ex})
      }
    }

    const handleSubmit = async(event) => {
      event.preventDefault()
      console.log("tenantDetails",tenantDetails)
      console.log("auth",auth)
  
  
      const {
        firstName,
        secondName,
        lastName,
        IDNumber,
        email,
        phoneNumber,
        propertyID,
        unitName,
        emergencyNumber,
        emergencyPerson,
        emergencyPersonRelation,
      } = tenantDetails;
  
      const check = 
      [ 
        firstName,
        secondName,
        lastName,
        IDNumber,
        email,
        phoneNumber,
        propertyID,
        unitName,
        emergencyNumber,
        emergencyPerson,
        emergencyPersonRelation].every(value => value);
        console.log("check",check)
      if (check===true) {
  
        const payload = {
          firstName,
          secondName,
          lastName,
          IDNumber,
          email,
          phoneNumber,
          propertyID,
          unitName,
          emergencyNumber,
          emergencyPerson,
          emergencyPersonRelation,
          createdBy:auth.user
        };
        console.log("payload",payload)
      
            
  
        try {
          const createPropertyResponse = await axiosPrivate.post('api/v1/tenants/create',payload);
          console.log("createPropertyResponse",createPropertyResponse)
          const { status } = createPropertyResponse; 
          
          if (status === 201) {
            console.log("added")
            successNotification("Tenant has been added")
  
            
          } else {
            errorNotification("Tenant not created successfully");
          }
        } catch (ex) {
          warningNotification("Error creating Tenant ");
          console.log({ex})
        }
      } else if (check === false) {
        errorNotification("Some fields are not complete ");
      }
  
  
      
    }

      const handleChange = ({ currentTarget: input}) => {
   
        let name = input.id;
        let value = input.value;
    
        setTenantDetails({
          ...tenantDetails,
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
			<i class="icon-droplet" style={{fontSize:'18px'}}></i> Record Consumption
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										<Modal 
										modalheader={
											<>
											<h5 class="modal-title" id="customModalTwoLabel">Add Consumption</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</>
										}
										modalbody={
                                           <form onSubmit={handleSubmit}>
										
										
                    <Select
                                                arrayData={propertyData}
                                                defaultSelectText="Select Propety Name"
                                                onChange={(e) => {
                                                      handleChange(e);
                                                      fetchUnits(e);
                                                    }}
                                                name="reading_propertyID"
                                                id="reading_propertyID"
                                                labelText="Propety Name"
                                                value={utilityconsumptionDetails.charge_property_id}
                                  

                                            />
                    {/* <Select
                                                labelText="Property Name"
                                                defaultSelectText="Select Property Name"
                                                inputType="test"
                                                onChange={(e) => {
                                                  handleChange(e);
                                                  fetchUnits(e);
                                                }}
                                                value={tenantDetails.propertyID}
                                                name="propertyID"
                                                id="propertyID"
                                                arrayData={propertyData}

                                            /> */}
									
                    {/* <Select
                                                labelText="Unit Name"
                                                defaultSelectText="Select Unit Name"
                                                inputType="test"
                                                onChange={handleChange}
                                                value={tenantDetails.unitName}
                                                name="unitName"
                                                id="unitName"
                                                arrayData={unitsArrayData}

                                            /> */}
									
         
                    
							

                    <Select
                                                 arrayData={unitsArrayData}
                                                 defaultSelectText="Select Unit Name"
                                                 onChange={handleChange}              
                                                 name="reading_unitID"
                                                 id="reading_unitID"
                                                 labelText="Unit Name"
                                                 value={utilityconsumptionDetails.reading_unitID}

                                            />
                    <Select
                                                arrayData={charge_type_ArrayData}
                                                defaultSelectText="Select Utility"
                                                onChange={handleChange}
                                                name="reading_utilityTypeID"
                                                id="reading_utilityTypeID"
                                                labelText="Utility Type"
                                                value={utilityconsumptionDetails.charge_property_id}

                                            />
							
                    <Input
                                                onChange={handleChange}  
                                                name ="reading_nowReading"  
                                                id= "reading_nowReading"
                                                labelText="Utility Reading"  
                                                InputType="number"    
                                                placeholder="charge name"
                                                value={utilityconsumptionDetails.charge_name}

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
