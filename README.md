# Sample Repository for Issues Encountered with ESM and double Test for Third Party Node Libraries.

This repository exists only for demonstrating a use case that I am failing to understand. 

## Scenario
During the course of converting an opensource module from CJS to ESM I have discarded some tooling. Explicitly

- babel
- babel rewire

I have found that the babel rewire tool was very useful for custom mocks of third party modules. 

Moving to a fully ESM based solution meant switching mocking tooling. After reading some of Gil Tayar's postings I 
started to use testdouble. It is by all means an excellent tool. 
However is there an assumption for the **third-party-thing-test** that when using ESM the imported third party module is
also ESM?

![SyntaxError: The requested module 'is-number' does not provide an export named 'default'](/images/no-default-exported.png)

What I believe I am seeing is that for the [is-number module](https://www.npmjs.com/package/is-number) frequently used
in the testdouble documentation for the **third-party-thing-test** we will see issues because it has no default export or
named export.

Am I seeing this correctly? If so is it worth me documenting this scenario and saying that one solution is to wrap the 
third party solution in your own module and to mock that?
