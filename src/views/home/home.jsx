import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import './home.css';
import * as echarts from 'echarts';

export default defineComponent({
  props: {},
  setup(props, {}) {
    const lineChartDom = ref(null);
    const initChart = () => {
      var myChart = echarts.init(lineChartDom.value);
      var option;

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
      };

      option && myChart.setOption(option);
    };

    onMounted(() => {
      initChart();
    });

    return () => (
      <div className="home-page">
        <div ref={lineChartDom}></div>

        <button
          onClick={(evt) => {
            // safari 全屏
            if (document.webkitRequestFullscreen) {
              lineChartDom.value.webkitRequestFullscreen();
            }else{
              lineChartDom.value.requestFullscreen();
            }
          }}
        >
          全屏
        </button>
      </div>
    );
  },
});
