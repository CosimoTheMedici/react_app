import PropTypes from "prop-types";

export function TextArea({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    rows,
    
    
   
  }) {
    return (
        <div class="card-body">
        <div class="form-group">
        <label for="inputName">{labelText}</label>
            <div class="custom-date-input">
            <textarea className="form-control is-valid" rows={rows} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>

            </div>
        </div>
    </div>
    );
  }
  
  TextArea.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
  };

export function TextArea1({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    rows,
    
    
   
  }) {
    return (
        <div class="form-group">
        <label for="inputName">{labelText}</label>
            <div class="custom-date-input">
            <textarea className="form-control is-valid" rows={rows} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>

            </div>
        </div>
    );
  }
  
  TextArea1.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
  };
