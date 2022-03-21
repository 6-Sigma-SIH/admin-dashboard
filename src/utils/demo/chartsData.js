export const doughnutLegends = [
  { title: 'Depression', color: 'bg-blue-500' },
  { title: 'Anxiety', color: 'bg-teal-600' },
  { title: 'ADHD', color: 'bg-purple-600' },
]

export const lineLegends = [
  { title: 'Depression', color: 'bg-teal-600' },
  { title: 'Anxiety', color: 'bg-purple-600' },
  { title: 'ADHD', color: 'bg-blue-500' },
]

export const barLegends = [
  { title: 'Shoes', color: 'bg-teal-600' },
  { title: 'Bags', color: 'bg-purple-600' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [22, 24, 16],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Depression', 'Anxiety', 'ADHD'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}

export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Depression',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: 'Anxiety',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [24, 50, 64, 74, 52, 51, 65],
      },
      {
        label: 'ADHD',
        backgroundColor: '#c026d3',
        borderColor: '#c026d3',
        data: [47, 52, 30, 34, 37, 53, 57],
        fill: false,
      }
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Shoes',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Bags',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}
