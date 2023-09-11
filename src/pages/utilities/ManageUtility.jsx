import React, { useState ,useEffect } from 'react';
import { PageTitleBreadCrumbs, mainLayoutAuth } from '../../layout';
import { Modal, Select, TableComponent, TableComponent2, TextArea1 } from '../../customComponents';
import { items, fields, charge_type_ArrayData } from '../../utils/arrayData';
import { utilityChargeInitialState } from '../../utils/initialStates';
import { Input } from '../../customComponents/input/customInputs';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { displayChargefields } from '../../utils/helpers';
import { successNotification } from '../../utils/notification';
import { findArrayValue } from '../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../../redux/propertiesActions';


const ManageUtility = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [chargeData, setChargeData] = useState([])
  const axiosPrivate = useAxiosPrivate();
  const [tableDataRefresh, setTableDataRefresh] = useState(false)
  




  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    
    fetchUtilitiesList()
    fetchUtilitiesList1()
    
  }, [])


  useEffect(() => {
    
    fetchUtilitiesList()
    
  }, [tableDataRefresh])
  

  async function fetchUtilitiesList1() {

    
    try {
      //const { data: chargedatas, status } = await axiosPrivate.get(`/api/v1/utilities/byproperyid/${id}`);
      const {fetchChargeResponses } = await axiosPrivate.get(`/api/v1/utilities/agentChargesArray`);
     
      console.log("all array data",fetchChargeResponses)

    }catch(ex){
      console.log("ex",{ex})
    }}
  async function fetchUtilitiesList() {

    let id=3
    try {
      //const { data: chargedatas, status } = await axiosPrivate.get(`/api/v1/utilities/byproperyid/${id}`);
      const { data: chargedatas, status } = await axiosPrivate.get(`/api/v1/utilities/agentCharges`);
      const { data:fetchChargeResponses } =chargedatas
      console.log("fetchchargesjjjResponses",fetchChargeResponses)
       
      
      let data = [];
         let x = 1;


         fetchChargeResponses.forEach((fetchChargeResponse) => {
    let {
                _id=x,
                charge_created_by,
                charge_description,
                charge_id,
                charge_name,
                charge_per_unit,
                charge_property_id,
                charge_status,
                charge_type,
                charge_visibility,
     
    } = fetchChargeResponse;
    if(charge_type==1)charge_type="Water Charge"
    if(charge_type==2)charge_type="KPLC Charge"
    if(charge_type==3)charge_type="Garbage Charge"
    const datas = {
        _id,
        charge_created_by,
        charge_description,
        charge_id,
        charge_name,
        charge_per_unit,
        charge_property_id,
        charge_status:charge_status===1?'enabled':'disabled',
        charge_type:charge_type,
        charge_visibility,

    };
    data.push(datas);
    x = x + 1;
  });
      

    

      if (status === 200) {
       
        setChargeData(data);
        console.log("propertiesData",data)

       
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
    <PageTitleBreadCrumbs title="Manage Utilities"/>

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
                fields={displayChargefields}
                items={chargeData}
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

export default mainLayoutAuth(ManageUtility);




									


const TableModal = ({stateChanger ,stateChange}) => {
  const [utilityChargeDetails,setUtilityChargeDetails]=useState(utilityChargeInitialState)
    const{auth}= useAuth()
    const axiosPrivate = useAxiosPrivate();
    const dispatch = useDispatch();
    const propertyData = useSelector((state) => state.properties.propertiesData);

    useEffect(() => {
      // Dispatch both fetchTenants and fetchProperties actions
      dispatch(fetchProperties(axiosPrivate));
    }, [dispatch]);


    const handleSubmit = async (event) => {
      event.preventDefault()
      setUtilityChargeDetails(utilityChargeInitialState)
      const checker = [];
      checker.push(utilityChargeDetails.charge_name);
      checker.push(utilityChargeDetails.charge_property_id);
      checker.push(utilityChargeDetails.charge_per_unit);
      checker.push(utilityChargeDetails.charge_description);  
     

      const check = checker.includes(0);
      if (check === false) {

        let payload = {
          'charge_property_id':utilityChargeDetails.charge_property_id,
          'charge_name':utilityChargeDetails.charge_name,
          'charge_type':utilityChargeDetails.charge_type,
          'charge_status':1,
          'charge_per_unit':utilityChargeDetails.charge_per_unit,
          'charge_created_by':auth.user,
          'charge_visibility':1,
          'charge_description':utilityChargeDetails.charge_description,


        }   
               
  
        try {
          const createUtilityResponse = await axiosPrivate.post('api/v1/utilities/createCharge',payload);
          const { status } = createUtilityResponse; 
          console.log("createUtilityResponse",createUtilityResponse)
          
          
          if (status === 201 || status === 200) {
            console.log("added")
            stateChanger(!stateChange)
            successNotification("Charge has been added")
            
          } else {
          }
        } catch (ex) {
          console.log({ex});
          successNotification("something went wrong")
        }
      } else if (check === true) {
        warningNotification("you have some empty fields")
      }
    }

      const handleChange = ({ currentTarget: input }) => {
        let name = input.id;
        let value = input.value;

        setUtilityChargeDetails({
          ...utilityChargeDetails,
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
			<i class="icon-person_add" style={{fontSize:'18px'}}></i> Create Utility Charge
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										<Modal 
										modalheader={
											<>
											<h5 class="modal-title" id="customModalTwoLabel">Create Utility Charge</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</>
										}
										modalbody={
                                           <form onSubmit={handleSubmit}>
										
										
									
										
                    <Select
              arrayData={charge_type_ArrayData}
              defaultSelectText="Select Type of Charge"
              onChange={handleChange}
              name="charge_type"
              id="charge_type"
              labelText="Charge Type"
              value={utilityChargeDetails.charge_type}

              />
                    <Select
              arrayData={propertyData}
              defaultSelectText="Select Property"
              onChange={handleChange}
              name="charge_property_id"
              id="charge_property_id"
              labelText="Propety"
              value={utilityChargeDetails.charge_property_id}

              />
         <Input
              onChange={handleChange}  
              //value=""   
              name ="charge_name"  
              id= "charge_name"
              labelText="Name"  
              inputType="text"    
              placeholder="charge name"
              value={utilityChargeDetails.charge_name}
              />
         <Input
              onChange={handleChange}  
              //value=""   
              name ="charge_per_unit"  
              id= "charge_per_unit"
              labelText="Charge per Unit"  
              inputType="number"    
              placeholder="charge_per_unit"
              value={utilityChargeDetails.charge_per_unit}
              />
         <TextArea1
              onChange={handleChange}  
              //value=""   
              name ="charge_description"  
              id= "charge_description"
              labelText="charge description"  
              inputType="text"    
              placeholder="Desc"
              numRows="5"
              value={utilityChargeDetails.charge_description}
              
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
