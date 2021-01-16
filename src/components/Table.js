import React, { useState } from "react"
import { convertArea, formatPopulation } from "../utils/Utils.js"

const Table = (props) => {
    const { data } = props

    const [sortedField, setSortedField] = useState(null)
    const [sortAsc, setSortAsc] = useState(true)

    let sortedData = data

    if (sortedField !== null) {
        sortedData.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return sortAsc ? -1 : 1;
            }
            if (a[sortedField] > b[sortedField]) {
                return sortAsc ? 1 : -1;
            }
            return 0;
        });

    }

    return (
        <div>
            <h1>World's Countries</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            <button type="button" onClick={() => {
                                setSortedField('name')
                                setSortAsc(!sortAsc)
                            }}>
                                Name
                            </button>
                        </th>
                        <th>Region</th>
                        <th>
                            <button type="button" onClick={() => {
                                setSortedField('area')
                                setSortAsc(!sortAsc)
                            }}>
                                Area (Miles^2)
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={() => {
                                setSortedField('population')
                                setSortAsc(!sortAsc)
                            }}>
                                Population (Millions)
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((d, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{d.name}</td>
                                <td>{d.region}</td>
                                <td>{convertArea(d.area)}</td>
                                <td>{formatPopulation(d.population)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table