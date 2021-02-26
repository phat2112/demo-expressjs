import {getRepository} from 'typeorm';
import {Workout} from './entity/Workout';

export const test = async () => {
  const workoutRepo = getRepository(Workout);
  const newWorkout = workoutRepo.create({name: 'squad', time: 45, image: 'https://placeimg.com/640/480/any'});
  await workoutRepo.save(newWorkout).catch(error => console.log('error', error));
  console.log('create success');
}

export const findById = async (id: number) => {
  const workoutRepo = getRepository(Workout);
  const found = await workoutRepo.findOne(id);
  console.log('found', found)
}

export const testUpdate = async (workout: Workout) => {
  const workoutRepo = getRepository(Workout);
  const updated = await workoutRepo.update(1, {...workout});
  console.log('updated', updated);
}

export const deletedById = async (id: number) => {
  const workoutRepo = getRepository(Workout);
  const deleted = await workoutRepo.delete(id);
  console.log('deleted', deleted)
}