import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import{addProductToServer} from "./productSlice";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    let dispatch=useDispatch();
    const submit = data => dispatch(addProductToServer(data));
    return ( <>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
    </form> */}
    <form onSubmit={handleSubmit(submit)}>
    <input {...register("name",{required:"first name is required"})} placeholder="enter name"/>
    <input {...register("description") }placeholder=" enter description"/>
    <input {...register("img")} placeholder="enter img url"/>
    <input {...register("content")} placeholder="enter content"/>
    <input type="number" {...register("price")} placeholder="enter price"/>
    <input {...register("company")} placeholder="enter company"/>
    <input {...register("prodDate")} placeholder="enter prodDate"/>
    <input type="submit" value="submit"/>
    </form>
    </> );
}
 
export default AddProduct;
// "id": 1,
//         "name": "סוכריות",
//         "description": "אין",
//         "imgUrl": "",
//         "content": "100 גרם",
//         "price": 5.2,
//         "isCooling": true,
//         "company": "טרה",
//         "prodDate": "10-10-2022",
//         "img"