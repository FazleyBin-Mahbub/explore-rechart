import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./MyLineChart.css";

const MyLineChart = () => {
  const activePercentage = [
    {
      name: "Tasnuva Khan",
      post: 200,
      messageReply: 400,
      comments: 400,
    },
    {
      name: "Muahammad Sanaullah",
      post: 300,
      messageReply: 398,
      comments: 221,
    },
    {
      name: "Asmaul Tania",
      post: 200,
      messageReply: 100,
      comments: 220,
    },
    {
      name: "Asma Yousuf",
      post: 270,
      messageReply: 308,
      comments: 211,
    },
    {
      name: "Nadim Sultan",
      post: 10,
      messageReply: 20,
      comments: 21,
    },
    {
      name: "Mehedi Hasan",
      post: 230,
      messageReply: 300,
      comments: 200,
    },
    {
      name: "Ziaur Rahman Juel",
      post: 349,
      messageReply: 440,
      comments: 100,
    },
  ];
  return (
    <div className="line-chart">
      <h1>Weekly Progress of Campus Ambassador</h1>
      <LineChart
        width={500}
        height={300}
        data={activePercentage}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="messageReply"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="post" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
