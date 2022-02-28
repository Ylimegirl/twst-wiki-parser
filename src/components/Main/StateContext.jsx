import React, { createContext, useState, useRef } from 'react';
import { DETAILS_KEYS, STORY_TYPES } from 'Constants';

const defaultState = {
  [DETAILS_KEYS.STORY_TYPE]: STORY_TYPES.PERSONAL_STORY,
  [DETAILS_KEYS.TRANSLATOR]: '',
  [DETAILS_KEYS.TL_LINK]: '',
  [DETAILS_KEYS.PR_JP]: '',
  [DETAILS_KEYS.PR_EN]: '',
  [DETAILS_KEYS.TITLE]: '',
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [renders, setRenders] = useState({});
  // needed to solve stale closure problem when renders is passed to CKEditor autosave
  // that was causing existing input values to be erased
  // https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
  const renderRef = useRef(renders);
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem('details')) || defaultState,
  );
  const [nav, setNav] = useState(JSON.parse(localStorage.getItem('nav')) || {});

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);
  const tlNotesRef = useRef(null);

  const state = {
    renders,
    renderRef,
    setRenders,
    details,
    setDetails,
    nav,
    setNav,
    inputRef,
    tlNotesRef,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
