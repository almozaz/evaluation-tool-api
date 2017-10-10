const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const classes = [
  {
    _id: 1,
    batch: 1,
    startDate: '2017-10-10T09:23:57.544Z',
    endDate: '2017-10-25T09:23:57.544Z',
  },
  {
    _id: 2,
    batch: 2,
    startDate: '2017-10-10T09:23:57.544Z',
    endDate: '2017-10-25T09:23:57.544Z',
  }];

const students = [
  {
    _id: 3,
    name: 'Jan',
    photo: 'placeholder',
    class: 1,
  },
  {
    _id: 4,
    name: 'Jop',
    photo: 'placeholder',
    class: 1,
  },
  {
    _id: 5,
    name: 'Jes',
    photo: 'placeholder',
    class: 2,
  },
  {
    _id: 6,
    name: 'Jup',
    photo: 'placeholder',
    class: 2,
  },
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

// classes.map((batch) => {
//   feathersClient.service('classes').create(batch)
//     .then((result) => {
//       console.log('Class seeded...', result.batch);
//     }).catch((error) => {
//       console.error('Error seeding class!', error.message);
//     });
// });
// function seedStudents() {
//   feathersClient.service('classes').find(batch1)
//     .then((result) => {
//       students.map((students) => {
//         feathersClient.service('students').create(students)
//           .then((result) => {
//             console.log('Student seeded...', result.name);
//           }).catch((error) => {
//             console.error('Error seeding student!', error.message);
//           });
//       });
//     }).catch((error) => {
//       console.error('Error finding batch 1!', error.message);
//     });
// };
//
//
//   students.map((students) => {
//     feathersClient.service('students').create(students)
//       .then((result) => {
//         console.log('Student seeded...', result.name);
//       }).catch((error) => {
//         console.error('Error seeding student!', error.message);
//       });
//   });
// }
