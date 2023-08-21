import React, {useState} from 'react'
import { PageTitle, mainLayoutAuth } from '../../layout'
import { BaseInput } from '../../customComponents/input/customInputs'
import { tenantDetailsInitialState } from '../../utils/initialStates';
import { Select1 } from '../../customComponents';
import { propertyArray } from '../../utils/arrayData';

const CreateTenant = () => {
  const [tenantDetails, setTenantDetails] = useState({tenantDetailsInitialState});


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
      
            
  
        // try {
        //   const createPropertyResponse = await axiosInstance.post('api/v1/tenants/create',payload);
        //   console.log("createPropertyResponse",createPropertyResponse)
        //   const { status } = createPropertyResponse; 
          
        //   if (status === 201) {
        //     console.log("added")
        //     successNotification("Tenant has been added")
  
            
        //   } else {
        //     errorNotification("Tenant not created successfully");
        //   }
        // } catch (ex) {
        //   warningNotification("Error creating Tenant ");
        //   console.log({ex})
        // }
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
                                                labelText="First Name"
                                                placeholder="First Name"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="firstName"
                                                id="firstName"

                                            />
										</div>
                    <br/>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Second Name"
                                                placeholder="Second Name"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="secondName"
                                                id="secondName"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Last Name"
                                                placeholder="Last Name"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="lastName"
                                                id="lastName"

                                            />
										</div>

                    <br/>
										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="ID Number"
                                                placeholder="ID Number"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                name="IDNumber"
                                                id="IDNumber"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Email"
                                                placeholder="Email"
                                                inputType="email"
                                                onChange={handleChange}
                                                //value=
                                                name="email"
                                                id="email"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Phone Number"
                                                placeholder="Phone Number"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                name="phoneNumber"
                                                id="phoneNumber"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Property Name"
                                                defaultSelectText="Select Property Name"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="propertyID"
                                                id="propertyID"
                                                arrayData={propertyArray}

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Unit Name"
                                                defaultSelectText="Select Unit Name"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unitName"
                                                id="unitName"
                                                arrayData={propertyArray}

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Emergency Person"
                                                placeholder="Emergency Person"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="emergencyPerson"
                                                id="emergencyPerson"

                                            />
                    
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Emergency Number"
                                                placeholder="Emergency Number"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                name="emergencyNumber"
                                                id="emergencyNumber"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Emergency Person Relation"
                                                placeholder="Emergency Person Relation"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="emergencyPersonRelation"
                                                id="emergencyPersonRelation"

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

export default mainLayoutAuth(CreateTenant)