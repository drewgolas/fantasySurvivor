import { useState } from "react";
import { ResultGrid } from "../ResultGrid/ResultGrid";
import { CONTESTANT_LIST, Contestants, WeeklyPickTypes } from "../assets/contestants";


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


export function WeeklyPicks() {
    const [curPick, setCurPick] = useState<WeeklyPickTypes | 'scrollView'>('Voted out');
    const categories = Contestants.Drew ? Object.keys(Contestants.Drew.weeklyPicks) : [];
    return <div>
        <div className="menu-list">
            <button className={`menu-button ${curPick === 'scrollView' ? 'selected' : ''}`} onClick={() => setCurPick('scrollView')}>Scrollable Mode</button>
            {categories.map((key) => {
                return <button key={key} className={`menu-button ${curPick === key ? 'selected' : ''}`} onClick={() => setCurPick(key)}>{key}</button>
            })}
        </div>
        {
            curPick != 'scrollView' &&
            <ResultGrid
                category={curPick}
                results={CONTESTANT_LIST
                    .map((cont) => {
                        const contestant = Contestants[cont];

                        return {
                            contestant: cont,
                            selections: [{
                                pick: contestant.weeklyPicks[curPick].pick,
                                className: '',
                            }]
                        }
                    })}
            />
        }
        {
            curPick === 'scrollView' &&
            categories.map((col) => {
                return <ResultGrid
                    key={col}
                    category={col}
                    results={CONTESTANT_LIST
                        .map((cont) => {
                            const contestant = Contestants[cont];
                            return {
                                contestant: cont,
                                selections: [{
                                    pick: contestant.weeklyPicks[col as WeeklyPickTypes].pick,
                                    className: '',
                                }]
                            }
                        })}
                />
            })
        }
    </div>
}