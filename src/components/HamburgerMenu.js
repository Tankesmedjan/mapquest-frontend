import { elastic as Menu } from 'react-burger-menu'
import {Component} from "react";

class HamburgerMenu extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <div id="outer-container">
            <Menu
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                disableAutoFocus
                customBurgerIcon={ <img src="/images/icons/burger2.svg" /> }
                right>
                <main id="page-wrap" className="page-wrap">
                <p><a id="home" className="menu-item" href="/">Home</a></p>
                <p><a id="about" className="menu-item" href="/about">About</a></p>
                <p><a id="contact" className="menu-item" href="/contact">Contact us</a></p>
                <p><a id="info" className="menu-item" href="/information">How it works</a></p>
                </main>
            </Menu>
            </div>
        );
    }
}
export default HamburgerMenu