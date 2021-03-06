/**
 * Hello world
 */

import {
    establishConnection,
    establishPayer,
    checkProgram,
    sayHello,
    reportGreetings,
} from './client';

async function main() {
    console.log("Let's say hello to a Solana account...");

    // Establish connection to the cluster
    await establishConnection();

    // Determine who pays for the fees
    await establishPayer();

    // Check if the program has been deployed
    await checkProgram();

    // Say hello to an account
    await sayHello(12);

    // Find out how many times that account has been greeted
    await reportGreetings();

    console.log('Success');
}
// TODO start express server after solana setup
main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);
