import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/dashbaord.css";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
const financeHistory = [
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: "Fans",
    Quantity: "2",
    cost: "$250",
    date: "4/5/2023",
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: "Water",
    Quantity: "4",
    cost: "$20",
    date: "4/1/2024",
  },
];

const History = () => {
  return (
    <div className="finance-history-table px-4">
      <h1
        className="header--title  delay-[300ms] duration-[600ms]  mt-0   mb-4   ml-12 text-gray-900  font-semi-medium"
        data-aos="fade-down"
      >
        Report
      </h1>

      <table className=" fin-table mt-2">
        <thead>
          <tr data-aos="fade-up">
            <th>Item</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {financeHistory.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
              data-aos="fade-down"
            >
              <td className="icon-cell">{item.image}</td>
              <td>{item.name}</td>
              <td>{item.Quantity}</td>
              <td>{item.cost}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
