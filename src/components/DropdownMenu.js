import { React, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

//icons
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    const dropdownRef = useRef();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const calcHeight = el => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <div>
                <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className="icon-button">{props.leftIcon}</span>
                    {props.children}
                    <span className="icon-right">{props.rightIcon}</span>
                </a>
            </div>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={250}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >Settings</DropdownItem>
                </div>
            </CSSTransition>

            {/*SECOND MENU \/ */}
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={250}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Settings</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;