import { ContestantKey, Contestants, ContestantScore, SeasonPickKey, SeasonPickPoints, SeasonPicks, WeeklyPicksTranslations } from "../assets/contestants";
import { results } from "./results"

const weekResults = {
    "Losing tribe (1 point)": ['Kele'],
    "Voted out (2 point)": ['Jeremiah'],
    "Finds an advantage/idol/clue (1 point)": ['MC'],
    "Uses an advantage/idol/clue (1 point)": ['Alex'],
    "Uses SITD (1 point)": [] as string[],
    "Goes on a journey (1 point)": [] as string[],
}

const seasonResults: { [key: string]: string[] } = {
    "Medevacked out (4 points)": ['Jake']
}


const grabColumns = (rows: string[]) => {
    return rows[0].split(',');
}

const grabRows = (data: string) => {
    return data.split('\n');
}

type ResponderPicks = {
    seasonPicks: {
        'Final 3': {
            pick: string[]
            points?: number;
        };
        [key: string]: {
            pick: string | string[]
            points?: number;
        };
    };
    weeklyPicks: {
    [key: string]: {
        pick: string;
        points?: number;
    };
}
    score: number;
}

const getResponderDataWeek1 = (row: string, columns: string[]): {
    name?: string;
    picks?: ResponderPicks;
} => {
    const entries = row.split(',');
    const response: {
    name?: string;
    picks?: ResponderPicks;
} = {};
    const responderPicks: ResponderPicks = {
        score: 0,
        seasonPicks: {
            'Final 3': {
                pick: [],
            }
        },
        weeklyPicks: {}
    }
    for (let j = 1; j < columns.length; j++) {
        const columnName = columns[j];
        const columnTitle = columnName.split(' (')[0];
        if(columnName.includes('Is there any additional categories you want to see in the fantasy draft this season')) continue;
        if(columnName === 'Name') {
            response.name = entries[j].trim();
            continue;
        }
        if (columnName.includes('Who will make the final 3')) {
            const match = columnName.match(/\[(.*?)\]/);
            if (match?.[1] && entries[j]) {
                responderPicks.seasonPicks['Final 3'].pick.push(match[1]);
            }
            continue;
        } else if(SeasonPicks.includes(columnTitle as SeasonPickKey)) {
            responderPicks.seasonPicks[columnTitle] = {
                pick: entries[j],
                points: SeasonPickPoints[columnTitle as SeasonPickKey]
            }
            continue;
        }
        const title = WeeklyPicksTranslations[columnTitle];
        const pointsMatch = columnName.match(/\((.*?)\)/);
        const pick = entries[j];
        responderPicks.weeklyPicks[columnTitle] = {
            pick,
            points: pointsMatch?.[1] ? parseInt(pointsMatch[1][0]) : undefined
        };
        if(weekResults[title]?.includes(pick) && pointsMatch?.[1]) {
            responderPicks.score += parseInt(pointsMatch[1][0]);
        }

    }
    response.picks = responderPicks;
    console.log(`Week 3 ${response.name} Score: ${response.picks?.score}`);
    return response;
};

const getResponderDataCurrentWeek = (row: string[], columns: string[], contestant: ContestantScore) => {
    const newDetails = JSON.parse(JSON.stringify(contestant));
    newDetails.weeklyPicks = {};
    for (let j = 1; j < columns.length; j++) {
        const columnName = columns[j];
        const columnTitle = columnName.split(' (')[0];
        if(columnName === 'Name' || columnName.includes('Do you want to change your sole survivor for a decrease in points?')) {
            continue;
        }
        if (columnName.includes('Sole Survivor')) {
            const match = columnName.match(/\[(.*?)\]/);
            if (match?.[1] && row[j] && row[j] !== contestant.seasonPicks['Sole Survivor'].pick) {
                newDetails.seasonPicks['Sole Survivor'].pick = row[j];
                newDetails.seasonPicks['Sole Survivor'].points = parseInt(match[1][0])
            }
            continue;
        }

        const title = WeeklyPicksTranslations[columnTitle];
        const pointsMatch = columnName.match(/\((.*?)\)/);
        const pick = row[j];
        const keyForPick = title ?? columnTitle
        newDetails.weeklyPicks[keyForPick] = {
            pick,
            points: pointsMatch?.[1] ? parseInt(pointsMatch[1][0]) : undefined
        };
        const columnWeekResults = weekResults[columnName as keyof typeof weekResults];
        if(columnWeekResults?.includes(pick) && pointsMatch?.[1]) {
            newDetails.score += parseInt(pointsMatch[1][0]);
            newDetails.scoreChange += parseInt(pointsMatch[1][0]);
        }

    }
    return newDetails;
};


const buildResponses = (columns: string[], rows: string[]) => {
    const responses:{[key: string]: ResponderPicks | undefined} = {};
    const nameIndex = columns.findIndex(column => column.includes('Name'));
    for (let i = 1; i < rows.length; i++) {
        const entries = rows[i].split(',');
        const name = entries[nameIndex].trim() as ContestantKey;
        if(Contestants[name] === undefined) {
            console.log(`Unknown contestant: ${name}`);
            continue;
        }
        const responderPicks = getResponderDataCurrentWeek(entries, columns, Contestants[name]);
        if(name === 'William') {
            responderPicks.score += 4;
            responderPicks.scoreChange += 4;
        }
        console.log(`Week 3 ${name}\nScore: ${responderPicks.score}\nScore Change: ${responderPicks.scoreChange}`);
        responses[name] = responderPicks;
    }
    return responses;
}

const parseCSVWeek1 = (data: string) => {
    const rows = grabRows(data);
    const columns = grabColumns(rows);
    const responses = buildResponses(columns, rows);
}

const parseCurrentWeek = (data: string) => {
    const rows = grabRows(data);
    const columns = grabColumns(rows);
    const responses = buildResponses(columns, rows);
    console.log(responses);
}

export const scoreUpdate = () => {
    parseCurrentWeek(results);
    console.log('Score Updated');
}

export const returnColumns = () => {
    const rows = grabRows(results);
    const columns = grabColumns(rows);
    console.log('Columns Returned');
    console.log(columns);
}