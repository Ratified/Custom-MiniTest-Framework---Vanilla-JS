# Question: Build a Mini Testing Framework in Vanilla JavaScript
## Objective: Create a simplified version of a testing framework similar to Jest using vanilla JavaScript. Your framework should allow for the definition, execution, and reporting of test cases with various assertions.

## Requirements:
### Test Runner
Implement a TestRunner class with the following features:
```bash
. registerTest(name, testFunction): Adds a test case to the runner's internal list.
. runTests(): Executes all registered test cases and reports results to the console.
. filterTests(filter): Filters test cases based on a given filter (e.g., by name or tag).
. setExecutionOrder(order): Sets the order in which test cases are executed.
```

### Assertions
Create an assertion library with functions like:
```bash
assertEqual(actual, expected, message): Compares two values for equality.
assertNotEqual(actual, expected, message): Compares two values for inequality.
assertTrue(value, message): Checks if a value is truthy.
assertFalse(value, message): Checks if a value is falsy.
assertContains(array, item, message): Checks if an array contains a specific item.
Provide clear error messages when assertions fail.
```

### Test Case Definition
Define a test function that:

Registers test cases with a descriptive name.

Groups test cases into suites using a describe function.

Allows for the addition of tags or labels to categorize test cases.

### Reporting
Implement a reporting mechanism that:

1. Outputs test results to the console.

2. Includes details about passed and failed tests, including test names, assertions, expected values, actual values, and error messages.

3. Allows for customization of the report format and content.

### Error Handling
Implement robust error handling to:

1. Catch exceptions thrown by test cases or assertions.

2. Provide informative error messages and stack traces.

3. Allow for the graceful handling of test failures without halting the entire test suite.


### Extensibility
Design the framework to be extensible by:

1. Allowing users to create custom assertion functions.
2. Providing a way to create custom reporters for different output formats.
Implementing hooks like beforeEach, afterEach, beforeAll, and afterAll for setting up and tearing down test environments.


### Additional Considerations
Consider implementing:
1. A promise-based API for asynchronous testing.
2. A timeout mechanism to prevent tests from running indefinitely.
3. Code coverage tools to measure test effectiveness.
4. Integration with a continuous integration (CI) pipeline.


### Instructions:
1. Implement the TestRunner class with the specified methods and features.
2. Create the assertion functions in a separate module.
3. Define and group test cases using the test and describe functions.
4. Implement a reporting mechanism that outputs results to the console.
5. Handle errors gracefully and provide informative messages.
6. Ensure the framework is extensible and consider additional features for real-world scenarios.