function createCounter() {
    let count = 0;

    function increment() {
        count += 1;
        console.log(`Current Count: ${count}`);
    }

    return increment;
}

const counter = createCounter();

counter();
counter();
counter();
