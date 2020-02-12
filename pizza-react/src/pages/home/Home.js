import React from 'react';
import './Home.scss';
import MainCarousel from '../../components/carousel';
import About from '../about';
import Menu from '../menu';
import Testimonials from '../testimonials/Testimonials';
import Contacts from '../contacts/Contacts';
// import Deserts from '../deserts';


const Home = () => {
  return (
    <div className="p__main">
        <MainCarousel />
        <About classList="home"/>
        <Menu classList="home" />
        <Testimonials classList="home" />
        <Contacts classList="home" />
    </div>    
  )  
}

export default Home;