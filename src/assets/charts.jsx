import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Sample data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const incomeData = [5000, 6000, 5500, 7000, 6500, 8000];
  const expensesData = [3000, 3500, 3200, 4000, 3800, 4200];
  const savingsData = [2000, 2500, 2300, 3000, 2700, 3800];

  // Gradient function
  const createGradient = (ctx, color1, color2) => {
    if (!ctx || !ctx.canvas) return color1; // Fallback if canvas context is not available
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  // Income Chart Data (Blue to Violet)
  const incomeChartData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)'); // Blue to Violet
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Expenses Chart Data (Red to Orange)
  const expensesChartData = {
    labels: months,
    datasets: [
      {
        label: 'Expenses',
        data: expensesData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(239, 68, 68, 0.8)', 'rgba(249, 115, 22, 0.8)'); // Red to Orange
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Savings/Investments Chart Data (Green to Teal)
  const savingsChartData = {
    labels: months,
    datasets: [
      {
        label: 'Savings/Investments',
        data: savingsData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(16, 185, 129, 0.8)', 'rgba(20, 184, 166, 0.8)'); // Green to Teal
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Trends Chart Data (Integrated with Unique Gradients)
  const trendsChartData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: 'rgba(59, 130, 246, 1)', // Blue
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(59, 130, 246, 0.6)', 'rgba(139, 92, 246, 0.6)'); // Blue to Violet
        },
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: expensesData,
        borderColor: 'rgba(239, 68, 68, 1)', // Red
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(239, 68, 68, 0.6)', 'rgba(249, 115, 22, 0.6)'); // Red to Orange
        },
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Savings/Investments',
        data: savingsData,
        borderColor: 'rgba(16, 185, 129, 1)', // Green
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx, 'rgba(16, 185, 129, 0.6)', 'rgba(20, 184, 166, 0.6)'); // Green to Teal
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4B5563', // Gray-600
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
      title: {
        display: true,
        text: 'Financial Trends',
        color: '#1F2937', // Gray-800
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // Gray-500
        },
      },
      y: {
        grid: {
          color: '#E5E7EB', // Gray-200
        },
        ticks: {
          color: '#6B7280', // Gray-500
        },
      },
    },
  };

  return (
    <div className="space-y-8 p-6">
      {/* Income Chart */}
      <div className="h-96">
        <Line data={incomeChartData} options={chartOptions} />
      </div>

      {/* Expenses Chart */}
      <div className="h-96">
        <Bar data={expensesChartData} options={chartOptions} />
      </div>

      {/* Savings/Investments Chart */}
      <div className="h-96">
        <Line data={savingsChartData} options={chartOptions} />
      </div>

      {/* Trends Chart */}
      <div className="h-96">
        <Line data={trendsChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Charts;