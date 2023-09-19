export const displayAgentfields = [
    {
       key: "_id",
       label: "ID",
    //    sort: true,
    //    headerStyle: { width: '5%' },
    //    style: { width: '5%' },
    //    align: 'left'      
    // {
    //     key: '6',
    //     label: 'Status',
    //   },
    },
    {
        key: "agent_firstname",
        label: "FirstName",
        // style: { width: '10%',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        // labelOverflow: 'ellipsis'
        //        },
        // headerStyle: {
        // labelAlign: 'left',
        // whiteSpace: 'nowrap',
        // width: '10%',
        // overflow: 'hidden',
        // labelOverflow: 'ellipsis',
        // labelAlign: 'left',
        // labelIndent: 0,
        // },
        // sort: true,
     },
    {
       key: "agent_secondname",
       label: "Lastname",
    //    style: { width: '10%' },  
    //    sort: true,
    //    headerStyle: {
    //     labelAlign: 'left',
    //     whiteSpace: 'nowrap',
    //     width: '10%',
    //     overflow: 'hidden',
    //     labelOverflow: 'ellipsis',
    //     labelAlign: 'left',
    //     labelIndent: 0,
    //     },
     },
    {
        key: "agent_IDnumber",
        label: "ID Number",
        // style: { width: '10%',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        // labelOverflow: 'ellipsis'
        //        }, 
        // sort: true,
        // headerStyle: {
        //     labelAlign: 'left',
        //     whiteSpace: 'nowrap',
        //     width: '10%',
        //     overflow: 'hidden',
        //     labelOverflow: 'ellipsis',
        //     labelAlign: 'left',
        //     labelIndent: 0,
        //     },
     },
   
 
  
    {
       key: "agent_email",
       label: "Email",
    //    style: { width: '15%',
    //    overflow: 'hidden',
    //    whiteSpace: 'nowrap',
    //    labelOverflow: 'ellipsis'
    //           }, 
    //    sort: true,
    //    headerStyle: {
    //     labelAlign: 'left',
    //     whiteSpace: 'nowrap',
    //     overflow: 'hidden',
    //     width: '10%',
    //     labelOverflow: 'ellipsis',
    //     labelAlign: 'left',
    //     labelIndent: 0,
    //     },
    },
    {
        key: "agent_phone",
        label: "Phone",
        // style: { width: '10%',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
        // labelOverflow: 'ellipsis'
        //        }, 
        // sort: true,
        // headerStyle: {
        //     labelAlign: 'left',
        //     whiteSpace: 'nowrap',
        //     width: '10%',
        //     overflow: 'hidden',
        //     labelOverflow: 'ellipsis',
        //     labelAlign: 'left',
        //     labelIndent: 0,
        //     },
     },
    
    {
       key: "agent_properties",
       label: "Properties",
    //    style: { width: '10%',
    //    overflow: 'hidden',
    //    whiteSpace: 'nowrap',
    //    labelOverflow: 'ellipsis'
    //           }, 
    //    sort: true,
    //    headerStyle: {
    //     labelAlign: 'left',
    //     whiteSpace: 'nowrap',
    //     width: '10%',
    //     overflow: 'hidden',
    //     labelOverflow: 'ellipsis',
    //     labelAlign: 'left',
    //     labelIndent: 0,
    //     },
    },
  
 
    {
       key: "agent_status",
       label: "status",
    //    style: { width: '10%',
    //    overflow: 'hidden',
    //    whiteSpace: 'nowrap',
    //    labelOverflow: 'ellipsis'
    //           }, 
    //    sort: true,
    //    headerStyle: {
    //     labelAlign: 'left',
    //     width: '10%',
    //     whiteSpace: 'nowrap',
    //     overflow: 'hidden',
    //     labelOverflow: 'ellipsis',
    //     labelAlign: 'left',
    //     labelIndent: 0,
    //     },
    },
    {
        key: 'ACTION',
        label: 'ACTION',
      },
    
    
    
  ];

  export const displayPropertyfields = [
   {
      key: "ID",
      label: "ID",
   },
   {
      key: "property_Name",
      label: "Property Name",
 
      sort: true,
   },
   {
      key: "property_agent",
      label: "Property Agent",
      sort: true,
   },
 
   {
      key: "property_owner",
      label: "Property Owner",
      sort: true,
   },
 
 
   {
      key: "property_town",
      label: "Property Town",
      sort: true,
   },
   {
      key: "property_water_charge",
      label: "Water Charge",
      sort: true,
   },
   {
      key: "property_kplc_charge",
      label: "kplc Charge",
      sort: true,
   },
   {
       key: "property_images",
       label: "property Images",
       sort: true,
    },
 
   
   {
     key: 'ACTION',
     label: 'ACTION',

    }
 ];

 export const displayUnitsfields = [
   {
      key: "_id",
      label: "ID",
      sort: true,
   },
   {
       key: "property_Name",
       label: "Property",
       sort: true,
    },
   {
      key: "unit_name",
      label: "Unit Name",
     
      sort: true,
   },

 
   {
      key: "unit_type",
      label: "Unit Type",
      sort: true,
   },
   {
       key: "unit_occupancy",
       label: "Unit Occupany",
       sort: true,
    },
   
   {
      key: "unit_status",
      label: "status",
      sort: true,
   },
 

   {
      key: "unit_water_charge",
      label: "Water Charge",
      sort: true,
   },
   {
      key: "unit_kplc_charge",
      label: "kplc Charge",
      sort: true,
   },
   {
      key: "unit_garbage_charge",
      label: "Garbage Charge",
      sort: true,
   },
 
   
   {
      key: 'ACTION',
      label: 'ACTION',
 
     }
 ];


 export const displayChargefields = [
   {
      key: "_id",
      label: "ID",
      sort: true,
        
   },
  
   {
      key: "charge_type",
      label: "Charge Type",
      
   },
   {
      key: "charge_name",
      label: "Charge name",
      
   },

 
   {
      key: "charge_per_unit",
      label: "charge per unit",
      sort: true,
   },

   
   {
      key: "charge_status",
      label: "charge_status",
      sort: true,
   },
 

  
   {
      key: "charge_description",
      label: "charge description",
      sort: true,
   },
  
 
   
   {
      key: 'ACTION',
      label: 'ACTION',
 
     }
 ];

 export const displayTenantfields = [
   {
      key: "_id",
      label: "ID",
         
   },
   {
       key: "firstName",
       label: "FirstName",

       sort: true,
    },
   {
      key: "secondName",
      label: "secondName",
   
   },
   {
      key: "lastName",
      label: "Last Name",
     
   },
   {
       key: "unit_name",
       label: "unit Name",
    },
  

 
   {
      key: "email",
      label: "Email",

   },
   {
      key: "IDNumber",
      label: "ID Number",
 
   },
   {
       key: "phoneNumber",
       label: "Phone",

    },
   
   {
      key: "emergencyNumber",
      label: "Eme Number",

   },
 
   
   
   {
      key: 'ACTION',
      label: 'ACTION',
 
     }
 ];
 export const displayUtilityCasefields = [
   {
      key: "_id",
      label: "ID",
         
   },
   {
       key: "property_Name",
       label: "Property",

       sort: true,
    },
   {
      key: "unit_name",
      label: "Unit",
   
   },
   {
      key: "reading_prev_reading",
      label: "Prev Reading",
     
   },
   {
       key: "reading_nowReading",
       label: "Curr Reading",
    },
  

 
   {
      key: "reading_record",
      label: "Reading",

   },
   {
      key: "reading_utilityTypeID",
      label: "Utility Type",
 
   },
   {
       key: "reading_payment_status",
       label: "Payment Status",

    },
   
   {
      key: "reading_I_N",
      label: "Invoice No",

   },
 
   
   
   {
      key: 'ACTION',
      label: 'ACTION',
 
     }
 ];

 export const displayPreInvoicefields = [
   {
      key: "_id",
      label: "ID",
      sort: true,
        
   },

   {
      key: "property_Name",
      label: "Property",
      
   },
  
   {
      key: "unit_name",
      label: "Unit",
      
   },
   

 
   {
      key: "unit_rent_Amount",
      label: "Rent",
      sort: true,
   },

   {
      key: "reading_record",
      label: "water Reading",
      sort: true,
   },
   {
      key: "unit_water_charge_per_unit",
      label: "per Unit",
      sort: true,
   },

   {
      key: "reading_amount",
      label: "water amount",
      sort: true,
   },

   {
      key: "unit_garbage_charge_per_unit",
      label: "Garbage ",
      sort: true,
   },
   {
      key: "total_amount",
      label: "Total Amount ",
      sort: true,
   },
   {
      key: "reading_date",
      label: "Date",
      sort: true,
   }, 
   
   {
      key: 'ACTION',
      label: 'ACTION',
 
     }
 ];

        