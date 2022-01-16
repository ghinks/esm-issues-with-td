# Sample Repository for Issues Encountered with ESM and double Test for Third Party Node Libraries.

This repository exists only for demonstrating a use case that I am failing to understand. 

## Scenario
Durinng the course of converting an opensource module from CJS to ESM I have discarded some of the tooling. Explicitly

- babel
- babel rewire

I have found that the babel rewire tool was very useful for custom mocks of third party modules. 

Moving to a fully ESM based solution meant switching mocking tooling. After reading some of Gil Tayar's postings I 
started to use testdouble. It is by all means an excellent tool. 

![SyntaxError: The requested module 'is-number' does not provide an export named 'default'](/images/no-default-exported.png)


