import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { FormComponent } from "../components/FormComponent"

export const FormPage = () => {


    return (
        <div className="bg-slate-200 min-h-screen">
            <div className="fixed shadow-lg w-full z-50">
                <Navbar/>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pt-28 pb-12">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-4xl">
                        <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Create New Content
                        </h1>
                        <Link 
                            to="/items" 
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Dashboard
                        </Link>
                        </div>
                        
                        <FormComponent />
                    </div>
                </div>
            </div>
            {/* <div className="pt-20pb-10 mx-auto">
                <div className="flex flex-col items-center" >
                    <div className="w-full max-w-4xl">
                        <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">Item To Uplaod/Update</h1>
                        <Link 
                            to={'/items'}
                            className="flex justify-between items-center text-xl text-gray-600 font-semibold cursor-pointer transistion duration-300 ease-in-out hover:scale-105"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="items-center size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                <p className="items-center">Back</p>
                        </Link>
                    </div>
                    </div>
                    <FormComponent/>
                </div>
            </div> */}
        </div>
    )
}