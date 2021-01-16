import { formatPopulation } from '../utils/Utils.js'

const processData = (data) => {
    var languages = {}
    data.forEach((d,idx) => {
        var countryName = d['name']
        var countryPopulation = d['population']
        d['languages'].forEach((l, iidx) => {
            var languageKey = l['iso639_1']
            var languageVal = l['name']
            if (languageKey in languages) {
                languages[languageKey]['countries'].push({ [countryName]: countryPopulation })
            } else {
                languages[languageKey] = {
                    'name': languageVal,
                    'countries': [{
                        [countryName]: countryPopulation
                    }]
                }
            }
        })        
    });
    return Object.keys(languages).sort().reduce((obj, key) => {
        obj[key] = languages[key]
        return obj
    }, {})
}

const LanguageTable = (props) => {
    var countryByLanguages = processData(props.data)
    return (
        <div>
            <h1>Countries Grouped by Languages</h1>
            <table>
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>Countries</th>
                        <th>Populations (Millions)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(countryByLanguages).map((l, idx) =>
                        countryByLanguages[l]['countries'].map((c, iidx) => {
                            var lname = iidx === 0 ? countryByLanguages[l]['name'] : ""
                            var cname = Object.keys(c)
                            return (
                                <tr key={idx - iidx}>
                                    <td>{lname}</td>
                                    <td>{cname}</td>
                                    <td>{formatPopulation(c[cname])}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LanguageTable