import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { useDispatch, useSelector } from 'react-redux';

import React from "react";

function BarTemplate({ element,color }) {

    var displayData = [];

    element.elements.forEach((item, index) => {
        displayData.push({
            name: index,
            value: item
        })
    })

    return (
        <BarChart
            width={500}
            height={300}
            data={displayData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={color} />
        </BarChart>
    )
}

export default BarTemplate
