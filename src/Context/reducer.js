

const initState =
{
    products: [],
    cards: [],
    value: []
}

function reducer(state, action) {
    switch (action.type) {

        case 'ReadData':
            return {
                ...state,
                products: action.data
            }

        case 'buy':

            return {
                ...state,
                cards: [...state.cards, action.data],
            }

        case 'deleteBuy':

            return {
                ...state,

            }

        case 'addToCard':

            return {
                ...state,
                value: [...state.value,{ id: action.id, count: action.count }]
            }

        case 'sameCard':
            return {
                ...state,
                value: [
                    ...state.value,
                    state.value[action.index]
                ]
            }
        default:
            return state;
    }
}

export { reducer, initState };