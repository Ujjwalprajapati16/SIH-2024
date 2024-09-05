import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample disaster data
const disasterData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], // Monthly categories
  datasets: [
    {
      label: "Disaster Incidents",
      data: [15, 30, 20, 25, 40, 35, 50, 60, 4], // Sample data
      borderColor: "#FF5733",
      backgroundColor: "rgba(255, 87, 51, 0.2)", // Transparent fill color
      tension: 0.4, // Smooth line
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Disaster Incidents",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function DisasterChart() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <GlobeAltIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Disaster Incidents Overview
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Track the number of disaster incidents reported each month.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Line data={disasterData} options={chartOptions} />
      </CardBody>
    </Card>
  );
}
