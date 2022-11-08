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

        case 'reRender':
            return {
                ...state,
            }

        case 'AddtoCard':
            return {
                ...state,
                value: [...state.value, { data: action.data }]
            }

        case 'deleteProduct':

            return {
                ...state,
                cards: state.cards.filter((el) => {
                    return el.id !== action.id
                }),
                value: state.value.filter((el) => {
                    return el.id !== action.id
                })
            }

        default:
            return state;
    }
}

export { reducer, initState };