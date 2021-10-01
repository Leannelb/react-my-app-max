import { React } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    //console.log('props passed into Chart >>>>>> ', props);

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // console.log('dataPointValues Chart ', dataPointValues)
    const totalMaximum = Math.max(...dataPointValues);
    // console.log('totalMaximum ', totalMaximum);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    key={dataPoint.id}
                />)}
        </div>
    )
};

export default Chart;