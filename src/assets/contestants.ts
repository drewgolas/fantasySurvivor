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
        score: 18,
        survivor: 'Joe',
        survivorPoints: 16,
        scoreChange: 6,
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
        score: 15,
        survivor: 'Shauhin',
        survivorPoints: 26,
        scoreChange: 2,
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
        score: 19,
        survivor: 'Mary',
        survivorPoints: 20,
        scoreChange: 4,
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
        score: 17,
        survivor: 'Eva',
        survivorPoints: 24,
        scoreChange: 4,
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
        name: "William",
        score: 20,
        survivor: 'Mary',
        survivorPoints: 14,
        scoreChange: 4,
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
        score: 15,
        survivor: 'Shauhin',
        survivorPoints: 26,
        scoreChange: 1,
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
        score: 8,
        survivor: 'Joe',
        survivorPoints: 18,
        scoreChange: 10,
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
        score: 8,
        survivor: 'Kamilla',
        survivorPoints: 16,
        scoreChange: 2,
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