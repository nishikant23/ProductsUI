import { useMemo, useState, type FC, type ReactNode } from "react"
import { FormContext } from "../context/FormContext"

interface FormProviderProps {
    children : ReactNode
}

export const FormProvider : FC<FormProviderProps> = ({children}) => {
    const [ id, setId ] = useState<number>(0)
    const [ title, setTitle ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [ price, setPrice ] = useState<number>(0)
    const [ image, setImage ] = useState<string>('')
    const [ category, setCategory ] = useState<string>("")
    const [ rating, setRating ] = useState<number>(0)
    const [ count, setCount ] = useState<number>(0)
    const [isFormEditing, setIsFormEditing] = useState<boolean>(false);
    const [ formSubmissionType,  setFormSubmissionType ] = useState<string>('');

    const setFormProps = (
        id : number, 
        title : string,
        description : string,
        price : number,
        image : string,
        category : string,
        rating : number,
        count :number,
        isFormEditing : boolean,
    ) => {
        setId(id);
        setTitle(title);
        setDescription(description);
        setPrice(price);
        setImage(image);
        setCategory(category);
        setRating(rating);
        setCount(count);
        setIsFormEditing(isFormEditing);
    }

    const resetForm  = () => {
        setId(0);
        setTitle('');
        setDescription('');
        setPrice(0);
        setImage('');
        setCategory('');
        setRating(0);
        setCount(0);
        setIsFormEditing(false);
    }

    const setFormType = (text : string) => {
        setFormSubmissionType(text);
    }
    const value = useMemo(() => ({
        id, title, description, price, image, category, rating, count, isFormEditing, formSubmissionType,setFormProps, resetForm,setFormType
    }),[id, title, description, price, image, category, rating, count, isFormEditing, formSubmissionType])

    
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}