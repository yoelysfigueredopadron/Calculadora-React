import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => (
    <div className="result">
        {value}
    </div>

)

// validación de datos
Result.propTypes = {
    value: PropTypes.string.isRequired
}

// valores por defecto al componente Result
Result.defaultProps = {
    value: "0"
}

export default Result