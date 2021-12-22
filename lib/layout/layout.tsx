import React, { ReactElement } from 'react'
import { scopedClassMaker } from 'lib/classes'
import './layout.scss'
import Aside from './aside'
const sc = scopedClassMaker('gu-layout')

interface Props extends React.HtmlHTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}
const Layout:React.FC<Props> = (props)=>{
    const {className,...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside = children.length && children.reduce((result,node)=>result || node.type === Aside,false) 
    return(
        <div className={sc('',{extra:[className,hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
}
export default Layout