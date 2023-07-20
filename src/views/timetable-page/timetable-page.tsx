import React from "react";
import styles from './timetable-page.module.scss'; 
import busSrc from '../../assets/ico_bus.png';
import trainSrc from '../../assets/ico_train.png';
const TimetablePage = () => {
  return (
    <ul className={styles.root}>
      <li><a href={'http://www.lapy.pl/index.php/aktualnosci/2259-od-14-marca-nastapi-zmiana-rozkladu-jazdy-pociagow?fbclid=IwAR1HWGpgHXenWEA2oNVm76n9yvByECK-zoCdX8wVBpvyaI7qzftrxJFO6ts'}><img src={trainSrc} alt="Szukam ksiażki odnośnik do strony" /></a></li>
      <li><a href={'http://portal.lapy.pl/strona/313,busy.html'}><img src={busSrc} alt="Szukam ksiażki odnośnik do strony" /></a></li>
    </ul>
  )
}
export default TimetablePage;
