import { useState } from "react"
import { ResultGrid } from "../ResultGrid/ResultGrid"
// import { Contestants } from "../assets/contestants"
import './SeasonPicks.css';
import { CONTESTANT_LIST, Contestants, SeasonPickTypes } from "../assets/contestants";

// const categories: { [key: string]: string } = {
//     survivor: 'Sole Survivor',
//     finalThree: 'Final Three',
//     mostConfessionals: "Most Confessionals",
//     worstTribe: "Worst Tribe",
//     quits: "Quits",
//     medevac: "Medevac"
// }

export function SeasonPicks() {
    const [curPick, setCurPick] = useState<SeasonPickTypes>('Sole Survivor');
    const categories = Contestants.Drew ? Object.keys(Contestants.Drew.seasonPicks) as SeasonPickTypes[] : [];
    return (<div>
        <div className="menu-list">
            {categories.map((key) => {
                return <button key={key} className={`menu-button ${curPick === key ? 'selected': ''}`} onClick={() => setCurPick(key)}>{key}</button>
            })}
        </div>
        <div>
            {curPick !== 'Final 3' &&
                <ResultGrid
                    category={curPick}
                    results={CONTESTANT_LIST
                            .map((cont) => {
                            const contestant = Contestants[cont];
                            return {
                                contestant: cont,

                            selections: [{
                                pick: contestant.seasonPicks[curPick].pick,
                                className: '',
                            }]
                            }
                        })}
                />
            }
            {curPick === 'Final 3' &&
                <ResultGrid
                    category={curPick}
                    results={CONTESTANT_LIST
                            .map((cont) => {
                            const contestant = Contestants[cont];
                            return {
                                contestant: cont,
                                selections: (contestant.seasonPicks['Final 3']?.pick || []).map((sel) => {
                                    return {
                                        pick: sel,
                                        className: 'final-three',
                                    }
                                })
                            }
                        })}
                />
            }
        </div>
    </div>)
}