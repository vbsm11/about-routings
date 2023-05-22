import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';
import {Content} from './Content';

type PagePropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PagePropsType> = ({pages}) => {

    const params = useParams()
    const i = Number(params.id)


    return i < pages.length && i >= 0
        ? (
            <Content heading={pages[i].heading} about={pages[i].about}/>
        )
        : <Error404/>

};

