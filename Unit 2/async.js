"use strict";

async function startRunners() {
    let runner1 = false;
    let runner2 = false;
    let loser = "";

    let runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = "runner1";
            resolve(true);
        }, 1000);
    });

    let runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = "runner2";
            resolve(true);
        }, 2000);
    });

    return [await runner1Go, await runner2Go, loser];
}

startRunners().then((result) => {
    console.log(result[2]);
});
