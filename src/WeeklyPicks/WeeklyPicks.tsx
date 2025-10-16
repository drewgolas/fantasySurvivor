import { useState } from "react";
import { ResultGrid } from "../ResultGrid/ResultGrid";
import { CONTESTANT_LIST, Contestants, WeeklyPickTypes } from "../assets/contestants";


export function WeeklyPicks() {
    const [curPick, setCurPick] = useState<WeeklyPickTypes | 'scrollView'>('Voted Out');
    const categories = Contestants.Drew ? Object.keys(Contestants.Drew.weeklyPicks) as WeeklyPickTypes[] : [];

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
                                pick: contestant.weeklyPicks[curPick]?.pick,
                                className: contestant.weeklyPicks[curPick]?.pick as string === '' ? 'no_pick' : '',
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
                                    pick: contestant.weeklyPicks[col as WeeklyPickTypes]?.pick,
                                    className: contestant.weeklyPicks[col as WeeklyPickTypes]?.pick as string === '' ? 'no_pick' : '',
                                }]
                            }
                        })}
                />
            })
        }
    </div>
}