import {useState, useEffect, useRef, React} from 'react';
import './Navbar.css';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const refMenu = useRef();

    const changeToggle = () => {
        setToggle(!toggle);
        refMenu.current.childNodes.forEach(child => {
            child.classList.toggle('active');
        });
    }

    useEffect(() => {
        const resizeWindow = () => {
            setWidthWindow(window.innerWidth);
        }
        
        window.addEventListener('resize', resizeWindow);

        return () => {
            window.removeEventListener('resize', resizeWindow);
        }
    }, [])

    return (
        <header>
            <nav className='navHeader'>
                {
                    (toggle || widthWindow > 768) && 
                    (
                        <ul>
                            <li><a href="">Accueil</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    )
                }
            </nav>
            {
                widthWindow < 768 &&
                (
                    <div className="menu" onClick={changeToggle} ref={refMenu}>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </div>
                )
            }
        </header>
    )
}
