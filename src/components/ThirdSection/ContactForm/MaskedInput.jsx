import PropTypes from "prop-types";
import React from "react";
import { IMaskInput } from "react-imask";

const MaskedInput = ({
  label,
  mask,
  name,
  placeholder = "",
  required = false,
}) => {
  return (
    <label className="masked-input">
      <span>
        {label} {required ? "*" : ""}
      </span>
      <IMaskInput
        mask={mask}
        definitions={{
          "#": /[29]/,
        }}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

MaskedInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default MaskedInput;
