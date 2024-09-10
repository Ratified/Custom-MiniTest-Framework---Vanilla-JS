import { TestRunner } from './TestRunner.js';
import { assertEqual, assertContains } from './assertions.js';

const runner = new TestRunner();

const describe = (name, fn) => {
    console.log(`Suite: ${name}`);
    fn();
};

const test = (name, fn) => {
    runner.registerTest(name, fn);
};

describe('Math Operations', () => {
    runner.beforeEach(() => {
        console.log('Setting up...');
    });

    runner.afterEach(() => {
        console.log('Cleaning up...');
    });

    test('should add numbers correctly', () => {
        assertEqual(2 + 2, 4);
    });

    test('should handle failing test', () => {
        assertEqual(2 + 2, 5, 'Addition is incorrect');
    });
});

describe('Array Operations', () => {
    test('should contain item', () => {
        assertContains([1, 2, 3], 2);
    });

    test('should fail if item not in array', () => {
        assertContains([1, 2, 3], 5, 'Item not found');
    });
});

runner.runTests();