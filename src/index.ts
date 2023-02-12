import { add } from '@src/math/add';
import dotenv from 'dotenv-safe';

dotenv.config();
console.log('add: ', add(1, 4));
console.log('MY_NAME: ', process.env.MY_NAME);
