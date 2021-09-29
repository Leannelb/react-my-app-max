import { React } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    console.log('props from chart', props);
    console.log('props from chart', props.dataPoints);
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    )
};

export default Chart;