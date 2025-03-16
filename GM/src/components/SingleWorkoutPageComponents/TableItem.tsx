import React from "react";

interface Props {
  item: number;
}
const TableItem = ({ item }: Props) => {
  return (
    <>
      <td className="table__item table__column-value">{item}</td>
    </>
  );
};

export default TableItem;
