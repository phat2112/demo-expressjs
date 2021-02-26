import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {test, findById, testUpdate} from './test';

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    // test().catch(error => console.log('error', error))
    findById(1);
    testUpdate({name: 'Push up', time: 60, image: 'https://placeimg.com/640/480/any', id: 12})
}).catch(error => console.log(error));
