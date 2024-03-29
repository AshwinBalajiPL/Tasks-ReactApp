import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onShowAdd,showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onShowAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title:"Tasks",
}

Header.propTypes = {
    title: PropTypes.string,
}


export default Header