import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Aside from './aside'
export default function(){
    return(
        <>
        <div>
            <h1>第一个例子</h1>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
        <div>
            <h1>第二个例子</h1>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Aside></Aside>
                    <Content></Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
        </>
    )
}