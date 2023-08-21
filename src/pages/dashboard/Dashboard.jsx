import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MainLayoutAuth from "../../layout/layouts/mainLayoutAuth";
import AgentOwnerDashboard from "./AgentOwnerDashboard";

const Dashboard = () => {
    const { auth } = useAuth();
    const [category, setCategory] = useState();
  
    useEffect(() => {
      const cat = auth.roles[1];
      setCategory(cat); // Corrected: Change setCat(cat) to setCategory(cat)
      //console.log("auth", auth);
    }, []);
    
    return (
      // Removed unnecessary curly braces around the ternary expression
      category && category === 5000 ? <AgentOwnerDashboard /> : ""
    );
  };
  
  export default Dashboard;