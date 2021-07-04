import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route exact path="/" />

        <Route exact path="/en" />
        <Route exact path="/es" />
        <Route path="*" />
    </Route>
);