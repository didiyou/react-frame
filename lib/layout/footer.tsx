import React from 'react'
import { scopedClassMaker } from 'lib/classes'
const  sc = scopedClassMaker('gu-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Footer:React.FC<Props> = (props)=>{
    const {className,...rest} = props
    return(
        <div  className={sc('footer',{extra:className})} {...rest}>footer</div>
    )
}

export default Footer