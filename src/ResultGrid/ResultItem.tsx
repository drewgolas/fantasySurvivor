import { Results } from "./ResultGrid";

function getImageUrl(result: string) {
    if (result === 'Yes') {
        return './images/yes.png';
    }
    if (result === 'No')
        return 'images/no.png';
    return `images/${result.toLowerCase()}.webp`;
}

export function ResultItem({contestant, selections}: Results) {
    return (<div className="result-grid-item">
        <p>{contestant}</p>
        <div className="result-grid-images">
        {selections?.length > 0 && selections.map((selection) => {
            return (
                <img src={getImageUrl(selection.pick)} className={`selectionImg ${selection.className}`} />
            )}
        )}
        </div>
    </div>)
}