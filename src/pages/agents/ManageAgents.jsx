import React, { useState ,useEffect } from 'react';
import { PageTitleBreadCrumbs, mainLayoutAuth } from '../../layout';
import { Modal, TableComponent, TableComponent2 } from '../../customComponents';
import { items, fields } from '../../utils/arrayData';
import { agentDetailsInitialState } from '../../utils/initialStates';
import { Input } from '../../customComponents/input/customInputs';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { displayAgentfields } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setAgentsData } from '../../features/actions';
import { errorNotification, successNotification, warningNotification } from '../../utils/notification';
import { ModalComponent } from '../../customComponents/modal/Modal';


const ManageAgents = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [agentsData1, setAgentsData1] = useState([])
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const [tableDataRefresh, setTableDataRefresh] = useState(false)
  const agentsData = useSelector(state => state.agentsData);



  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };






  useEffect(() => {
    
    fetchAgentsList()
    
  }, [])

  useEffect(() => {
    
    fetchAgentsList()
    
  }, [tableDataRefresh])
  

  // async function fetchQuote() {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
  //     params: {
  //       token: 'ipworld.info'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': 'ff0fbe78cdmshebf3a8989abf0ccp1146c7jsne215a9ffdc52',
  //       'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
  //     }
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  async function fetchAgentsList() {
    try {
      const { data: fetchAgentsResponses, status } = await axiosPrivate.get(`/api/v1/agents/`);
      const { data:agentsDatas } =fetchAgentsResponses
      console.log("fetchAgentsResponses",agentsDatas)
      let data = [];
      let x = 1;

      
      agentsDatas.forEach((agentsData) => {
    let {
        agent_IDnumber,
        agent_email,
        agent_firstname,
        agent_id,
        agent_lastname,
        agent_phone,
        agent_properties,
        agent_secondname,
        agent_status,
        
     
    } = agentsData;

    const datas = {
        _id:x,
        agent_IDnumber,
        agent_email,
        agent_firstname,
        agent_id,
        agent_lastname,
        agent_phone,
        agent_properties,
        agent_secondname,
        agent_status:agent_status===1?'active':'inactive',

    };
    data.push(datas);
    x = x + 1;
  });
      

    

      if (status === 200) {
        setAgentsData1(data);
        dispatch(setAgentsData(data));

       
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
    <PageTitleBreadCrumbs title="Manage Agents"/>

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
                fields={displayAgentfields}
                items={agentsData1}
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

export default mainLayoutAuth(ManageAgents);




									


const TableModal = ({stateChanger ,stateChange}) => {
    const [agentDetails, setAgentDetails] = useState(agentDetailsInitialState);
    const [modalUpdateIntegration, setModalUpdateIntegration] = useState(false);
    const{auth}= useAuth()
    const dispatch = useDispatch();
    const agentsData = useSelector(state => state.agentsData);
    const axiosPrivate = useAxiosPrivate();

    const handleSubmit =  async (event) => {
        event.preventDefault()
        
        
      
        const {
            agent_firstname,
            agent_secondname,
            agent_lastname,
            agent_IDnumber,
            agent_email,
            agent_phone,
          } = agentDetails;
      
          const check = 
          [ 
            agent_firstname,
            agent_secondname,
            agent_lastname,
            agent_IDnumber,
            agent_email,
            agent_phone].every(value => value);
            console.log("check",check)
          if (check===true) {
      
            const payload = {
                agent_firstname,
                agent_secondname,
                agent_lastname,
                agent_IDnumber,
                agent_email,
                agent_phone,
                createdBy:auth.user
            };
            console.log("payload",payload)          
      
            try {
              const createAgentResponse = await axiosPrivate.post('api/v1/agents/create',payload);
              //const createPropertyResponse ="jj"
              console.log("createAgentResponse",createAgentResponse)
              const { status } = createAgentResponse; 
              
              
              if (status === 201) {
                console.log("added")
                setAgentDetails(agentDetailsInitialState)
                stateChanger(!stateChange)
                //dispatch(setAgentsData(agentsData));

                successNotification("Agent added Successfully")
                
              } else {
                //errorNotification("Agent not created successfully");
              }
            } catch (ex) {
              //warningNotification("Error creating Agent " + ex);
              console.log({ex})
            }
          } else if (check === false) {
            errorNotification("Some fields are not complete ");
          }
      }

      const handleChange = ({ currentTarget: input }) => {
        let name = input.id;
        let value = input.value;

        setAgentDetails({
          ...agentDetails,
          [name]: value,
        });
      };

      const handleToggleUpdateIntegration = () => {
        //setCurrentViewRecord(item);
        setModalUpdateIntegration(!modalUpdateIntegration);
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
			<button type="button" class="btn btn-primary" onClick={() => handleToggleUpdateIntegration()}>
			<i class="icon-person_add" style={{fontSize:'18px'}}></i> Create Agent
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										

             <ModalComponent
             modalState={modalUpdateIntegration}
             modaalTitle={"Update Integration Details"}
             handleClose={() => setModalUpdateIntegration(false)}
             modalHeader={
              <>
              <h5 class="modal-title" id="customModalTwoLabel">Create Agent</h5>
                <button type="button" class="close"  onClick={() => setModalUpdateIntegration(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </>
            }
             modalBody={
                                           <form onSubmit={handleSubmit}>
										
										
									
										
											<Input
                                                labelText="Agent FirstName"
                                                placeholder="Agent FirstName"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={agentDetails.agent_firstname}
                                                name="agent_firstname"
                                                id="agent_firstname"

                                            />
										
										
											<Input
                                                labelText="Agent SecondName"
                                                placeholder="Agent SecondName"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={agentDetails.agent_secondname}
                                                name="agent_secondname"
                                                id="agent_secondname"

                                            />
										
											<Input
                                                labelText="Agent LastName"
                                                placeholder="Agent LastName"
                                                inputType="text"
                                                onChange={handleChange}
                                                value={agentDetails.agent_lastname}
                                                name="agent_lastname"
                                                id="agent_lastname"

                                            />
										
											<Input
                                                labelText="Agent ID Number"
                                                placeholder="Agent ID Number"
                                                inputType="number"
                                                onChange={handleChange}
                                                value={agentDetails.agent_IDnumber}
                                                name="agent_IDnumber"
                                                id="agent_IDnumber"

                                            />
										
											<Input
                                                labelText="Agent Email"
                                                placeholder="Agent Email"
                                                inputType="email"
                                                onChange={handleChange}
                                                value={agentDetails.agent_email}
                                                name="agent_email"
                                                id="agent_email"

                                            />
										
											<Input
                                                labelText="Agent Phone"
                                                placeholder="Agent Phone"
                                                inputType="number"
                                                onChange={handleChange}
                                                value={agentDetails.agent_phone}
                                                name="agent_phone"
                                                id="agent_phone"

                                            />
										<div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-secondary" onClick={() => setModalUpdateIntegration(false)}> <i class="icon-export"></i>  Close</button>
                                        <button type="submit" class="btn btn-primary" onClick={handleSubmit}  data-dismiss="modal" > Save Data </button>
												</div>

                 
                   
									
                  </form>
										}
              />
									</div>

		</>

	)
  }
