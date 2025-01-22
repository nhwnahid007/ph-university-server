import app from './app';
import config from './app/config';

import mongoose from 'mongoose';
//eslint-disable-next-line no-console
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      //eslint-disable-next-line no-console
      console.log(`PH university is listening on port ${config.port}!`);
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
