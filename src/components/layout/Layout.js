import Navbar from './Navbar';

function Layout(props) {
    return <div>
        <Navbar appTitle="Solo Manager"/>
        {props.children}
    </div>
}

export default Layout;