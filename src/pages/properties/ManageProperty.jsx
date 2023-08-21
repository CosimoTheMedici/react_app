import React, { useState ,useEffect } from 'react';
import { PageTitleBreadCrumbs, mainLayoutAuth } from '../../layout';
import { Modal, TableComponent, TableComponent2 } from '../../customComponents';
import { items, fields } from '../../utils/arrayData';
import { propertyDetailsInitialState } from '../../utils/initialStates';
import { Input } from '../../customComponents/input/customInputs';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { displayPropertyfields } from '../../utils/helpers';


const ManageProperty = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [propertiesData, setPropertiesData] = useState([])
  const [tableDataRefresh, setTableDataRefresh] = useState(false)
  const axiosPrivate = useAxiosPrivate();



  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    
    fetchPropertiesList()
    
  }, [tableDataRefresh])
  useEffect(() => {
    
    fetchPropertiesList()
    
  }, [])
  

  async function fetchPropertiesList() {
    try {
      const { data: fetchPropertiesResponses, status } = await axiosPrivate.get(`/api/v1/properties/`);
      const { data:propertydatas } =fetchPropertiesResponses
      
      let data = [];
      let propertyArray = [];
      let x = 1;


      propertydatas.forEach((propertydata) => {
    let {
            property_Name,
            property_agent,
            property_county,   
            property_id,
            property_images,
            property_kplc_charge,
            property_owner,
            property_rooms,
            property_town,
            property_water_charge,
     
    } = propertydata;

    const datas = {
            _id:x,
            property_Name,
            property_agent,
            property_county,   
            property_id,
            property_images,
            property_kplc_charge,
            property_owner,
            property_rooms,
            property_town,
            property_water_charge,

    };
    const propertyArraydata = {
           label:property_Name,
           value:property_id
    }
    data.push(datas);
    propertyArray.push(propertyArraydata);
    x = x + 1;
  });
      

    

      if (status === 200) {
        //setPropertiesData(propertydatas);
        console.log("propertydatas",propertydatas)
        setPropertiesData(data);
        setPropertiesArrayData(propertyArray)
        console.log("propertyArray",propertyArray)

       
      } else {
        //errorNotification("Unable to fetch Partners");
      }
    } catch (ex) {
      //errorNotification("Unable to fetch Partners--");
      console.log({ ex });
    }
    console.log("propertiesData",propertiesData)
  }


  return (
    <>
    <PageTitleBreadCrumbs title="Manage Properties"/>

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
                fields={displayPropertyfields}
                items={propertiesData}
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

export default mainLayoutAuth(ManageProperty);




									


const TableModal = ({stateChanger ,stateChange}) => {
    const [propetyDetails, setPropetyDetails] = useState(propertyDetailsInitialState);
    const{auth}= useAuth()
    const axiosPrivate = useAxiosPrivate();

    const handleSubmit =  async (event) => {
      event.preventDefault()
      
    
        const checker = [];
        checker.push(propetyDetails.property_Name);
        checker.push(propetyDetails.property_county);
        checker.push(propetyDetails.property_town);
        checker.push(propetyDetails.property_units);
        // checker.push(propetyDetails.property_water_charge);
        // checker.push(propetyDetails.property_kplc_charge);
        const check = checker.includes(0);
        if (check === false) {

          let payload = {
            'property_Name':propetyDetails.property_Name,
            'property_county':propetyDetails.property_county,
            'property_town':propetyDetails.property_town,
            'property_owner':auth.user,
            'property_agent':0,
            'property_units':propetyDetails.property_units,
            createdBy:auth.user
            // 'property_water_charge':propetyDetails.property_water_charge,
            // 'property_kplc_charge':propetyDetails.property_kplc_charge,
            //'property_images':'none'

          }            
          console.log("payload",payload)
          try {
            const createPropertyResponse = await axiosPrivate.post('api/v1/properties/create',payload);
           // const createPropertyResponse ="jj"
            console.log("createPropertyResponse",createPropertyResponse)
            const { status } = createPropertyResponse; 
            
           
            if (status === 201 || status === 200) {
              //successNotification("Property Added successfully")
              setPropetyDetails(propertyDetailsInitialState)
              stateChanger(!stateChange)
              
            } else {
              //errorNotification("Property Added not created successfully");
            }
          } catch (ex) {
            //warningNotification("something went wrong ");
            console.log({ex})
          }
        } else if (check === true) {
          //errorNotification("Some fields are not complete ");
        }
    }

    const handleChange = ({ currentTarget: input }) => {
      let name = input.id;
      let value = input.value;

      setPropetyDetails({
        ...propetyDetails,
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
			<i class="icon-person_add" style={{fontSize:'18px'}}></i> Create Property
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										<Modal 
										modalheader={
											<>
											<h5 class="modal-title" id="customModalTwoLabel">Create Property</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</>
										}
										modalbody={
                                           <form onSubmit={handleSubmit}>
										
										
									
										
											<Input
                                                labelText="Property Name"
                                                placeholder="Property Name"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={propetyDetails.property_Name}
                                                id="property_Name"
                                                name="property_Name"

                                            />
										
										
											<Input
                                                labelText="Number of Units"
                                                placeholder="Number of Units"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={propetyDetails.property_units}
                                                id="property_units" 
                                                name="property_units" 

                                            />
										
											<Input
                                                labelText="Nearest Town"
                                                placeholder="Nearest Town"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={propetyDetails.property_town}
                                                name="property_town"
                                                id="property_town"

                                            />
										
											<Input
                                                labelText="County"
                                                placeholder="County"
                                                inputType="number"
                                                onChange={handleChange}
                                                value={propetyDetails.property_county}
                                                name="property_county"
                                                id="property_county"

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
