import { CONTESTANT_LIST, Contestants } from "../assets/contestants"
import './Score.css'

const winningScore = Math.max(...(CONTESTANT_LIST).map(c => Contestants[c].score));
const biggestChange = Math.max(...(CONTESTANT_LIST).map(c => Contestants[c].scoreChange));

export function Score() {

    return <div className="standard-table">
        <table className="leaderboard-table">
            <thead>
                <tr>
                    <th scope="col">Competitor</th>
                    <th scope="col">Score Change</th>
                    <th scope="col">Total Score</th>
                </tr>
            </thead>
            <tbody>
            {CONTESTANT_LIST.map((cont) => {
                const contestant = Contestants[cont];
                const soleSurvivor = contestant.seasonPicks["Sole Survivor"]
                const image = require(`../assets/images/${soleSurvivor.pick?.toLowerCase()}.webp`);
                return <tr className={`leaderboard-row ${contestant.score === winningScore ? 'winning-contestant' : ''}`} key={cont}>
                    <th scope="row" className="competitor_row_leaderboard">{cont}</th>
                    <td className={`${contestant.scoreChange === biggestChange ? 'big-change' : ''}`}>+{contestant.scoreChange}</td>
                    <td>{contestant.score}</td>
                </tr>
            }).sort((a, b) => {
                const scoreA = Contestants[a.key as keyof typeof Contestants].score;
                const scoreB = Contestants[b.key as keyof typeof Contestants].score;
                return scoreB - scoreA;
            })}
            </tbody>
        </table>
        <h2 className="result-heading">Score</h2>
        <div className="standard-grid-rows">
            {CONTESTANT_LIST.map((cont) => {
                const contestant = Contestants[cont];
                const soleSurvivor = contestant.seasonPicks["Sole Survivor"]
                const image = require(`../assets/images/${soleSurvivor.pick?.toLowerCase()}.webp`);
                return <div className={`standard-grid-row ${contestant.score === winningScore ? 'winning-contestant' : ''}`} key={cont}>
                    <div className="sole_survivor_img_container"><img className='sole_survivor_image' src={image} /></div>
                    <div className='score-details'>
                        <h3>{cont}:</h3>
                        <div>Total Points: {contestant.score} points</div>
                        <div>Point Gain: +{contestant.scoreChange}</div>
                        <br />
                        <h3>Sole Survivor:</h3><div>{soleSurvivor.pick}</div>
                        <div>{soleSurvivor.points} points</div>
                    </div>
                </div>
            })}
        </div>
    </div>
}