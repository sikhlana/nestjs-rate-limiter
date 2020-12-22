import {
    testBelowMaximumPoints,
    testExceedingMaximumPoints,
    testBlockLocalhost,
    testBlockNonLocalhost,
    testWhiteListLocalhost,
    testRestrictLocalhost,
    testExecEvenly
 } from '@examples/rate-limiter-points-test';
import * as assert from 'assert';

const BASE_URL  = 'http://localhost:3333/api';

const execute = async () => {
    try{
        /*assert (await testBelowMaximumPoints(BASE_URL) );

        assert (await testExceedingMaximumPoints(BASE_URL) );

        assert ( await testBlockLocalhost(BASE_URL));

        assert ( await testBlockNonLocalhost(BASE_URL));

        assert( await testWhiteListLocalhost(BASE_URL));

        assert( await testRestrictLocalhost(BASE_URL));*/
        console.log( 'Starting even');
        assert( await testExecEvenly(BASE_URL));
        console.log( 'Completed even');
        process.exit(1);
    }catch(err){
        process.exit(1);
    }
}

execute();

