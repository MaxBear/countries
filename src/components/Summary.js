import React from "react"
import { formatPopulation } from '../utils/Utils.js'

const Summary = (props) => {
    const { data } = props

    const computeData = (data) => {
        var minArea, maxArea
        var minCountry, maxCountry
        var totalPopulation = 0
        var isSet = false
        data.forEach((d, idx) => {
            totalPopulation += parseInt(d["population"])
            var area = d['area']
            var name = d['name']
            if (area !== null) {
                if (!isSet) {
                    minArea = area
                    maxArea = minArea
                    minCountry = name
                    maxCountry = minCountry
                    isSet = true
                } else {
                    if (area > maxArea) {
                        maxArea = area
                        maxCountry = name
                    }
                    if (area < minArea) {
                        minArea = area
                        minCountry = name
                    }
                }
            }
        });
        return [formatPopulation(totalPopulation / data.length), minCountry, maxCountry]
    }

    return (
        <div>
            <h1>World Average Population: {computeData(data)[0]} million</h1>
            <h1>Smallest Country: {computeData(data)[1]}</h1>
            <h1>Largest Country: {computeData(data)[2]}</h1>
        </div>
    )
}

export default Summary