import React from "react";

const CurrentYear = ({ startYear }) => {
  const currentYear = new Date().getFullYear();
  const yearDifference = currentYear - startYear;

  return <span>{yearDifference}</span>;
};

export default CurrentYear;
