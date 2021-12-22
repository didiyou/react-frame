import React from 'react'
import { scopedClassMaker } from 'lib/classes'
const  sc = scopedClassMaker('gu-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Content:React.FC<Props> = (props)=>{
    const {className,...rest} = props
    return(
        <div className={sc('content',{extra:className})} {...rest}>content</div>
    )
}

export default Content