import { schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const notifications = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764f8452ef92346c772",
      name: { first: "John", last: "Doe" },
      age: 24,
      email: "john.doe@holberton.school",
      picture: "http://placehold.it/32x32"
    },
    context: {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    }
  },
];

export const normalizedData = normalize(notifications, [notification]);
