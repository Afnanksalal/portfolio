import Logo from '../../assets/favicon.webp'
import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { handleNavItemClick, closeMenu, toggleMenu } from '../../utility/NavUtility'

const Nav = () => {
    const [ prevScrollPos, setPrevScrollPos ] = useState(0);
    const [ isNavbarVisible, setIsNavbarVisible ] = useState(false);
    const [ activeHeadNav, setActiveHeadNav ] = useState('')
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setIsNavbarVisible(true);
            } else if ( currentScrollPos === 0 ) {
                setIsNavbarVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${isNavbarVisible ? 'sticky' : ''}`}>
            <div className={`header__nav-menu-overlay ${isMenuOpen ? 'show' : ''}`} 
                onClick={() => closeMenu(isMenuOpen, setIsMenuOpen)} onTouchStart={() => closeMenu(isMenuOpen, setIsMenuOpen)}
            ></div>
            <div className="header__nav-content">
                <div className="nav__logo" data-aos='zoom-in'>
                    <a href="#header" 
                        onClick={(e) => handleNavItemClick(e, 'header', setActiveHeadNav, setIsMenuOpen)}
                    >
                        <img src={Logo} alt="logo" width={100} />
                    </a>
                </div>
                <ul className={`header__nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='100'
                    >
                        <a href="#header" 
                            onClick={(e) => handleNavItemClick(e, 'header', setActiveHeadNav, setIsMenuOpen)} 
                            className={activeHeadNav === 'header' ? 'active' : ''}
                        >
                            Home
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='200'
                    >
                        <a href="#about" 
                            onClick={(e) => handleNavItemClick(e, 'about', setActiveHeadNav, setIsMenuOpen)} 
                            className={activeHeadNav === 'about' ? 'active' : ''}
                        >
                            About
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='300'
                    >
                        <a href="#projects" 
                            onClick={(e) => handleNavItemClick(e, 'projects', setActiveHeadNav, setIsMenuOpen)} 
                            className={activeHeadNav === 'projects' ? 'active' : ''}
                        >
                            Projects
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='400'
                    >
                        <a href="#contact" 
                            onClick={(e) => handleNavItemClick(e, 'contact', setActiveHeadNav, setIsMenuOpen)} 
                            className={activeHeadNav === 'contact' ? 'active' : ''}
                        >
                            Contact
                        </a> 
                    </li>
                    <li className='header__nav-item'>
                        <div className='header__nav-social'>
                            <a href="https://www.instagram.com/afnanksalal/" target='_blank' rel="noreferrer" aria-label='Get to know more about me on instagram'>
                                <BsInstagram />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://www.linkedin.com/in/afnanksalal/" target='_blank' rel="noreferrer" aria-label='Get to know more about me on linkedin'>
                                <BsLinkedin />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://twitter.com/afnanksalal" target='_blank' rel="noreferrer" aria-label='Get to know more about me on twitter'>
                                <BsTwitter />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://github.com/afnanksalal" target='_blank' rel="noreferrer" aria-label='Get to know more about me on github'>
                                <BsGithub />
                            </a>
                        </div>
                    </li>
                    <li className='header__nav-item'>
                        <small>
                            Afnan K Salal &copy; 2024
                        </small>
                    </li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'show' : ''}`} 
                    onClick={() => toggleMenu(isMenuOpen, setIsMenuOpen)}
                >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav
