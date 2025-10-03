import { SeasonPickKey, SeasonPickPoints, SeasonPicks, WeeklyPicksTranslations } from "../assets/contestants";
import { results } from "./results"

const weekResults: {[key: string]: string[]} = {
    'Finds an Advantage': ['Jawan', 'Alex'],
    'Goes on a Journey': ['Matt', 'Jake', 'Jawan'],
'Losing Tribe': ['Kele'],
'Voted Out': ['Annie']
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

const getResponderData = (row: string, columns: string[]): {
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

const buildResponses = (columns: string[], rows: string[]) => {
    const responses:{[key: string]: ResponderPicks | undefined} = {};
    for (let i = 1; i < rows.length; i++) {
        const responderPicks = getResponderData(rows[i], columns);
        responses[responderPicks?.name!] = responderPicks.picks;
    }
    return responses;
}

const parseCSVWeek1 = (data: string) => {
    const rows = grabRows(data);
    const columns = grabColumns(rows);
    const responses = buildResponses(columns, rows);
}

export const scoreUpdate = () => {
    parseCSVWeek1(results);
    console.log('Score Updated');
}