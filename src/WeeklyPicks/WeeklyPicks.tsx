import { useState } from "react";
import { form_results } from "../assets/weeklyResults"
import { ResultGrid } from "../ResultGrid/ResultGrid";
import { Contestants } from "../assets/contestants";


function csvResultsToArr(results: string[], columns: string[]) {
    const rows = results.slice(1).map((row) => row.split(','));
    let finalResults: { [key: string]: any } = {};
    for (let i = 1; i < columns.length; i++) {
        finalResults[columns[i]] = {};
        rows.forEach(row => {
            finalResults[columns[i]][row[0]] = row[i];
        })
    }
    return finalResults;
}

function getImageUrl(result:string) {
    if(result === 'Yes') {
        return './images/yes.png';
    }
    if(result === 'No')
        return './images/no.png';
    return `./images/${result}.jpg`;
}

export function WeeklyPicks() {
    const [curPick, setCurPick] = useState('Voted out')
    const results = form_results.trim().split('\n')
    const columns = results[0].split(',');
    const resultRef = csvResultsToArr(results, columns);
    const categories = columns.slice(1);
    return <div>
        <div>
            {categories.map((key) => {
                return <button key={key} className={`menu-button ${curPick === key ? 'selected' : ''}`} onClick={() => setCurPick(key)}>{key}</button>
            })}
        </div>
        <ResultGrid
            category={curPick}
            results={Contestants
                .map((cont) => {
                    return {
                        contestant: cont.name,
                        selections: [{
                            img: getImageUrl(resultRef[curPick][cont.name]),
                            className: '',
                        }]
                    }
                })}
        />
    </div>
}