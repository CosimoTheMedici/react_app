import PropTypes from "prop-types";

export function BaseInput1({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    
    
   
  }) {
    return (
    <div class="form-group">
    <label for="inputName">{labelText}</label>
    <input type={inputType} className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  </div>
    );
  }
  
  BaseInput1.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
export function BaseInput({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    
    
   
  }) {
    return (
								<div class="card-body">
									<div class="form-group">
                  <label for="inputName">{labelText}</label>
										<div class="custom-date-input">
                    <input type={inputType} className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
										</div>
									</div>
								</div>
   
    );
  }
  
  BaseInput.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };

export function Input({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    
    
   
  }) {
    return (
								

          <div class="form-group">
          <label for="recipient-name" class="col-form-label">{labelText}:</label>
          <input type={inputType} className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
          </div>
   
    );
  }
  
  Input.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array,
  };

export function InputLable({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    classname
    
   
  }) {
    return (
      <div class="form-group">
      <label for="inputName">{labelText}</label>
      <input type={inputType} class={classname} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
    );
  }
  
  InputLable.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };

export function InputDateRequired({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    divclassName,
    inputReq,
    classname,
    inputlable
   
  }) {
    return (
      <>
      <div class="form-group">
        <input class={classname} placeholder="Input - Is Invalid" type="text"/>
        <div class="invalid-feedback">This is required</div>
      </div>
      
      <div className={divclassName}>
      <div className="form-group local-forms calendar-icon">
      <label>{{labelText}} {inputReq === true ?<span className="login-danger">*</span>:""}</label>
      <input 
             type={inputType}
             className="form-control datetimepicker" 
             placeholder={placeholder}
             onChange={onChange}
             name={name}
             id={id}
             value={value}
        />
      </div>
      </div>
      </>
    );
  }
  
  InputDateRequired.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
