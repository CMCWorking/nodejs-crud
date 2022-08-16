This project require MySQL host, please turn on your MySQL local server before running below commands.

### MySQL config

| Config   | Detail      |
| -------- | ----------- |
| Host     | localhost   |
| Username | root        |
| Password | null        |
| Database | nodejs_crud |

### To run this project, please use the below command

```shell
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npm run start
```
