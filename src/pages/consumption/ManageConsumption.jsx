import React, { useState, useEffect } from "react";
import { PageTitleBreadCrumbs, mainLayoutAuth } from "../../layout";
import {
  Modal,
  Select,
  TableComponent,
  TableComponent2,
} from "../../customComponents";
import { items, fields, charge_type_ArrayData } from "../../utils/arrayData";
import {
  tenantDetailsInitialState,
  utilityConsumptionDetailsInitialState,
} from "../../utils/initialStates";
import { Input } from "../../customComponents/input/customInputs";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {
  displayUtilityCasefields,
} from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../redux/propertiesActions";
import {
  errorNotification,
  successNotification,
  warningNotification,
} from "../../utils/notification";
import { Select2 } from "../../customComponents/select/Select";

const ManageConsumption = () => {
  const [showDropdown, setShowDropdown] = useState({});
  const [tenantsData, setTenantsData] = useState([]);
  const [tableDataRefresh, setTableDataRefresh] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    fetchUtilityList();
  }, [tableDataRefresh]);
  useEffect(() => {
    fetchUtilityList();
  }, []);

  async function fetchUtilityList() {
    try {
      const { data: fetchUtilityResponses, status } = await axiosPrivate.get(
        `/api/v1/utilities/getConsumption`
      );
      console.log("fetchTenantsResponses", fetchUtilityResponses);
      const { data: agentsDatas } = fetchUtilityResponses;

      let data = [];
      let x = 1;

      agentsDatas.forEach((agentsData) => {
        let {
          property_Name,
          reading_I_N,
          reading_amount,
          reading_createdBy,
          reading_date,
          reading_id,
          reading_nowReading,
          reading_payment_status,
          reading_prev_reading,
          reading_propertyID,
          reading_record,
          reading_status,
          reading_unitID,
          reading_utilityTypeID,
          reading_visibility,
          unit_name,
        } = agentsData;

        const datas = {
          _id: x,
          unit_name,
          property_Name,
          reading_I_N,
          reading_amount,
          reading_createdBy,
          reading_date,
          reading_id,
          reading_nowReading,
          reading_payment_status:reading_payment_status===1 ?'Paid':'Not Paid',
          reading_prev_reading,
          reading_propertyID,
          reading_record,
          reading_status,
          reading_unitID,
          reading_utilityTypeID,
          reading_visibility,
          //agent_status:agent_status===1?'active':'inactive',
        };
        data.push(datas);
        x = x + 1;
      });

      // if (status === 200) {
      //   //setPropertiesData(propertydatas);
      //   console.log("tenants", data);
         setTenantsData(data);
      // } else {
      //   //errorNotification("Unable to fetch Partners");
      // }
    } catch (ex) {
      //errorNotification("Unable to fetch Partners--");
      console.log({ ex });
    }
  }

  return (
    <>
      <PageTitleBreadCrumbs title="Manage Tenants" />

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
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"></div>
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
              <div className="t-header" style={{ color: "green" }}>
                Fixed Header
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <TableModal
                  stateChange={tableDataRefresh}
                  stateChanger={setTableDataRefresh}
                />
              </div>
              <TableComponent
                fields={displayUtilityCasefields}
                items={tenantsData}
                scopedSlots={{
                  ACTION: (item, index) => (
                    <div class="task-block">
                      <ul class="task-actions">
                        <li class="dropdown">
                          <a
                            href="#"
                            id="task-actions"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                          >
                            <i class="icon-more_vert"></i>
                          </a>
                          <div
                            class="dropdown-menu dropdown-menu-right"
                            aria-labelledby="userSettings"
                          >
                            <div className="header-profile-actions">
                              <a href="user-profile.html">
                                <i className="icon-user1"></i> My Profile
                              </a>
                              <a href="account-settings.html">
                                <i className="icon-settings1"></i> Account
                                Settings
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

export default mainLayoutAuth(ManageConsumption);

const TableModal = ({ stateChanger, stateChange }) => {
  const [tenantDetails, setTenantDetails] = useState({
    tenantDetailsInitialState,
  });
  const [utilityconsumptionDetails, setUtilityconsumptionDetails] = useState(
    utilityConsumptionDetailsInitialState
  );
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [unitsArrayData, setUnitsArrayData] = useState([]);
  const dispatch = useDispatch();
  const propertyData = useSelector((state) => state.properties.propertiesData);

  useEffect(() => {
    // Dispatch both fetchTenants and fetchProperties actions
    dispatch(fetchProperties(axiosPrivate));
  }, [dispatch]);

  const fetchUnits = async ({ currentTarget: input }) => {
    let value = input.value;

    try {
      const { data: response, status } = await axiosPrivate.get(
        `api/v1/units/occupiedUnitsproperyID/${value}`
      );
      const { data: getUnitResponses } = response;
      console.log("getUnitResponses---->", getUnitResponses);

      let data = [];
      let unitArray = [];
      let x = 1;

      getUnitResponses.forEach((getUnitResponse) => {
        let { unit_id, unit_name } = getUnitResponse;

        const unitArraydata = {
          label: unit_name,
          value: unit_id,
        };
        unitArray.push(unitArraydata);
        console.log("array data ", unitArray);
        x = x + 1;
      });

      if (status === 201 || status === 200) {
        setUnitsArrayData(unitArray);
        console.log("array data unitsArrayData ", unitsArrayData);
      } else {
        errorNotification("Tenant not created successfully");
      }
    } catch (ex) {
      warningNotification("Error creating Tenant ");
      console.log({ ex });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUtilityconsumptionDetails(utilityConsumptionDetailsInitialState);

    const checker = [];
    checker.push(utilityconsumptionDetails.reading_propertyID);
    checker.push(utilityconsumptionDetails.reading_unitID);
    checker.push(utilityconsumptionDetails.reading_utilityTypeID);
    checker.push(utilityconsumptionDetails.reading_nowReading);

    const check = checker.includes(0);
    if (check === false) {
      let payload = {
        reading_propertyID: utilityconsumptionDetails.reading_propertyID,
        reading_unitID: utilityconsumptionDetails.reading_unitID,
        reading_utilityTypeID: utilityconsumptionDetails.reading_utilityTypeID,
        reading_nowReading: utilityconsumptionDetails.reading_nowReading,
        reading_createdBy: auth.user,
      };
      console.log("payload", payload);

      try {
        const createUtilityResponse = await axiosPrivate.post(
          "api/v1/utilities/createConsumption",
          payload
        );
        const { status } = createUtilityResponse;
        console.log("createUtilityResplonse", createUtilityResponse);

        if (status === 201) {
          console.log("added");
          successNotification("Charge has been added");
        } else {
        }
      } catch (ex) {
        console.log({ ex });
        successNotification("something went wrong");
      }
    } else if (check === true) {
      warningNotification("you have some empty fields");
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setUtilityconsumptionDetails({
      ...utilityconsumptionDetails,
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
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#customModalTwo"
          >
            <i class="icon-droplet" style={{ fontSize: "18px" }}></i> Record
            Consumption
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="customModalTwo"
        tabindex="-1"
        role="dialog"
        aria-labelledby="customModalTwoLabel"
        aria-hidden="true"
      >
        <Modal
          modalheader={
            <>
              <h5 class="modal-title" id="customModalTwoLabel">
                Add Consumption
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </>
          }
          modalbody={
            <form onSubmit={handleSubmit}>
              <Select
                arrayData={propertyData}
                defaultSelectText="Select Propety Name"
                onChange={(e) => {
                  handleChange(e);
                  fetchUnits(e);
                }}
                name="reading_propertyID"
                id="reading_propertyID"
                labelText="Propety Name"
                value={utilityconsumptionDetails.reading_propertyID}
              />

              <Select
                arrayData={unitsArrayData}
                defaultSelectText="Select Unit Name"
                onChange={handleChange}
                name="reading_unitID"
                id="reading_unitID"
                labelText="Unit Name"
                inputType="test"
                value={utilityconsumptionDetails.reading_unitID}
              />

              <Select
                arrayData={charge_type_ArrayData}
                defaultSelectText="Select Utility"
                onChange={handleChange}
                name="reading_utilityTypeID"
                id="reading_utilityTypeID"
                labelText="Utility Type"
                value={utilityconsumptionDetails.reading_utilityTypeID}
              />

              <Input
                onChange={handleChange}
                name="reading_nowReading"
                id="reading_nowReading"
                labelText="Utility Reading"
                InputType="number"
                placeholder="Utility Reading"
                value={utilityconsumptionDetails.reading_nowReading}
              />

              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {" "}
                  <i class="icon-export"></i> Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                  data-dismiss="modal"
                >
                  {" "}
                  Save Data{" "}
                </button>
              </div>
            </form>
          }
        />
      </div>
    </>
  );
};
