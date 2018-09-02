import React from 'react'
import MainNavbar from '../dashboard/main_navbar'
import MainContent from '../dashboard/main_content'
import Footer from '../dashboard/footer'

export default props => (
    <div className='dashboard'>
        <MainNavbar />
        <MainContent>
            { props.children }
        </MainContent>  
    </div>
)