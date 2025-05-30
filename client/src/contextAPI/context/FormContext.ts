import { createContext } from "react";


interface FormContextType {
    id: number;
    title : string;
    description : string;
    price : number;
    image : string;
    category : string;
    rating : number;
    count: number;
    isFormEditing : boolean;

    formSubmissionType : string

    setFormProps : (
        id :number,
        title : string,
        description : string,
        price : number,
        image : string,
        category : string,
        rating : number,
        count: number,
        isFormEditing : boolean
    ) => void;
    resetForm : () => void;
    setFormType : (
        text :string
    ) => void;
    

}

export const FormContext = createContext<FormContextType>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    rating: 0,
    count: 0,
    isFormEditing: false,
    formSubmissionType : '',

    setFormProps: () => {},
    resetForm : () => {},
    setFormType : () => {},

})