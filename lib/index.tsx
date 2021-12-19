 import React from 'react'
 import './index.scss'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import IconExample from './icon/icon.example'
import DialogExample from './dialog/dialog.example'
import ButtonExample from './button.example'
const fn:React.MouseEventHandler = (e)=>{
    console.log(e.target)
    
}

ReactDOM.render(
    <Router>
    <div>
    <header>
        <div className='logo'>
            RUI
        </div>
    </header>
    <div>
        <aside>
            <h2>组件</h2>
            <ul>
                <li>
                    <Link to='/icon'>Icon</Link>
                </li>
                <li>
                    <Link to='/button'>Button</Link>
                </li>
                <li>
                    <Link to='/dialog'>Dialog</Link>
                </li>
            </ul>
        </aside>
        <main>
            <Route path='/icon' component={IconExample}/>
            <Route path='/button' component={ButtonExample}/>
            <Route path='/dialog' component={DialogExample}/>
        </main>
    </div>
    </div>
    </Router>
    ,document.querySelector("#root"))