import { Results } from "./ResultGrid";


export function ResultItem({contestant, selections}: Results) {
    return (<div className="result-grid-item">
        <p>{contestant}</p>
        <div className="result-grid-images">
        {selections?.length > 0 && selections.map((selection) =>
            <img src={selection.img} className={`selectionImg ${selection.className}`}/>
        )}
        </div>
    </div>)
}