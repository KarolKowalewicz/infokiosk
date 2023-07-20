import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { data } from "../../const/const-data"
import styles from './links-page.module.scss'; 
enum ListPages {
  GUESTHOUSE = 'guesthouse',
  TRAILS = 'trails'
}
interface IProps {
  selector: ListPages
}
const LinksPage = (props: IProps) => {
  const listLinks = props.selector && data[props.selector];
  return (
    <ul className={styles.root}>{listLinks?.map((value) => <li><a className={styles.link} href={value}>{value}</a></li>)}</ul>
  )
};

export default LinksPage;