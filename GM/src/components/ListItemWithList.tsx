import React from "react";
import { Link } from "react-router";
interface Props {
  items?: string[];
  workout?: Workout;
  styles: {
    li?: string;
  };
}
const ListItemWithList = ({ items, workout, styles }: Props) => {
  return (
    <li className={styles.li}>
      <Link to="/">
        <li>{workout}</li>
      </Link>
    </li>
  );
};

export default ListItemWithList;
