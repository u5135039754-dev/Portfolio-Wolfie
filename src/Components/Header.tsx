import { HashLink } from "react-router-hash-link"

export const Header = () => {
  
  return (
    <header className="header section">
      <h1 className="header__title">Wolfie</h1>
      <div className="top-bar">
        <nav className="nav" aria-label="Main navigation">
          <ul className="nav__list">
            <li className='nav__item nav__home'>
              <HashLink smooth to="/#" className='nav__link'>Home</HashLink>
            </li>
            <li className='nav__item'>
              <HashLink  smooth to="/#projects" className='nav__link'>Projects</HashLink>
            </li>
            <li className='nav__item nav__skills'>
              <HashLink  smooth to="/#skills" className='nav__link'>Skills</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}