import PropTypes from "prop-types";

export function SelectRequired({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
    id,
    divclassName,
    inputReq
  }) {
    return (
      <div class={divclassName}>
      <div class="form-group local-forms">
      <label>{{labelText}} {inputReq === true ?<span className="login-danger">*</span>:""}</label>
      <select
          id={id}
          name={name}
          type="select"
          onChange={onChange}
          value={value}
          className="form-control select"
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

    );
  }
  
  SelectRequired.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };


  export function Select1({
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
 
  export function Select({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
    id
  }) {
    return (
									<div class="form-group">
                  <label for="inputName">{labelText}</label>
										
                    <select class="form-control" 
                    name={name}
                    id={id}
                    onChange={onChange}
                    value={value}
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
								
    );
  }
  Select.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };

  export function SelectCharges({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
    id
  }) {
    return (
									<div class="form-group">
                  <label for="inputName">{labelText}</label>
										
                    <select class="form-control" 
                    name={name}
                    id={id}
                    onChange={onChange}
                    value={value}
                    >
												<option>
              {defaultSelectText
                ? `---------${defaultSelectText}--------`
                : "----------Select---------"}
            </option>
            {arrayData.map((data, index) => (
              <option key={index} value={data.charge_id || data.label}>
                {data.charge_name}
              </option>
            ))}
											</select>
									</div>
								
    );
  }
  SelectCharges.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
