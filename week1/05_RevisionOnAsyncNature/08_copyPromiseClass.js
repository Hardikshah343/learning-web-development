class copyPromise {
    constructor (callback) {
        // callback(this.resolve(), this.reject());
        this.pass = callback.resolve;
        this.error = callback.reject;
        console.log(this.pass);
    }
    resolve() {
        this.pass = pass;
    }
    reject() {
        this.error = reject;
    }
    then(fn) {
        return fn(this.pass);
    }
    catch(fn) {
        return fn(this.reject);
    }
}

const p = new copyPromise(function(resolve, reject) {
    resolve(100);
    reject(100);
});
p.then(function(data) {
    console.log("HELlo", data);
})
