import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import {changetable} from "./redux/action"
import { useState } from 'react'

function DataTemplate({ color, index }) {

    const [isEdit, setIsEdit] = useState(false)
    const state = useSelector(state => state.Chart);
    const dispatch = useDispatch();

    const [fragment, setFragment] = useState(state[index].elements)
    console.log(fragment)

    function handleEditChange() {
        setIsEdit(!isEdit)
    }

    function handleSubmit() {
        console.log("Submit")

        // console.log(tempArray)
        // dispatch(changetable({
        //     value : tempArray,
        //     tableIndex : index
        // }))
    }

    function handleChange(e, idx) {
        e.persist();
        var tempArray = fragment
        tempArray[idx] = parseInt(e.target.value)
        console.log(tempArray)
        setFragment(()=>tempArray)
    }

    return (
        <div className="dataContainer">
            <div style={{ color: color }} className="dataTitle">
                Data Template
            </div>
            <div>
                {
                    fragment.map((item, idx) => {
                        return (
                            <div className="labelGroup">
                                <div className="labelText">
                                    Value :
                                </div>
                                <div className="labelValue">
                                    <input className="labelInput" type="text" value={item} disabled={!isEdit} onChange={e => handleChange(e, idx)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="buttonGroup">
                <button className="button" style={{ borderColor: color, color: color }} onClick={handleEditChange}>Edit</button>
                {
                    isEdit && <button className="button" style={{ borderColor: color, color: color }} onClick={handleSubmit}>Submit</button>
                }
            </div>
        </div>
    )
}

export default DataTemplate
