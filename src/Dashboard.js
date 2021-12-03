import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import BarTemplate from "./BarTemplate";
import DataTemplate from "./DataTemplate";
import PieTemplate from "./PieTemplate";
import React from "react";
import {loadtable} from "./redux/action"
import randomColor from "randomcolor";

function Dashboard() {

    const state = useSelector(state => state.Chart);
    const dispatch = useDispatch();

    const API_URL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";

    useEffect(() => {
       if(state.length === 0)
        loadDataintoState()
    }, [])

    async function loadDataintoState(){
        var stateData = []
        await fetch(API_URL).then(response => response.json()).then(data => {
            stateData = data
        });
        dispatch(loadtable(stateData))
    }

    console.log(state)
    
    return (    
        <>
            {
                state.map((element, index) => {
                    if (element.type === "Bar") {
                        var color = randomColor({ luminosity: 'dark', })
                        return (
                            <div className="container">
                                <div className="leftView">
                                    <DataTemplate element={element} index={index} color={color} />
                                </div>
                                <div className="rightView">
                                    <div className="chartTitle" style={{ color: color }}>{element.type} Chart</div>
                                    <div>
                                        <BarTemplate element={element} index={index} color={color}  />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if (element.type === "Pie") {
                        var color = randomColor({ luminosity: 'dark', })
                        return (
                            <div className="container">
                                <div className="leftView">
                                    <DataTemplate element={element} index={index} color={color}  />
                                </div>
                                <div className="rightView">
                                    <div className="chartTitle" style={{ color: color }}>{element.type} Chart</div>
                                    <div>
                                        <PieTemplate element={element} index={index} color={color} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else
                        return (<></>)
                })
            }
        </>
    )
}

export default Dashboard
