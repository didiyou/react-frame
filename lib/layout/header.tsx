import React from 'react'
import { scopedClassMaker } from '../classes'
const  sc = scopedClassMaker('gu-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Header:React.FC<Props> = (props)=>{
    const {className,...rest} = props
    return(
        <div className={sc('header',{extra:className})} {...rest}>{props.children}</div>
    )
}

export default Header