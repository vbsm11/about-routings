import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Page} from './pages/Page';
import {dataState} from '../data/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink to="/page/0" className={({isActive}) => isActive ? styles.active : styles.navLink}>
                            Page 1
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/page/1" className={({isActive}) => isActive ? styles.active : styles.navLink}>
                            Page 2
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/page/2" className={({isActive}) => isActive ? styles.active : styles.navLink}>
                            Page 3
                        </NavLink>
                        <div>
                            <a href="/page/0">Native link</a>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page1"/>}/>

                        <Route path="/page/:id" element={<Page pages={dataState.pages}/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

