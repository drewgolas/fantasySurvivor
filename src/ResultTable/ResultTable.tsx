
import './ResultGrid.css';
import { ResultRow } from './ResultRow';

export type Results = {
    contestant: string;
    selections: {
        pick: string;
        className?: string;
    }[]
};

type Props = {
    category: string;
    subtitle?: string;
    results: Results[];
}

export function ResultTable({ category, subtitle, results }: Props) {
    return (
        <div className="results-grid">
            <h2 className="result-heading">{category}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <div className="standard-grid-rows">
                {results.map((result) =>
                    <ResultRow contestant={result.contestant} selections={result.selections} />
                )}
            </div>
        </div>
    )
}