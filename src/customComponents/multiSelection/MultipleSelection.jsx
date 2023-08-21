
import PropTypes from "prop-types";


function MultipleSelection({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
  }) {
    return (
        <div class="multipleSelection">
        <div class="selectBox">
          <p class="mb-0">
            <i class="fas fa-user-plus me-1 select-icon"></i>
            Select User
          </p>
          <span class="down-icon"
            ><i class="fas fa-chevron-down"></i></span>label
        </div>
        <div id="checkBoxes">
          <form action="#">
            <p class="checkbox-title">Customer Search</p>
            <div class="form-custom">
              <input
                type="text"
                class="form-control bg-grey"
                placeholder="Enter Customer Name"
              />
            </div>
            <div class="selectBox-cont">
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Brian Johnson
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Russell Copeland
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Greg Lynch
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> John Blair
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Barbara Moore
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Hendry Evan
              </label>
              <label class="custom_check w-100">
                <input type="checkbox" name="username" />
                <span class="checkmark"></span> Richard Miles
              </label>
            </div>
            <button type="submit" class="btn w-100 btn-primary">
              Apply
            </button>
            <button type="reset" class="btn w-100 btn-grey">
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  MultipleSelection.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
  //export default MultipleSelection;

  function Select1({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
    id
  }) {
    return (
      <div class="card-body">
									<div class="form-group">
                  <label for="inputName">{labelText}</label>
										<div class="custom-date-input">
                    <select class="form-control selectpicker" 
                    name={name}
                    id={id}
                    //type="select"
                    onChange={onChange}
                    value={value}
                    className="form-control-rounded"
                    >
												<option>
              {defaultSelectText
                ? `---------${defaultSelectText}--------`
                : "----------Select---------"}
            </option>
            {arrayData.map((data, index) => (
              <option key={index} value={data.value || data.label}>
                {data.label}
              </option>
            ))}
											</select>
										</div>
									</div>
								</div>
    );
  }
  Select1.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
 


