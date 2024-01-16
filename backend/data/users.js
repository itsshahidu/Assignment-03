import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('654321', 10),
    isAdmin: true,
  },
  {
    name: 'Shahid Ullah',
    email: 'shahid@email.com',
    password: bcrypt.hashSync('654321', 10),
  },
  {
    name: 'Ahmad Khan',
    email: 'khan@email.com',
    password: bcrypt.hashSync('654321', 10),
  },
];

export default users;
