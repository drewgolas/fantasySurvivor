type SurvivorInfo = {
    tribe: TribeKey;
}

type TribeInfo = { [key in TribeKey]: {
    survivors: SurvivorKey[];
} }

export const TRIBE_LIST = [
    'Hina',
    'Kele',
    'Uli',
] as const

export type TribeKey = typeof TRIBE_LIST[number];

export type SurvivorKey = typeof SURVIVOR_LIST[number]

export const SURVIVOR_LIST = [
    "Alex",
    "Annie",
    "Jake",
    "Jason",
    "Jawan",
    "Jeremiah",
    "Kristina",
    "Matt",
    "MC",
    "Nate",
    "Nicole",
    "Rizo",
    "Sage",
    "Savannah",
    "Shannon",
    "Sophi",
    "Sophie",
    "Steven"
]


export const Tribes: TribeInfo = {
    Hina: {
        survivors: [
            "Matt",
            "Jason",
            "MC",
            "Steven",
            "Sophie",
            "Kristina"
        ]
    },
    Kele: {
        survivors: ["Alex",
            "Annie",
            "Sophi",
            "Nicole",
            "Jeremiah",
            "Jake"]
    },
    Uli: {
        survivors: ["Savannah",
            "Sage",
            "Rizo",
            "Jawan",
            "Shannon",
            "Nate"]
    }
}