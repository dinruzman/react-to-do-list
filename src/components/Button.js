import PropTypes from 'prop-types'

const Button = ({color,text,onClickprop}) => {
    return (
    <button 
        onClick={onClickprop}
        style={{backgroundColor:color}} 
        className="btn"
    >
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'red',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickprop: PropTypes.func,
}

export default Button