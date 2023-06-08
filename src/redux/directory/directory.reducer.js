
const INITIAL_STATE={

    sections: [
        {
          title: 'Dimsums',
          imageUrl: 'https://i.ibb.co/WV4F3yG/276455203-900469b2ae.jpg',
          id: 1,
          linkUrl: 'shop/dimsums'
        },
        {
          title: 'Fried Rice',
          imageUrl: 'https://i.ibb.co/b2XMcwm/2153551333-702d874609-b.jpg',
          id: 2,
          linkUrl: 'shop/friedrice'
        },
        {
          title: 'Soup',
          imageUrl: 'https://i.ibb.co/WfGvmDn/8191470839-d33e84c33c-b.jpg',
          id: 3,
          linkUrl: 'shop/soup'
        },
        {
          title: 'Noodles',
          imageUrl: 'https://i.ibb.co/fr9xswd/noodle.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/noodles'
        },
        {
          title: 'Seafood',
          imageUrl: 'https://i.ibb.co/87crQSR/seafood.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/seafood'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }      
}

export default directoryReducer;