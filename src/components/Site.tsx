import React, {useEffect, useState} from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Page} from './pages/Page';
import {dataState} from '../data/dataState';
import {styled} from 'styled-components';


export const Site = () => {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(0);

        useEffect(() => {

            function handleResize() {
                setWindowSize(window.innerWidth)
            }

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return windowSize;
    }

    let size = useWindowSize()
    console.log(size)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size > 600 &&
                    <div className={styles.nav}>
                        <NavWrapper><NavLink to="/page/0">Page 1</NavLink></NavWrapper>
                        <NavWrapper><NavLink to="/page/1">Page 2</NavLink></NavWrapper>
                        <NavWrapper><NavLink to="/page/2">Page 3</NavLink></NavWrapper>
                    </div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page/0"/>}/>

                        <Route path="/page/:id" element={<Page pages={dataState.pages}/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: underline;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }`

