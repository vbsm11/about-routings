import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';

type PagePropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PagePropsType> = ({pages}) => {

    const params = useParams()
    const i = Number(params.id)

    return (
        <div>
            <h3>{pages[i].heading}</h3>
            {pages[i].about}
        </div>
    );
};

