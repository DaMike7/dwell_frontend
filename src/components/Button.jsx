import React from "react";

export default function Getstartedbutton(props){
    const { text, func} = props
    return (
        <button onClick={func} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <p>{text}</p>
        </button>
    )
}