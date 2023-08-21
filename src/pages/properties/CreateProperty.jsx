import React, {useState} from 'react'
import { PageTitle, mainLayoutAuth } from '../../layout'
import { BaseInput } from '../../customComponents/input/customInputs'
import { tenantDetailsInitialState } from '../../utils/initialStates';
import { Select1 } from '../../customComponents';
import { propertyArray } from '../../utils/arrayData';

const CreateProperty = () => {
  const [tenantDetails, setTenantDetails] = useState({tenantDetailsInitialState});


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
          // 'property_water_charge':propetyDetails.property_water_charge,
          // 'property_kplc_charge':propetyDetails.property_kplc_charge,
          //'property_images':'none'

        }            
        console.log("payload",payload)
        // try {
        //   const createPropertyResponse = await axiosInstance.post('api/v1/properties/create',payload);
        //  // const createPropertyResponse ="jj"
        //   console.log("createPropertyResponse",createPropertyResponse)
        //   const { status } = createPropertyResponse; 
          
         
        //   if (status === 201 || status === 200) {
        //     successNotification("Property Added successfully")
        //     setPropetyDetails(propertyDetailsInitialState)
            
        //   } else {
        //     errorNotification("Property Added not created successfully");
        //   }
        // } catch (ex) {
        //   warningNotification("something went wrong ");
        //   console.log({ex})
        // }
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
                                                labelText="Property Name"
                                                placeholder="Property Name"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="property_Name"
                                                id="property_Name"

                                            />
										</div>
                    <br/>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="property_units"
                                                placeholder="property_units"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="property_units"
                                                id="property_units"

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="County"
                                                placeholder="County"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="property_county"
                                                id="property_county"

                                            />
										</div>

                    <br/>
										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Nearest Town"
                                                placeholder="Nearest Town"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="property_town"
                                                id="property_town"

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

export default mainLayoutAuth(CreateProperty)