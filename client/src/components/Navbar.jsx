import './scss/navbar.scss'

const Navbar = (props) => {
    return (
        <div id="navigation-bar">
            <nav>
                {props.children}
            </nav>
        </div>
    )
}

export default Navbar