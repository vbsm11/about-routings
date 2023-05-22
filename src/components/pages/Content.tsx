import React from 'react';
import {useNavigate} from 'react-router-dom';

type ContentPropsType = {
    heading: string
    about: string
}

export const Content: React.FC<ContentPropsType> = ({heading, about}) => {

    const navigate = useNavigate()

    const toMainPageHandler = () => {
        navigate('/page/0')
    }

    const toBackHandler = () => {
      navigate(-1)
    }

    return (
        <div>
            <h3>{heading}</h3>
            <div>{about}</div>
            <button onClick={toMainPageHandler}>Main Page</button>
            <button onClick={toBackHandler}>Back</button>
        </div>
    )
}