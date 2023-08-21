import React, {useState} from 'react'
import { PageTitle, mainLayoutAuth } from '../../layout'
import { BaseInput } from '../../customComponents/input/customInputs'
import { unitDetailsInitialState } from '../../utils/initialStates';
import { Select1, TextArea } from '../../customComponents';
import { propertyArray } from '../../utils/arrayData';

const CreateUnit = () => {
  const [unitDetails, setUnitDetails] = useState({unitDetailsInitialState});


  const handleSubmit =  async (event) => {
    event.preventDefault()
    console.log("unitDetails--->",unitDetails)
  
    
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
  
        // try {
        //   const createUnitsResponse = await axiosInstance.post('api/v1/units/create',payload);
        //   console.log("createUnitsResponse",createUnitsResponse)  
        //   const { status } = createUnitsResponse; 
          
        
        //   if (status === 201) {
        //     console.log("added")
        //     successNotification("Unit added successful")
        //     setUnitDetails(unitDetailsInitialState)
        //   } else {
        //     errorNotification("something went wrong")
        //   }
        // } catch (ex) {
        //   console.log({ex})
        //   errorNotification("Error:something went wrong")

        // }
      } else if (check === false) {
      }
  }

      const handleChange = ({ currentTarget: input}) => {
   
        let name = input.id;
        let value = input.value;
    
        setUnitDetails({
          ...unitDetails,
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
											<Select1
                                                labelText="First Name"
                                                defaultSelectText="Select Property Name"
                                                //inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_property_id"
                                                id="unit_property_id"
                                                arrayData={propertyArray}

                                            />
										</div>

                    <div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Unit Description"
                                                placeholder="Unit Description"
                                                inputType="text"
                                                onChange={handleChange}
                                                //value=
                                                rows={10}
                                                name="unit_description"
                                                id="unit_description"

                                            />
                    
										</div>
                    <div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <BaseInput
                                                labelText="Rent Amount"
                                                placeholder="Rent Amount"
                                                inputType="number"
                                                onChange={handleChange}
                                                //value=
                                                rows={10}
                                                name="unit_rent_Amount"
                                                id="unit_rent_Amount"

                                            />
                    
										</div>
                  
									
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Water Charge"
                                                defaultSelectText="Select Water Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_water_charge"
                                                id="unit_water_charge"
                                                arrayData={propertyArray}

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Kplc Charge"
                                                defaultSelectText="Select Kplc Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_kplc_charge"
                                                id="unit_kplc_charge"
                                                arrayData={propertyArray}

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Garbage Charge"
                                                defaultSelectText="Select Garbage Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_garbage_charge"
                                                id="unit_garbage_charge"
                                                arrayData={propertyArray}

                                            />
										</div>
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Garbage Charge"
                                                defaultSelectText="Select Garbage Charge"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_garbage_charge"
                                                id="unit_garbage_charge"
                                                arrayData={propertyArray}

                                            />
										</div>
                    
										<div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <Select1
                                                labelText="Unit Type"
                                                defaultSelectText="Select Unit Type"
                                                inputType="test"
                                                onChange={handleChange}
                                                //value=
                                                name="unit_type"
                                                id="unit_type"
                                                arrayData={propertyArray}

                                            />
										</div>

                    <div class="col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12">
                    <TextArea
                                                labelText="Unit Description"
                                                placeholder="Unit Description"
                                                inputType="textarea"
                                                onChange={handleChange}
                                                //value=
                                                rows={5}
                                                name="unit_description"
                                                id="unit_description"

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

export default mainLayoutAuth(CreateUnit)