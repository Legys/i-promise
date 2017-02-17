export default {
    storeAdd(prom) {
        if( localStorage.getItem('promises') === null) {
            let promises = [];
            promises.push(prom);
            localStorage.setItem('promises', JSON.stringify(promises));
        } else {
         let old = JSON.parse(localStorage.getItem('promises'))

         localStorage.setItem('promises', JSON.stringify(old.concat(prom)));
        }

    },
    getPromises() {
        return JSON.parse(localStorage.getItem('promises'));
    },
    clear() {
        localStorage.clear();
    }
}