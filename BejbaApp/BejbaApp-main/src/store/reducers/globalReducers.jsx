const storedLikes = localStorage.getItem("likes");
const initialState = {
  mems: storedLikes ? JSON.parse(storedLikes) :  [
    {
      id: 1,
      img: "bejba1.jpg",
      upvotes: 6,
      downvotes: 0,
    },
    {
      id: 2,
      img: "bejba2.jpeg",
      upvotes: 1,
      downvotes: 7,
    },
    {
      id: 3,
      img: "bejba3.jpg",
      upvotes: 3,
      downvotes: 1,
    },
    {
      id: 4,
      img: "bejba4.jpg",
      upvotes: 7,
      downvotes: 6,
    },
    {
      id: 5,
      img: "bejba5.jpg",
      upvotes: 4,
      downvotes: 1,
    },
    {
      id: 6,
      img: "bejba6.jpg",
      upvotes: 7,
      downvotes: 1,
    },
    {
      id: 7,
      img: "bejba7.jpg",
      upvotes: 7,
      downvotes: 1,
    },
  ],
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_LIKES": {
      const { memId } = action.payload;
      return {
        ...state,
        mems: state.mems.map((mem) => {
          if (mem.id === memId) {
            return { ...mem, upvotes: mem.upvotes + 1 };
          }
          return mem;
        }),
      };
    }
    case "INCREMENT_DISLIKES": {
      const { memId } = action.payload;
      return {
        ...state,
        mems: state.mems.map((mem) => {
          if (mem.id === memId) {
            return { ...mem, downvotes: mem.downvotes + 1 };
          }
          return mem;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default likesReducer;
