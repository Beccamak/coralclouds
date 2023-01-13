import './home.header-section.styles.css';
import {ReactComponent as Home} from '../../../assets/categories/home.svg';
import {ReactComponent as Picture} from '../../../assets/categories/picture.svg';
import Button from '../../button/button.component';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHeaderSection = ()  => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const navigate = useNavigate();

    const goToContactUsPage = () => {
      navigate("/contact-us")
    }
    return(
        <div ref={ref} className='hm-hd-sc'>
        <div className='header-text' >
        <p className='we' style={{
            "font-size": isInView ? "" : "1.8rem",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>WE</p>
        <p className='hm-header-title' style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>Help businesses <br /> maximize revenue and <br />satisfy customers</p>
        <p className='hm-header-text' style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>Our best is put into helping you satisfy your clients and customers by providing solutions to the problems your customers are inderictly looking for and there
        by maximizing profits.</p>
        <Button children="Get In Touch" onClick={goToContactUsPage} style={{
            transform: isInView ? "none" : "translateY(-400px)",
            opacity: isInView ? 1 : 0,
            padding: isInView? "": "2rem 4rem" ,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }} />
        </div>
        <div className='header-pic' style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
        <div className='gre '>
        <svg className='main-pic' viewBox="0 0 250 250" xmlns="http:www.w3.org/2000/svg">
        <defs>
        <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
        <path fill="#4D4DFF" d="M35.2,-62.4C46.6,-54.3,57.7,-47,67.2,-36.7C76.6,-26.5,84.5,-13.2,85.2,0.4C85.9,14.1,79.5,28.1,71.2,40.4C62.9,52.6,52.7,63.1,40.5,66.8C28.3,70.5,14.1,67.5,1.3,65.3C-11.5,63,-23.1,61.5,-34.5,57.3C-45.9,53.2,-57.1,46.3,-62.5,36.3C-67.8,26.3,-67.3,13.1,-66.5,0.4C-65.8,-12.3,-64.7,-24.5,-59.8,-35.3C-55,-46.2,-46.2,-55.6,-35.6,-64.2C-25,-72.8,-12.5,-80.6,-0.3,-80C11.8,-79.5,23.7,-70.5,35.2,-62.4Z" transform="translate(100 100)" />
        </clipPath>
        </defs>
        
        <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" href="https:i.ibb.co/qpTBjzQ/pexels-fauxels-3184634.jpg" clip-path="url(#user-space)"/>
   </svg>
   
        <Picture className='neon-header' />
        </div>

        </div>
        </div>
    )
}

export default HomeHeaderSection;