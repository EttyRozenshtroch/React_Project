import * as actionTypes from "../ActionTypes";
import { removeMessage, setMessage } from "./message"
import axios from "axios";

export const addProduct = (Product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: Product
    }
}
export const deleteProduct = (ProductId) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: ProductId
    }
}
export const selectProductForEdit = (Product) => {
    return {
        type: actionTypes.SELECT_PRODUCT_FOR_EDIT,
        payload: Product
    }
}
export const saveAllProducts = (ProductArr) => {
    return {
        type: actionTypes.SAVE_ALL_PRODUCTS,
        payload: ProductArr
    }
}

export const deleteProductInServerAsync = (id) => {//ניצור אקשן קריאטורס שמחזירים פונקציה ולא אובייקט
    // תחזור פונקציה שמקבלת את הסטייט הכללי העכשווי ואת האפשרות לשגר לרידוסר דברים 
    return function (myDispatch, allState) {
        //כאן המקום לעשות פעולות אסינכורניות וכשהם מסתיימותצ ניתן לשגר לרידוסר דברים

        axios.delete("http://localhost:4000/product/" + id).
            then(res => {
                console.log(res);
                myDispatch(deleteProduct(id))
            }).catch(er => {
                console.log(er);
                myDispatch(setMessage({ id: 1, header: "התרחשה תקלה בעת מחיקה", level: 2 }))
                setTimeout(() => {
                    myDispatch(removeMessage())
                }, 2000)
            })
    }
}

export const fetchAllProducts = () => {
    return (dispath, allState) => {

        axios.get("http://localhost:4000/product")
            .then(res => {
                console.log(res)
                dispath(saveAllProducts(res.data))
            }).catch(er => {
                console.log(er)
                dispath(setMessage({ id: 2, header: "התרחשה תקלה בעת ייבוא המוצרים", level: 3 }))

            })
    }

}