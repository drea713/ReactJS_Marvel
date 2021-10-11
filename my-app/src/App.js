import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './components/Main';
import firebase from './firebase'

export const App = () => {
    const db = firebase.firestore();

    

    return (
        <React.Fragment>
            <Main />
        </React.Fragment>
    )
}
