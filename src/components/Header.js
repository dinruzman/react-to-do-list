import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,changeButton}) => {
    return (
        <header className="header">
            <h1>{title} : Task Tracker</h1>
            <Button color={changeButton ? "red" : "blue"} text={changeButton ? "Close" : "Add"} onClickprop={onAdd}/>
        </header>
    )
}

//default props if not assign any
Header.defaultProps = {
    //title : "9",
}

// to make it robust (assigning the type)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black',
// }

export default Header