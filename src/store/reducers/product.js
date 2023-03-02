
import * as actionTypes from "../ActionTypes";

const initialState = {
    productArr: [
        { id: 1, title: "product 1" },
        { id: 2, title: "product 2" },
        { id: 3, title: "product 3" },
    ],
    selectedProdustForEdit: null
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                // selectedPRODUCTForEdit: state.selectedPRODUCTForEdit,
                productArr: [...state.productArr, action.payload]
            }
        case actionTypes.DELETE_PRODUCT:
            let f = state.productArr.filter(item => item.id !== action.payload);
            return {
                ...state,
                // selectedProdustForEdit: state.selectedProdustForEdit,
                productArr: f
            }
        case actionTypes.SELECT_PRODUCT_FOR_EDIT:
            return {
                // productArr: state.productArr,
                // selectedproductForEdit: action.payload
                ...state,//מעתיק בהעתקה עמוקה את כל השדות כפי שהיו באובייקט המקורי ורק דורס את מה שכתבנו אחכ
                selectedProdustForEdit: action.payload
            }
        case actionTypes.SAVE_EDITED_PRODUCT:
            let a = state.produstArr.map(item => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })
            return {
                ...state,
                selectedProdustForEdit: null,
                productArr: a
            }
        case actionTypes.SAVE_ALL_PRODUCTS:
            return {
                ...state,
                productArr: action.payload
            }


    }
    return state;
}

// let obj={
//     name:"rina",
//     age:15
// }
// let obj2={...obj,age:17}//העתקה עמוקה