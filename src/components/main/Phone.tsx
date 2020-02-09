import React, { Suspense } from "react";

import './Phone.scss'
import coque from '../../assets/coque.png'
import styled from "styled-components";

import { HeaderBar } from "./HeaderBar";

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from "../../routes";


const PhoneCoque = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    z-index: 99;
    
    width: 100%;
    height: 100%;

    background-size: cover;
    background-image: url(${coque});

    pointer-events: none;
`

export const Phone: React.FC = (props: any) => {
    const loading = () => <div className="animated fadeIn pt-1 text-center">Chargement...</div>

    return (
        <div className="phone-container">
            <PhoneCoque />
            <div className="test-bg"/>

            <Suspense fallback={loading()}>
                <div className="phone-content">
                    <HeaderBar />
                    <HashRouter basename='/phone'>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props: any) => (
                                        <route.component {...props} />
                                    )} />
                                ) : (null);
                            })}
                        </Switch>
                    </HashRouter>
                </div>
            </Suspense>
        </div>
    )
};

