# Plantify

Plantify is a WIP that makes finding, creating and saving your favorite plant-based recipes easy as pie!

As of now the available features are:

- **Login and Registration**
- **Logged in users can save their favorite recipes to a My Recipes list**

Features soon to be added:

- **Search for vegan/vegetarian recipes from the Recipe - Food - Nutrition API**
- **Add these searched recipes to a favorites list**

## Installation:

Assuming you have Ruby, Rails and Node.js installed,

- Fork and clone this repo
- From the root directory:
  - cd into the pbc-client directory
  - Run `$ npm install`
- cd into the pbc-api directory
  - Run `$ rake db:migrate`
  - Run `$ rake start`
- Now you should have the app open up in your browser

## Frameworks and Libraries Used

- Front-end: JavaScript libraries ([React](https://reactjs.org/), [Redux](https://redux.js.org/))
- [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk)
- Back-end: [Ruby on Rails](https://github.com/rails/rails)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Tachyons](http://tachyons.io/)

## Author

- [Brenden Thornton](https://github.com/bthornton505)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bthornton505/plant-based-chef. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

All software is available as open source under the terms of the [MIT License](https://github.com/bthornton505/plant-based-chef/blob/master/LICENSE).
