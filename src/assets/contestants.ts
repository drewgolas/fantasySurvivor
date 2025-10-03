import { SurvivorKey, TribeKey } from "./survivors";

type FinalThree = {
    survivor: SurvivorKey,
    points: 2 | 6
}

type Contestant = {
    name: string;
    score: number;
    survivor: SurvivorKey
    survivorPoints: number;
    scoreChange: number;
    mostConfessionals?: SurvivorKey;
    worstTribe?: TribeKey;
    quits?: SurvivorKey;
    medevac?: SurvivorKey;
    finalThree: [
        FinalThree,
        FinalThree,
        FinalThree
    ]
}

export const SeasonPicks = [
    'Final 3',
    'Medevacked out',
    'Most Confessional Time of the Season',
    'Quits',
    'Sole Survivor',
    'Worst tribe based on numbers at merge'
] as const;

export type SeasonPickKey = typeof SeasonPicks[number];

export const SeasonPickPoints = {
    'Final 3': 6,
    'Medevacked out': 4,
    'Most Confessional Time of the Season': 8,
    'Quits': 4,
    'Sole Survivor': 26,
    'Worst tribe based on numbers at merge': 5
}

export const WeeklyPicksTranslations: {[key: string]: string} = {
    'Finds an advantage/idol/clue': 'Finds an Advantage',
    'Goes on a journey': 'Goes on a Journey',
    'Losing tribe': 'Losing Tribe',
    'Voted out': 'Voted Out'
}

export const Contestants = {
    "Kevin": {
        "scoreChange": 0,
        "score": 0,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Rizo",
                    "Savannah",
                    "Sophi"
                ]
            },
            "Sole Survivor": {
                "pick": "Savannah",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Matt",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Matt",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Rizo",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Uli",
                "points": 1
            },
            "Voted out": {
                "pick": "Jawan",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Rizo",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Savannah",
                "points": 1
            }
        }
    },
    "Chris": {
        "scoreChange": 0,
        "score": 0,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Jason",
                    "Nate",
                    "Savannah"
                ]
            },
            "Sole Survivor": {
                "pick": "Jason",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Hina",
                "points": 5
            },
            "Quits": {
                "pick": "Kristinia",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Matt",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Rizo",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Hina",
                "points": 1
            },
            "Voted out": {
                "pick": "Kristinia",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Sophi",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Savannah",
                "points": 1
            }
        }
    },
    "William Ridley": {
        "scoreChange": 0,
        "score": 3,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Savannah",
                    "Sophie",
                    "Steven"
                ]
            },
            "Sole Survivor": {
                "pick": "Steven",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Jeremiah",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Jake",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Steven",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Kele",
                "points": 1
            },
            "Voted out": {
                "pick": "Annie",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Kristinia",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Sophie",
                "points": 1
            }
        }
    },
    "Jesse": {
        "scoreChange": 0,
        "score": 0,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "MC",
                    "Sophi",
                    "Steven"
                ]
            },
            "Sole Survivor": {
                "pick": "Sophi",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Uli",
                "points": 5
            },
            "Quits": {
                "pick": "Savannah",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Rizo",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Sophi",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Uli",
                "points": 1
            },
            "Voted out": {
                "pick": "Nate",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Sage",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Kristinia",
                "points": 1
            }
        }
    },
    "Kyle Macchi": {
        "scoreChange": 0,
        "score": 4,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Matt",
                    "Savannah",
                    "Sophi"
                ]
            },
            "Sole Survivor": {
                "pick": "Matt",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Kristinia",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Steven",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Jake",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Kele",
                "points": 1
            },
            "Voted out": {
                "pick": "Annie",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Jawan",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Jeremiah",
                "points": 1
            }
        }
    },
    "Roy": {
        "scoreChange": 0,
        "score": 0,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "MC",
                    "Nate",
                    "Shannon"
                ]
            },
            "Sole Survivor": {
                "pick": "Shannon",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Kristinia",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Jason",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Sage",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Hina",
                "points": 1
            },
            "Voted out": {
                "pick": "Matt",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Sophie",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Steven",
                "points": 1
            }
        }
    },
    "Marco Mendez": {
        "scoreChange": 0,
        "score": 2,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Jason",
                    "Kristina",
                    "Savannah"
                ]
            },
            "Sole Survivor": {
                "pick": "Jason",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Nate",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Jeremiah",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Sage",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Kele",
                "points": 1
            },
            "Voted out": {
                "pick": "MC",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Jeremiah",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Jawan",
                "points": 1
            }
        }
    },
    "Drew": {
        "scoreChange": 0,
        "score": 3,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Alex",
                    "Sophi",
                    "Steven"
                ]
            },
            "Sole Survivor": {
                "pick": "Steven",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Sage",
                "points": 4
            },
            "Medevacked out": {
                "pick": "Nate",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Rizo",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Kele",
                "points": 1
            },
            "Voted out": {
                "pick": "Annie",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Savannah",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "MC",
                "points": 1
            }
        }
    },
    "Jesse's Older Brtother": {
        "scoreChange": 0,
        "score": 0,
        "seasonPicks": {
            "Final 3": {
                "pick": [
                    "Alex",
                    "Jawan",
                    "Sophi"
                ]
            },
            "Sole Survivor": {
                "pick": "Jawan",
                "points": 26
            },
            "Worst tribe based on numbers at merge": {
                "pick": "Kele",
                "points": 5
            },
            "Quits": {
                "pick": "Jeremiah",
                "points": 4
            },
            "Medevacked out": {
                "pick": "MC",
                "points": 4
            },
            "Most Confessional Time of the Season": {
                "pick": "Nate",
                "points": 8
            }
        },
        "weeklyPicks": {
            "Losing tribe": {
                "pick": "Hina",
                "points": 1
            },
            "Voted out": {
                "pick": "Steven",
                "points": 2
            },
            "Finds an advantage/idol/clue": {
                "pick": "Jason",
                "points": 1
            },
            "Goes on a journey": {
                "pick": "Annie",
                "points": 1
            }
        }
    }
} as const;

export type WeeklyPickTypes = keyof typeof Contestants.Drew.weeklyPicks;

export type ContestantKey = keyof typeof Contestants;

export const CONTESTANT_LIST: ContestantKey[] = Object.keys(Contestants) as ContestantKey[];