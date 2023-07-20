import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../views/home/home';
import LinksPage from '../views/links-page/links-page';
import TimetablePage from '../views/timetable-page/timetable-page';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

enum ListPages {
  GUESTHOUSE = 'guesthouse',
  TRAILS = 'trails'
}
const Routes = () => {
  const location = useLocation();
  console.log(location)
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
      >
    <Switch>
      <Route key={'home'} path="/" exact>
        <HomePage />
      </Route>
      <Route key={'guesthouse'} path="/guesthouse/">
        <LinksPage selector={ListPages.GUESTHOUSE} />
      </Route>
      <Route key={'trails'} path="/trails/">
        <LinksPage selector={ListPages.TRAILS} />
      </Route>
      <Route key={'trails'} path="/timetable/">
        <TimetablePage />
      </Route>
    </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
