type SurvivorInfo = {
    tribe: TribeKey;
}

export const TRIBE_LIST = [
    'Civa',
    'Lagi',
    'Vula',
] as const

export type TribeKey = typeof TRIBE_LIST[number];

export const SURVIVOR_LIST = [
    'David',
    'Kyle',
    'Mitch',
    'Charity',
    'Chrissy',
    'Kamilla',
    'Joe',
    'Shauhin',
    'Thomas',
    'Bianca',
    'Eva',
    'Star',
    'Cedrek',
    'Justin',
    'Kevin',
    'Mary',
    'Sai',
    'Stephanie'
] as const

export type SurvivorKey = typeof SURVIVOR_LIST[number]

export const Survivors: {[key in SurvivorKey]: SurvivorInfo} = {
    David: {
        tribe: 'Civa'
    },
    Kyle: {
        tribe: 'Civa'
    },
    Mitch: {
        tribe: 'Civa'
    },
    Charity: {
        tribe: 'Civa'
    },
    Chrissy: {
        tribe: 'Civa'
    },
    Kamilla: {
        tribe: 'Civa'
    },
    Joe: {
        tribe: 'Lagi'
    },
    Shauhin: {
        tribe: 'Lagi'
    },
    Thomas: {
        tribe: 'Lagi'
    },
    Bianca: {
        tribe: 'Lagi'
    },
    Eva: {
        tribe: 'Lagi'
    },
    Star: {
        tribe: 'Lagi'
    },
    Cedrek: {
        tribe: 'Vula'
    },
    Justin: {
        tribe: 'Vula'
    },
    Kevin: {
        tribe: 'Vula'
    },
    Mary: {
        tribe: 'Vula'
    },
    Sai: {
        tribe: 'Vula'
    },
    Stephanie: {
        tribe: 'Vula'
    },
}

export const Tribes: {[key in TribeKey]: {imgPath?: string}} = {
    Civa: {
    },
    Lagi: {},
    Vula: {}
}