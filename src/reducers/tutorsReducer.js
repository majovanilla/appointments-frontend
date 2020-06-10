const initState = {
  list: [
    {
      id: 1,
      name: 'Juana Pérez',
      email: 'something@me.com',
      subject: 'History',
      about: 'Next, Dan Bot uses the information collected to predetermine if there is a winning case. He performs swift hidden moves on the available board cells, first with his marker and then with his opponent’s marker. If placing his marker on any available spot gets him a winning move, then the game is over and he wins or he checkmates and automatically wins the game if there was no other possible move for his opponent. But if there isn’t any winning case, he applies the next line of action.',
      img: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s30-rung-5404123-1.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=&markalpha=90&markpad=13&markscale=10&markx=25&q=65&usm=15&vib=3&w=1400&s=55dbe63d341051051b9f24ce020e525e',
      rate: '$ 154/hr',
      experience: '4 years',
    },
    {
      id: 2,
      name: 'Juana Pérez',
      email: 'something@me.com',
      subject: 'History',
      about: 'Next, Dan Bot uses the information collected to predetermine if there is a winning case. He performs swift hidden moves on the available board cells, first with his marker and then with his opponent’s marker. If placing his marker on any available spot gets him a winning move, then the game is over and he wins or he checkmates and automatically wins the game if there was no other possible move for his opponent. But if there isn’t any winning case, he applies the next line of action.',
      img: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s30-rung-5404123-1.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=&markalpha=90&markpad=13&markscale=10&markx=25&q=65&usm=15&vib=3&w=1400&s=55dbe63d341051051b9f24ce020e525e',
      rate: '$ 154/hr',
      experience: '4 years',
    },
    {
      id: 3,
      name: 'Juana Pérez',
      email: 'something@me.com',
      subject: 'History',
      about: 'Next, Dan Bot uses the information collected to predetermine if there is a winning case. He performs swift hidden moves on the available board cells, first with his marker and then with his opponent’s marker. If placing his marker on any available spot gets him a winning move, then the game is over and he wins or he checkmates and automatically wins the game if there was no other possible move for his opponent. But if there isn’t any winning case, he applies the next line of action.',
      img: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s30-rung-5404123-1.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=&markalpha=90&markpad=13&markscale=10&markx=25&q=65&usm=15&vib=3&w=1400&s=55dbe63d341051051b9f24ce020e525e',
      rate: '$ 154/hr',
      experience: '4 years',
    },
  ],
};

const tutorReducer = (state = initState, action) => ({
  ...state,
  list: action.list,
});

export default tutorReducer;
