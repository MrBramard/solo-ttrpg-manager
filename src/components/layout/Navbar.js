import classes from './Navbar.module.css';

function Navbar(props) {
    return <header>
        <div>
            {props.appTitle}
        </div>
    </header>
}

export default Navbar;