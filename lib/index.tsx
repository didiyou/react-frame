 import React from 'react'
 import './index.scss'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,NavLink} from 'react-router-dom'
import {IconDemo} from './icon/icon.demo'
import DialogExample from './dialog/dialog.example'
import ButtonExample from './button.example'
import LayoutExample from './layout/layout.example'
import {Layout,Aside,Header,Content,Footer} from './layout/layout'
import './page.scss'
import logo from './icons/logo.png'


ReactDOM.render(
    <Router>
    <Layout className="page">
    <Header className='site-header'>
        <div className='logo'>
            <img src={logo} height='120' width='120' alt=''/>
            RUI
        </div>
    </Header>
    <Layout>
        <Aside className='site-aside'>
            <h2>组件</h2>
            <ul>
                <li>
                    <NavLink to='/icon'>Icon</NavLink>
                </li>
                <li>
                    <NavLink to='/button'>Button</NavLink>
                </li>
                <li>
                    <NavLink to='/dialog'>Dialog</NavLink>
                </li>
                <li>
                    <NavLink to='/layout'>布局</NavLink>
                </li>
            </ul>
        </Aside>
        <Content className='site-main'>
            <Route path='/icon' component={IconDemo}/>
            <Route path='/button' component={ButtonExample}/>
            <Route path='/dialog' component={DialogExample}/>
            <Route path='/layout' component={LayoutExample}/>
        </Content>
    </Layout>
    <Footer className="site-footer">@Dylan</Footer>
    </Layout>
    </Router>
    ,document.querySelector("#root"))