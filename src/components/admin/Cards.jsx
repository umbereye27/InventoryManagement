import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const course = [
  {
    nbr: 200,
    title: "Items-In",
    titlee: "All-items",
    icon: (
      <FontAwesomeIcon
        icon={faCartArrowDown}
        className="text-blue-900 text-xl"
      />
    ),
    links: "https://example.com/details1", // Example link
  },
  {
    nbr: 10,
    title: "Items-Out",
    titlee: "All-items",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        className="text-blue-900 text-xl"
      />
    ),
    links: "https://example.com/details2", // Example link
  },
  {
    nbr: 100,
    title: "All-items",
    titlee: "All-items",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        className="text-blue-900 text-xl"
      />
    ),
    links: "https://example.com/details3", // Example link
  },
];

const Cards = () => {
  const [countupNumbers, setCountupNumbers] = useState(
    Array(course.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountupNumbers((prevNumbers) =>
        prevNumbers.map((number, index) =>
          number < course[index].nbr ? number + 1 : number
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Sample data for the line chart
  const chartData = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "white",
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: [
        {
          grid: {
            display: false, // Hide x-axis grid lines
          },
          indexAxis: "y",
          ticks: {
            color: "transparent", // Hide y-axis ticks
          },
        },
      ],
      y: [
        {
          grid: {
            display: false, // Hide y-axis grid lines
          },
          ticks: {
            color: "transparent", // Hide y-axis ticks
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  return (
    <div
      className="card-container flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 delay-[500ms] duration-[600ms] mr-14 ml-20 mt-1   px-18"
      data-aos="fade-up"
    >
      {course.map((item, index) => (
        <div
          key={index}
          className="card mt-8 shadow-2xl  rounded-lg relative overflow-hidden"
        >
          <div className="flex flex-col justify-between  h-40 w-48">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <h1 className="text-4xl font-bold text-white mb-4">
                {countupNumbers[index]}
              </h1>
              <p className="text-white">{item.description}</p>
            </div>
            <div className="h-64 ">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
