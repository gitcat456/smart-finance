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
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const incomeData = [5000, 6000, 5500, 7000, 6500, 8000];
  const expensesData = [3000, 3500, 3200, 4000, 3800, 4200];
  const savingsData = [2000, 2500, 2300, 3000, 2700, 3800];

  const createGradient = (ctx, color1, color2) => {
    if (!ctx || !ctx.canvas) return color1;
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#374151',
          font: {
            size: 12,
            weight: '600',
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleFont: {
          size: 14,
          weight: '600'
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        usePointStyle: true,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#6B7280'
        }
      },
      y: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false
        },
        ticks: {
          color: '#6B7280',
          callback: (value) => `$${value}`
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: '#FFFFFF',
        borderWidth: 2
      },
      line: {
        tension: 0.3,
        borderWidth: 2
      },
      bar: {
        borderRadius: 6,
        borderSkipped: 'bottom'
      }
    }
  };

  const charts = [
    {
      type: 'line',
      title: 'Monthly Income',
      data: {
        labels: months,
        datasets: [{
          label: 'Income',
          data: incomeData,
          borderColor: '#3B82F6',
          backgroundColor: (ctx) => createGradient(ctx.chart.ctx, 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.05)'),
          fill: true
        }]
      },
      options: {
        ...baseOptions,
        plugins: {
          ...baseOptions.plugins,
          title: {
            display: true,
            text: 'Monthly Income',
            color: '#111827',
            font: {
              size: 16,
              weight: '700'
            }
          }
        }
      }
    },
    {
      type: 'bar',
      title: 'Monthly Expenses',
      data: {
        labels: months,
        datasets: [{
          label: 'Expenses',
          data: expensesData,
          backgroundColor: (ctx) => createGradient(ctx.chart.ctx, '#EC4899', '#F97316'),
          borderColor: (ctx) => createGradient(ctx.chart.ctx, '#EC4899', '#F97316'),
          borderWidth: 0
        }]
      },
      options: {
        ...baseOptions,
        plugins: {
          ...baseOptions.plugins,
          title: {
            display: true,
            text: 'Monthly Expenses',
            color: '#111827',
            font: {
              size: 16,
              weight: '700'
            }
          }
        }
      }
    },
    {
      type: 'line',
      title: 'Savings & Investments',
      data: {
        labels: months,
        datasets: [{
          label: 'Savings',
          data: savingsData,
          borderColor: '#10B981',
          backgroundColor: (ctx) => createGradient(ctx.chart.ctx, 'rgba(16, 185, 129, 0.2)', 'rgba(16, 185, 129, 0.05)'),
          fill: true
        }]
      },
      options: {
        ...baseOptions,
        plugins: {
          ...baseOptions.plugins,
          title: {
            display: true,
            text: 'Savings & Investments',
            color: '#111827',
            font: {
              size: 16,
              weight: '700'
            }
          }
        }
      }
    },
    {
      type: 'line',
      title: 'Financial Overview',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Income',
            data: incomeData,
            borderColor: '#3B82F6',
            backgroundColor: 'transparent'
          },
          {
            label: 'Expenses',
            data: expensesData,
            borderColor: '#EC4899',
            backgroundColor: 'transparent'
          },
          {
            label: 'Savings',
            data: savingsData,
            borderColor: '#10B981',
            backgroundColor: 'transparent'
          }
        ]
      },
      options: {
        ...baseOptions,
        plugins: {
          ...baseOptions.plugins,
          title: {
            display: true,
            text: 'Financial Overview',
            color: '#111827',
            font: {
              size: 16,
              weight: '700'
            }
          }
        }
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl">
      {charts.map((chart, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="h-80">
            {chart.type === 'line' ? (
              <Line data={chart.data} options={chart.options} />
            ) : (
              <Bar data={chart.data} options={chart.options} />
            )}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{chart.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Charts;