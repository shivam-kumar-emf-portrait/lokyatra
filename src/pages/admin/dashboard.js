// src/pages/admin/Dashboard.js

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ registeredBuses = 24, liveBuses = 18 }) => {
  const navigate = useNavigate();

  // Calculate inactive buses
  const inactiveBuses = registeredBuses - liveBuses;

  const handleAddBus = () => {
    navigate("/addbus");
  };

  // Bar chart data
  const data = {
    labels: ['Registered', 'Live', 'Inactive'],
    datasets: [
      {
        label: 'Number of Buses',
        data: [registeredBuses, liveBuses, inactiveBuses],
        backgroundColor: ['#1877f2', '#28a745', '#dc3545'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Bus Status Overview' },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Registered Buses</div>
          <div className="stat-value">{registeredBuses}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Live Buses</div>
          <div className="stat-value">{liveBuses}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Inactive Buses</div>
          <div className="stat-value">{inactiveBuses}</div>
        </div>
        <div
          className="stat-card add-bus-card"
          onClick={handleAddBus}
          style={{ cursor: "pointer" }}
        >
          <FaPlus className="plus-icon" />
          <div className="add">Add New Bus</div>
        </div>
      </div>

      <div className="chart-container" style={{ maxWidth: '600px', marginTop: '40px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
