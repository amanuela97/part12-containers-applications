/* eslint-disable no-undef */
//use admin
db.auth('root', 'example')

db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

db.createCollection('blog')
db.createCollection('user')
db.user.insertOne({ username: 'manu', password: 'Manu1234' })
