const CAKE_ORDERED = 'CAKE_ORDERED';

//Action Creator - orderCake . It is a function that returns an action.                         

function orderCake()
{
    return {
        type: CAKE_ORDERED,
        quantity: 1
    };
}
