import { useState } from "react"
import { ResultGrid } from "../ResultGrid/ResultGrid"
import { Contestants } from "../assets/contestants"
import './SeasonPicks.css';

const categories: { [key: string]: string } = {
    survivor: 'Sole Survivor',
    finalThree: 'Final Three',
    mostConfessionals: "Most Confessionals",
    worstTribe: "Worst Tribe",
    quits: "Quits",
    medevac: "Medevac"
}

export function SeasonPicks() {
    const [curPick, setCurPick] = useState('survivor')
    return (<div>
        <div className="menu-list">
            {Object.keys(categories).map((key) => {
                return <button key={categories[key]} className={`menu-button ${curPick === key ? 'selected': ''}`} onClick={() => setCurPick(key)}>{categories[key]}</button>
            })}
        </div>
        <div>
            {curPick !== 'finalThree' &&
                <ResultGrid
                    category={categories[curPick]}
                    results={Contestants
                        //@ts-expect-error
                        .filter((cont) => cont[curPick])
                        .map((cont) => {
                            return {
                                contestant: cont.name,
                                selections: [{
                                    //@ts-expect-error
                                    img: `./images/${(cont[curPick])}.jpg`,
                                    className: '',
                                }]
                            }
                        })}
                />
            }
            {curPick === 'finalThree' &&
                <ResultGrid
                    category={categories[curPick]}
                    results={Contestants
                        .filter((cont) => cont[curPick])
                        .map((cont) => {
                            return {
                                contestant: cont.name,
                                selections: (cont[curPick] || []).map((sel) => {
                                    return {
                                        img: `./images/${(sel.survivor)}.jpg`,
                                        className: sel.points === 6 ? 'final-three' : 'final-three deducted',
                                    }
                                })
                            }
                        })}
                />
            }
        </div>
    </div>)
}