import { Contestants } from "../assets/contestants"
import './Score.css'

export function Score() {


    const sortedContestants = Contestants.toSorted((a, b) => b.score - a.score)
    const winningScore = sortedContestants[0].score;
    return <div className="standard-grid">
        <h2 className="result-heading">Score</h2>
        <div className="standard-grid-items">
        {Contestants.map((cont) => {
            return <div>
                <p className="contestant-name">{cont.name}</p>
                <div className="score-update">
                    <div className="sole-survivor">
                        <img src={`./images/${cont.survivor}.jpg`} />
                        <p>{cont.survivorPoints} points</p>
                    </div>
                    <div className="score">
                        <h1 className={cont.score === winningScore ? 'winning-score' : ''}>{cont.score}</h1>
                        <p className="score-change">+{cont.scoreChange}</p>
                    </div>
                </div>
            </div>
        })}
    </div>
    </div>
}