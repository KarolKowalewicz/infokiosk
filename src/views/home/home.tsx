import React from "react";
import styles from './home.module.scss'; 
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo_blue.png';
import searchBookSrc from '../../assets/ico_szukamksiazki.png';
import lapySrc from '../../assets/ico_lapy.png';
import powiatSrc from '../../assets/ico_powiat.png';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <div className={styles.logo}><img src={logoSrc} alt="Biblioteka Łapy" /></div>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to={'/guesthouse'}>Baza noclegowa Łapy i okolice</Link></li>
            <li><a href={'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/start/#/'}><img src={searchBookSrc} alt="Szukam ksiażki odnośnik do strony" /></a></li>
            <li><a href={'https://www.bibliotekalapy.pl/'} className={styles.logoLibrary}><img src={logoSrc} alt="Biblioteka Łapy" /></a></li>
            <li><a href={'https://www.lapy.pl/'}><img src={lapySrc} alt="" />Urząd miejski w Łapach</a></li>
            <li><a href={'https://bibliotekalapy.pl/images/uploads/4323/Kalendarz%20-%20Biblioteka%20%C5%81apy.pdf'}>Kalendarz</a></li>
            <li><a href={'https://www.powiatbialostocki.pl/'}><img src={powiatSrc} alt="link Powiat Białostocki" />Powiat Białostocki</a></li>
            <li><Link to={'/trails'}>Szlaki turystyczne</Link></li>
            <li><Link to={'/timetable'}>Rozkład Jazdy</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;