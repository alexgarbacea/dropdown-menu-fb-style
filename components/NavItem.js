import {React, useEffect, useCallback, useState} from 'react';

function NavItem(props) {

    const [open, setOpen] = useState(false);

    //let btnClass = useCallback(() => open && props.children ? "icon-button-selected" : "icon-button")[open]);

    const btnClass = useCallback(
        () => {
            if (open && props.dropdownMenu) {
                return "icon-button-selected";
            }
            else {
                return "icon-button";
            }
        },
        [open, props.dropdownMenu],
    );

    useEffect(() => {
        let getDropdown = document.querySelector(".dropdown");
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (open && getDropdown && !getDropdown.contains(e.target)) {
                setOpen(false)
            }

        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])

    return (
        <li className="nav-item">
            <a href="#" className={btnClass()} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.dropdownMenu}

        </li>
    );
}

export default NavItem;