import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Aside from './aside'
import './layout.example.scss'
export default function(){
    return(
        <>
        <div>
            <h1>第一个例子</h1>
            <Layout style={{height:500}}>
                <Header className='x'>Header</Header>
                <Content className='y'>Content</Content>
                <Footer className='x'>Footer</Footer>
            </Layout>
        </div>
        <div>
            <h1>第二个例子</h1>
            <Layout style={{height:500}}>
                <Header  className='x'>Header</Header>
                <Layout>
                    <Aside className='z'>Aside</Aside>
                    <Content className='y'>Content</Content>
                </Layout>
                <Footer className='x'>Footer</Footer>
            </Layout>
        </div>
        <div>
            <h1>第三个例子</h1>
            <Layout style={{height:500}}>
                <Header className='x'>Header</Header>
                <Layout>
                    <Content className='y'>Content</Content>
                    <Aside className='z'>Aside</Aside>
                </Layout>
                <Footer className='x'>Footer</Footer>
            </Layout>
        </div>
        <div>
            <h1>第四个例子</h1>
            <Layout style={{height:500}}>
            <Aside className='z'>Aside</Aside>
                <Layout>
                <Header className='x'>Header</Header>
                <Content className='y'>Content</Content>
                </Layout>
                <Footer className='x'>Footer</Footer>
            </Layout>
        </div>
        
        </>
    )
}