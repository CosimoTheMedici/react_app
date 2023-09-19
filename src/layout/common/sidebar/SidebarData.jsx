import { Clipboard, Home, Users,FileText } from 'react-feather';

export const menuItemsAgent = [
    {
      name: "Dashboard",
      path: "/",
      icon:  <i class="icon-home1"></i>,
      exact: "true",
    },
    {
      name: "Payments",
      path: "/customers",
      icon: <i class="icon-attach_money"></i>,
      exact: "false",
    },
    {
      name: "Units",
      path: "/estimates",
      icon: <i class="icon-list2"></i>,
      exact: "false",
    },
    {
      name: "Tenants",
      path: "/estimates",
      icon: <i class="icon-list2"></i>,
      exact: "false",
    },
    {
      name: "Invoices",
      path: "#",
      icon: <i class="icon-list2"></i>,
      exact: "false",
      subMenuItems: [
        {
          name: "Invoices List",
          path: "/invoices",
        },
        {
          name: "Invoices Grid",
          path: "/invoice-grid",
        },
        {
          name: "Invoices Grid 2",
          path: "/invoice-grid-two",
        },
     
      ],
    },
    {
          name: "Utilities",
          path: "#",
          icon: <i class="icon-list2"></i>,
          exact: "false",
          subMenuItems: [
            { name: "Manage Consumption", path: "/alerts" },
            { name: "Manage Utilities", path: "/accordions" },
            { name: "Avatar", path: "/avatar" },
            { name: "Badges", path: "/badges" },
            { name: "Buttons", path: "/buttons" },
     
          ],
        },
        {
          name: "Invoices List",
          path: "/invoices",
          icon: <i class="icon-list2"></i>,
          exact: "false",
        },
   
      
      
  ];


export const menuItemsAgentOwner = [
    {
      name: "Dashboard",
      path: "/home",
      icon:  <i class="icon-home1"></i>,
      exact: "true",
    },
    {
      name: "Agents",
      path: "#",
      icon: <i class="icon-list2"></i>,
      exact: "false",
      subMenuItems: [
        {
          name: "Manage Agents",
          path: "/manage/agent",
        },
        {
          name: "Create Agent",
          path: "/create/agent",
        },
       
     
      ],
    },
    
    {
      name: "Properties",
      path: "/manage/properties",
      icon: <i class="icon-list2"></i>,
      exact: "true",
    },
    
    
    {
      name: "Units",
      path: "/manage/units",
      icon: <i class="icon-list2"></i>,
      exact: "true",
    },
    {
      name: "Tenants",
      path: "/manage/tenants",
      icon: <i class="icon-more_vert"></i>,
      exact: "true",
    },
    {
      name: "Utilities",
      path: "#",
      icon: <i class="icon-more_vert"></i>,
      exact: "false",
      subMenuItems: [
        {
          name: "Manage Utilities",
          path: "/manage/utilities",
        },
        {
          name: "Manage Consumption",
          path: "/manage/consumption",
        },
        {
          name: "Invoices Grid 2",
          path: "/invoice-grid-two",
        },
     
      ],
    },
    {
      name: "Invoices",
      path: "#",
      icon: <i class="icon-more_vert"></i>,
      exact: "false",
      subMenuItems: [
        {
          name: "Invoices List",
          path: "/invoices",
        },
        {
          name: "Invoices Grid",
          path: "/invoice-grid",
        },
        {
          name: "Invoices Grid 2",
          path: "/invoice-grid-two",
        },
     
      ],
    },
    {
      name: "Payments",
      path: "/customers",
      icon: <i class="icon-attach_money"></i>,
      exact: "false",
    },
    {
          name: "Utilities",
          path: "#",
          icon: <i class="icon-list2"></i>,
          exact: "false",
          subMenuItems: [
            { name: "Manage Utilities", path: "/manage/utilities" },
            { name: "Manage Consumption", path: "/manage/consumption" },
            { name: "Avatar", path: "/avatar" },
            { name: "Badges", path: "/badges" },
            { name: "Buttons", path: "/buttons" },
     
          ],
        },
        {
          name: "Invoices List",
          path: "/manage/invoices",
          icon: <i class="icon-list2"></i>,
          exact: "false",
        },
   
      
      
  ];