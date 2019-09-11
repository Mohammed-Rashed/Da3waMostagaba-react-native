import {
    SEARCH_BOX
  } from './types';

  
  export const TimelineAction = ({ text, text2 }) => {
    alert('hi')
    return {
      type:SEARCH_BOX,
      payload: text
    };
  };
 