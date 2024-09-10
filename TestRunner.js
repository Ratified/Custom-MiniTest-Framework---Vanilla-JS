export class TestRunner {
    constructor() {
        this.tests = [];
        this.beforeEachFn = null;
        this.afterEachFn = null;
        this.beforeAllFn = null;
        this.afterAllFn = null;
        this.executionOrder = 'sequential';
    }

    registerTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    setExecutionOrder(order) {
        this.executionOrder = order;
    }

    filterTests(filterFn) {
        this.tests = this.tests.filter(filterFn);
    }

    runTests() {
        console.log('Starting test suite...');
        
        if (this.beforeAllFn) this.beforeAllFn();

        const tests = this.executionOrder === 'random'
            ? this.tests.sort(() => Math.random() - 0.5)
            : this.tests;

        for (const { name, testFunction } of tests) {
            try {
                if (this.beforeEachFn) this.beforeEachFn();
                testFunction();
                console.log(`✅ ${name}`);
                if (this.afterEachFn) this.afterEachFn();
            } catch (error) {
                console.error(`❌ ${name}: ${error.message}`);
            }
        }

        if (this.afterAllFn) this.afterAllFn();
        
        console.log('Test suite completed.');
    }

    beforeEach(fn) {
        this.beforeEachFn = fn;
    }

    afterEach(fn) {
        this.afterEachFn = fn;
    }

    beforeAll(fn) {
        this.beforeAllFn = fn;
    }

    afterAll(fn) {
        this.afterAllFn = fn;
    }
}