import { CONTESTANT_LIST, Contestants } from "../assets/contestants"
import './Score.css'

const winningScore = Math.max(...(CONTESTANT_LIST).map(c => Contestants[c].score));

export function Score() {

    return <div className="standard-grid">
        <h2 className="result-heading">Score</h2>
        <div className="standard-grid-items">
            {CONTESTANT_LIST.map((cont) => {
                const contestant = Contestants[cont];
                const soleSurvivor = contestant.seasonPicks["Sole Survivor"]
                const image = require(`../assets/images/${soleSurvivor.pick?.toLowerCase()}.webp`);
                return <div>
                    <p className="contestant-name">{cont}</p>
                    <div className="score-update">
                        <div className="sole-survivor">
                            <img src={image} />
                            <p>{contestant.seasonPicks["Sole Survivor"].points} points</p>
                        </div>
                        <div className="score">
                            <h1 className={contestant.score === winningScore ? 'winning-score' : ''}>{contestant.score}</h1>
                            <p className="score-change">+{contestant.scoreChange}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}