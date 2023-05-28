// store/actions.js
export const incrementLikes = (memId) => {
    return {
      type: "INCREMENT_LIKES",
      payload: {
        memId: memId,
      },
    };
  };
  
  export const incrementDislikes = (memId) => {
    return {
      type: "INCREMENT_DISLIKES",
      payload: {
        memId: memId,
      },
    };
  };
  