import { Legend, Pie, PieChart, Tooltip } from "recharts";

import React from "react";

function PieTemplate({ element,color }) {

    var displayData = [];

    element.elements.forEach((item, index) => {
        displayData.push({
            name: index,
            value: item
        })
    })

    return (
        <PieChart width={500} height={400}
                     margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5
        }}>
            <Pie
                dataKey="value"
                data={displayData}
                cx={200}
                cy={200}
                outerRadius={80}
                fill={color}
                label
            />
            <Tooltip />
        </PieChart>
    )
}

export default PieTemplate
