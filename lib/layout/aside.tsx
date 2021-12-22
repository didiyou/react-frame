import React from 'react'
import { scopedClassMaker } from 'lib/classes'
const  sc = scopedClassMaker('gu-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Aside:React.FC<Props> = (props)=>{
    const {className,...rest} = props
    return(
        <div className={sc('aside',{extra:className})} {...rest}>aside</div>
    )
}

export default Aside