import { Results } from "./ResultTable";

function getImageUrl(result: string) {
    if (result === 'Yes') {
        return './images/yes.png';
    }
    if (result === 'No' || result === '' || !result)
        return 'images/no.png';
    return `images/${result.toLowerCase()}.webp`;
}

export function ResultRow({contestant, selections}: Results) {
    const selectionString = selections.map(s => s.pick).join(', ');
    return (<div className="result-grid-row">
        <div className="result-grid-images">
        {selections?.length > 0 && selections.map((selection) => {
            return (
                <img src={getImageUrl(selection.pick)} className={`selectionImg ${selection.className}`} />
            )}
        )}
        </div>
        <p>Name: {contestant}</p>
        <p>Draft pick: {selectionString}</p>
        <p>total </p>
    </div>)
}