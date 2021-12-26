import React from 'react'
interface Props{
    code:string;
}
const Demo:React.FC<Props> = (props)=>{
    return(
        <>
        {props.children}
        <pre>
            {props.code}
        </pre>
        </>
    )
}
export {Demo}
