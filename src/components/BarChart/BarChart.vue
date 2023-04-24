<template>
  <div  id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {
      series: [
        {
          color: "#2ca493",
          name: "",
          //   data: [28, 29, 33, 36, 32, 32, 33, 28, 30, 30, 26, 32],
          data: [
           
            {
              x: "00:00",
              y: 28,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "02:00",
              y: 29,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "04:00",
              y: 33,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "06:00",
              y: 36,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "08:00",
              y: 32,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "10:00",
              y: 32,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
            {
              x: "12:00",
              y: 33,
              imagePath:
                "https://avatar-ex-swe.nixcdn.com/song/2023/02/27/2/9/a/2/1677468732364_640.jpg",
              name: "Ngoài 30",
              back: "#2ca493",
            },
          ],
        },
        {
          color: "#4a87da",
          name: "",

          data: [
            // 22,24
            {
              x: "00:00",
              y: 18,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "02:00",
              y: 15,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "04:00",
              y: 13,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "06:00",
              y: 16,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "08:00",
              y: 12,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "10:00",
              y: 12,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
            {
              x: "12:00",
              y: 18,
              imagePath:
                "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/e/f/9cef213c19ead72f3d7c549e9f66af16.jpg",
              name: "Phố Hoa Lệ",
              back: "#fda123",
            },
          ],
        },
        {
          color: "#b23b57",
          data: [
            // 22,24
            {
              x: "00:00",
              y: 28,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "02:00",
              y: 25,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "04:00",
              y: 20,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "06:00",
              y: 23,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "08:00",
              y: 28,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "10:00",
              y: 22,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
            {
              x: "12:00",
              y: 24,
              imagePath:
                "https://gocdoday.com/wp-content/uploads/2023/02/bat-tinh-yeu-len.jpg",
              name: "Bật tình yêu lên",
              back: "#b23b57",
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        title: {
          text: undefined,
          align: "left",
        },
        grid: {
          borderColor: "transparent",
          row: {
            colors: ["transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 6,
          shape: "circle",
          colors: ["#00E396", "#4a87da", "#FF4560"],
          strokeColors: "#fff",
          strokeWidth: 2,
          opacity: 0.9,
        },
        xaxis: {
          type: "category",
          labels: {
            style: {
              colors: "#f1f1f1",
            },
          },
          categories: [
            "00:00",
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            // "14:00",
            // "16:00",
            // "18:00",
            // "20:00",
            // "22:00",
          ],

          lines: {
            show: true,
          },
        },
        yaxis: {
          title: {
            text: undefined,
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "42px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-title",
            },
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },

          min: 5,
          max: 40,
        },

        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
          show: false,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }:{ series:any, seriesIndex:any, dataPointIndex:any, w:any }) {
            var data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            return `
        <div class="custom-tooltip  ">
            <div class="flex p-2 min-w-[140px] items-center ] bg-[${data.back}]" >
                
                <img class="h-10 w-10 rounded-sm" src="${data.imagePath}"/>
                <span class=" block ml-2 font-semibold">${data.name}</span>
                </div>
       
        </div>
      `;
          },
        },
      },
    };
  },
};
</script>
<style>
.vue-apexcharts {
  min-width: 0 !important;
  min-height: 0 !important;
}
</style>
