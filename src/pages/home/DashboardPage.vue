<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <div
      class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          {{ dashboard.total_products }}
        </p>
        <p class="text-black">Products</p>
      </div>   
    </div>
    <div
      class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          {{ dashboard.users }}
        </p>
        <p class="text-black">Users</p>
    </div>  
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          {{ dashboard.total_orders }}
        </p>
        <p class="text-black">Orders</p>
    </div> 
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          {{ dashboard.total_payments }}
        </p>
        <p class="text-black">Payments</p>
    </div>   
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          &#x20B9; {{ Number(dashboard.total_order_amount).toLocaleString() }}
        </p>
        <p class="text-black">Order Amount</p>
    </div> 
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    >
    <div class="flex flex-col h-full items-center justify-center bg-[#8E7DBE]">
        <p class="text-3xl">
          &#x20B9; {{ Number(dashboard.total_payment_amount).toLocaleString() }}
        </p>
        <p class="text-black">Payment Amount</p>
    </div> 
    </div>
  </div>
  <div
    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
  >
  <div id="chart"></div>
</div>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    >
    <div id="piechart"></div>
  </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    >
    <div id="linechart"></div>
  </div>
    <!-- <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
  </div>
  <div
    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
  ></div>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div> -->
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'pinia';
import { useDashboardStore } from '@/stores/DashboardStore'; 
import ColumnChart from './ColumnChart.vue';
import ApexCharts from 'apexcharts';
import { HandThumbDownIcon } from '@heroicons/vue/20/solid';

export default {
  components: {
    ColumnChart,
    ApexCharts,
  },

  data() {
    return {
      dashboard: {},
      monthlySales: [],
      data: [],  
      category: [],
      categoryPercentage: [],
      monthlyProductCount: [],
    }
  },

  methods: {
    fetchDashboardDetails() {
      this.getDashboardDetails().then((res) => {
        this.dashboard = res;
        this.monthlySales = res.monthly_sales;
        this.data = res.monthly_sales.map((item) => parseInt(item.total_sales));
        console.log(res);
        this.category = res.category_percentage.map((item) => item.category_name);
        this.categoryPercentage = res.category_percentage.map((item) => parseFloat(item.percentage));
        this.monthlyProductCount = res.monthly_product_counts;
        this.createBarChart();
        this.createPieChart();
        this.createLineChart();
      }).catch((err) => {
        console.log(err);
      })
    },

    createBarChart() {
      let name = 'Inflation';
      let data = [...this.data];
      let series = [];
      series.push({name: name, data :data});
      var options = {
          series: series,
          chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Monthly Sales',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();  
    },

    createPieChart() {
      let series = [...this.categoryPercentage];
      let label = [...this.category];

      let options = {
          series: series,
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: label,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#piechart"), options);
        chart.render();
    },

    createLineChart() {
      let data = new Array(12).fill(0);
      for (a of this.monthlyProductCount) {
        data[a.month - 1] = a.count;
      }
      console.log(data);
      var options = {
          series: [{
            name: "Desktops",
            data: data
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#linechart"), options);
        chart.render();
    }
  },

  mounted() {
    this.fetchDashboardDetails();
  },

  computed: {
    ...mapState(useDashboardStore, ['getDashboardDetails']),
  }
}
</script>