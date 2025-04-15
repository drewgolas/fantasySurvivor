import { ResultItem } from "./ResultItem";
import './ResultGrid.css';

export type Results = {
    contestant: string;
    selections: {
        img: string;
        className?: string;
    }[]
};

type Props = {
    category: string;
    subtitle?: string;
    results: Results[];
}

export function ResultGrid({ category, subtitle, results }: Props) {
    return (
        <div className="results-grid">
            <h2 className="result-heading">{category}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <div className="standard-grid-items">
                {results.map((result) =>
                    <ResultItem contestant={result.contestant} selections={result.selections} />
                )}
            </div>
        </div>
    )
}