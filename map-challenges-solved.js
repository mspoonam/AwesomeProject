/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./data/profileData");
const shaadiData = require("./data/shaadiData.json");
const _ = require("lodash");
/*
  Challenge 1.1 - write a function that returns an array of fullnames i.e. each element is a string that has
  `title, first, last` instead of those separate fields
  Expected const profileNameArrays = ['fullnameOne', 'etc', 'etc'] <-- array of strings fullnames
*/

// const getProfileNames = profiles => {
//   return profiles.map(
//     ({ name }) => `${name.title}  ${name.first} ${name.last}`
//   );
// };

// const profileNames = getProfileNames(profiles);
// console.log(profileNames);

// console.log(shaadiData);

/*
  Challenge 1.2 - write a function that returns an array that has users grouped by nationality
  Expected const usersGroupedByNationality = [
    { 
      'BR': [{}, {}],
      'GB': [{}, {}],
      ...// users grouped by other countries
    }
  ]
  Note: This might feel super hard. Don't get stuck on it. Try it later
*/

// const groupByNationality = profiles => {
//   return _.groupBy(profiles, "nat");
// };

// const usersGroupedByNationality = groupByNationality(profiles);

// console.log(usersGroupedByNationality);

/*
  Challenge 1.3 - write a function that returns a transformed array of profiles combined with photo data

  Start with this data
 */

const profilesData = [
  {
    profile: { id: "26144385", some: "more", other: "misc" },
    photo_details: {
      photos: [{ small: "bar-1", medium: "baz-1" }]
    }
  },
  {
    profile: { id: "26144334", some: "even", other: "some more" },
    photo_details: {
      photos: [
        { small: "bar-2", medium: "baz-2" },
        { small: "fizz-2", medium: "buzz-2" }
      ]
    }
  }
];

/* and then transform it into this shape:

const expected = [
  {
    id: "26144385",
    some: "more",
    other: "misc",
    photos: [
      {
        small: "bar-1",
        medium: "baz-1"
      }
    ]
  },
  {
    id: "26144334",
    some: "even",
    other: "some more",
    photos: [
      {
        small: "bar-2",
        medium: "baz-2"
      },
      {
        small: "fizz-2",
        medium: "buzz-2"
      }
    ]
  }
];

  Note: This might feel super hard. Don't get stuck on it. Try it later
*/

const getProfilesWithPhotos = profilesData => {
  return profilesData.map(pro => {
    const profile = pro.profile;
    const photos = pro.photo_details.photos;
    return {
      ...profile,
      photos
    };
  });
};

const res = getProfilesWithPhotos(profilesData);

console.dir(res);