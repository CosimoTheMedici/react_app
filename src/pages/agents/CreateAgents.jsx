import React, {useState} from 'react'
import { PageTitle, mainLayoutAuth } from '../../layout'
import { BaseInput } from '../../customComponents/input/customInputs'
import { agentDetailsInitialState } from '../../utils/initialStates';

const CreateAgent = () => {
    const [agentDetails, setAgentDetails] = useState(agentDetailsInitialState);


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
              const createAgentResponse = await axiosInstance.post('api/v1/agents/create',payload);
              //const createPropertyResponse ="jj"
              console.log("createAgentResponse",createAgentResponse)
              const { status } = createAgentResponse; 
              
              
              if (status === 201) {
                console.log("added")
                successNotification("Agent added Successfully")
                
              } else {
                errorNotification("Agent not created successfully");
              }
            } catch (ex) {
              warningNotification("Error creating Agent " + ex);
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
  return (
 <>
   
   <div class="page-header">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">Home</li>
						<li class="breadcrumb-item active">Data Tables</li>
					</ol>

					<ul class="app-actions">
						<li>
							<a href="#" id="reportrange">
								<span class="range-text"></span>
								<i class="icon-chevron-down"></i>	
							</a>
						</li>
						<li>
							<a href="#">
								<i class="icon-export"></i>
							</a>
						</li>
					</ul>
				</div>
    <div class="main-container">
    <div class="row gutters">

						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="card">
								<div class="card-body">
              <form onSubmit={handleSubmit}>
									<div class="row gutters">
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent FirstName"
                                                placeholder="Agent FirstName"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_firstname"
                                                id="agent_firstname"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent SecondName"
                                                placeholder="Agent SecondName"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_secondname"
                                                id="agent_secondname"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent LastName"
                                                placeholder="Agent LastName"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_lastname"
                                                id="agent_lastname"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent ID Number"
                                                placeholder="Agent ID Number"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_IDnumber"
                                                id="agent_IDnumber"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent Email"
                                                placeholder="Agent Email"
                                                inputType="email"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_email"
                                                id="agent_email"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
											<BaseInput
                                                labelText="Agent Phone"
                                                placeholder="Agent Phone"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                name="agent_phone"
                                                id="agent_phone"

                                            />
										</div>

                    <div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    		
                        <div class="card-body">
									<div class="form-group">
                  <label for="inputName">.</label>
										<div class="custom-date-input">
                    <button class="btn btn-primary btn-block" type="submit">Block Level Button</button>
										</div>
									</div>
								</div>

										</div>
                   
									</div>
                  </form>
								</div>
							</div>
						</div>
                        </div>
                        </div>
                        </>
  )
}

export default mainLayoutAuth(CreateAgent)