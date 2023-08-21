export const tenantDetailsInitialState = {
    firstName: "",
    secondName: "",
    lastName: "",
    IDNumber: "",
    email: "",
    phoneNumber: "",
    propertyID:"",
    unitName:"",
    emergencyNumber: "",
    emergencyPerson: "",
    emergencyPersonRelation: "",
    
    
  };

export const propertyDetailsInitialState = {
    property_Name:"",
    property_county:"",
    property_town:"",
    //property_owner:"",
    //property_agent:"",
    property_units:"",
    property_water_charge:"",
    property_kplc_charge:"",
    property_garbage_charge:"",
    //property_images:""


}

export const unitDetailsInitialState = {
    
        unit_name: "",
        unit_property_id: "",
        unit_rent_Amount: "",
        unit_water_charge: "",
        unit_kplc_charge: "",
        unit_garbage_charge: "",
        unit_description: "",
        unit_type: "",
}

export const userDetailsInitialState = {
    userEmail: "",
    userPassword: "",
    userTenantID: "",

}
export const utilityChargeInitialState = {
    charge_property_id: "",
    charge_name: "",
    charge_type:"",
    charge_per_unit:"",
    charge_created_by:"",
    charge_description:""

}

export const paymentDetailsInitialState = {
    payment_propertyName:"",
    payment_unitName:"",
    payment_method:"",
    payment_reference_no:"",
    payment_amount:"",

}
export const agentDetailsInitialState = {
    agent_firstname:"",
    agent_secondname:"",
    agent_lastname:"",
    agent_IDnumber:"",
    agent_email:"",
    agent_phone:"",
   

}
export const agentAssignmentDetailsInitialState = {
    propertyName:"",
    agentName:"",
    
   

}

export const utilityConsumptionDetailsInitialState = {
    reading_propertyID:"",
    reading_unitID:"",
    reading_utilityTypeID:"",
    reading_nowReading:"",
    
   

}
