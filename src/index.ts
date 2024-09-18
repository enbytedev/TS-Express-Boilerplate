import startExpress from './express/express.js';
import {configureLogger} from './setup/mainLogger.js';

configureLogger();
startExpress();