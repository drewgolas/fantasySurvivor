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

export const Contestants: Contestant[] = [
        {
        name: 'Jesse',
        score: 10,
        survivor: 'Joe',
        survivorPoints: 16,
        scoreChange: 0,
        finalThree: [
            {
                survivor: 'Mary',
                points: 2
            },
            {
                survivor: 'Eva',
                points: 6
            },
            {
                survivor: 'Joe',
                points: 2
            },
        ],
        mostConfessionals: 'Bianca',
        quits: "Stephanie",
        worstTribe: "Lagi",
        medevac: "Mitch",
    },
    {
        name: "Drew",
        score: 11,
        survivor: 'Shauhin',
        survivorPoints: 26,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Shauhin",
                points: 6
            },
            {
                survivor: "Chrissy",
                points: 6
            },
            {
                survivor: "Kamilla",
                points: 2
            },
        ],
        mostConfessionals: "Shauhin",
        quits: "Thomas",
        worstTribe: "Vula",
        medevac: "Joe",
    },
    { name: "Chris",
        score: 15,
        survivor: 'Mary',
        survivorPoints: 20,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Mary",
                points: 6
            },
            {
                survivor: "Kyle",
                points: 6
            },
            {
                survivor: "David",
                points: 2
            },
        ],
        mostConfessionals: "Mary",
        quits: "Thomas",
        worstTribe: "Vula",
        medevac: "Joe",
    },
    {
        name: "Kyle",
        score: 9,
        survivor: 'Eva',
        survivorPoints: 24,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Joe",
                points: 6
            },
            {
                survivor: "Eva",
                points: 6
            },
            {
                survivor: "Shauhin",
                points: 2
            },
        ],
        mostConfessionals: "Sai",
        quits: "Charity",
        worstTribe: "Vula",
        medevac: "Cedrek",
    },
    {
        name: "Will",
        score: 12,
        survivor: 'Mary',
        survivorPoints: 14,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Charity",
                points: 6
            },
            {
                survivor: "Mary",
                points: 6
            },
            {
                survivor: "Eva",
                points: 2
            },
        ],
        mostConfessionals: "Sai",
        quits: "Eva",
        worstTribe: "Vula",
        medevac: "Shauhin",
    },
    {
        name: "Marco",
        score: 12,
        survivor: 'Shauhin',
        survivorPoints: 26,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Shauhin",
                points: 6
            },
            {
                survivor: "Joe",
                points: 6
            },
            {
                survivor: "Charity",
                points: 6
            },
        ],
        mostConfessionals: "Mary",
        quits: "Eva",
        worstTribe: "Civa",
        medevac: "David",
    },
    {
        name: "Kevin",
        score: 5,
        survivor: 'Joe',
        survivorPoints: 18,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Eva",
                points: 6
            },
            {
                survivor: "Joe",
                points: 2
            },
            {
                survivor: "Mitch",
                points: 6
            },
        ],
        mostConfessionals: "Mitch",
        quits: "Star",
        worstTribe: "Civa",
        medevac: "Cedrek",
    },
    {
        name:"Roy",
        score: 3,
        survivor: 'Kamilla',
        survivorPoints: 16,
        scoreChange: 0,
        finalThree: [
            {
                survivor: "Joe",
                points: 2
            },
            {
                survivor: "Mary",
                points: 2
            },
            {
                survivor: "Kamilla",
                points: 2
            },
        ],
    }
]