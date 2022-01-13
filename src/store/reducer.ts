import { DeliveryPerpetualPair, PairAction, PairState } from '../utils/type-d';
import * as actionTypes from './actionTypes';

const initalState: PairState = {
    pairs: [
        {
            pair: "To define",
            type: "",
            date: "",
            markPriceDelivery: 0,
            markPricePerpetual: 0,
            fundingRate: 0,
            fundingTime: 0,
            daysLeft: 0,
            dailyRevenue: 0,
            yearlyRevenue: 0,
            intradiary: 0,
        },
        {
            pair: "To define",
            type: "",
            date: "",
            markPriceDelivery: 0,
            markPricePerpetual: 0,
            fundingRate: 0,
            fundingTime: 0,
            daysLeft: 0,
            dailyRevenue: 0,
            yearlyRevenue: 0,
            intradiary: 0,
        },
    ]
}
const reducer = (state: PairState = initalState, action: PairAction): PairState =>{
    switch(action.type){
        case actionTypes.ADD_PAIR:
            const newArticle : DeliveryPerpetualPair= {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
            }
            return{
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updateArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updateArticles,
            }
        default:
            return state
    }
}
export default reducer;