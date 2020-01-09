# Welcome to React 16 New Features Workshop!

This workshop does not cover ALL new features of React, yet it will give you the refreshment you need as a react developer in case you didn't had the chance to play around and experience with the latest features.<br>

## Background Story
You are required to develop a webapp that aims to help kindergarten teachers to monitor the children's arrival and presence.
With the help of such system, we can avoid children being forgotten in cars, make sure all is good at the child home, be sure for eveyminute that the child is safe.<br>
The main user interface of this app shows a list of registered children.
For each child there is a set of actions the teacher can make to monitor the child status.

> More ideas and action to this UI are welcome in a PR/issue

## Before You Start
The project is configured to work with [Bootstrap](https://getbootstrap.com/docs/4.3/components/) UI library. Just follow the instructions on the docs to get your desired designed component.
In case you're not familiar with the process just add a styled [Button](https://getbootstrap.com/docs/4.3/components/buttons/#examples) to the page to play around with it e.g. `<button type="button" class="btn btn-warning">Warning</button>` <br>
Yes - Its that simple!<br>
Note that we're not on UI/UX workshop, so I don't really care about the design. So [Bootstrap](https://getbootstrap.com/docs/4.3/components/) gives us the freedom of styling yet being agnostic to it.

### Step 1: Error Boundaries and Reporting
Make integration with [Sentry](https://sentry.io) and use React's `Error Boundaries` solution to report rendering errors.
Use [Sentry-Testkit](https://wix.github.io/sentry-testkit/#/) to make `ErrorBoundary.test.js` test work!
> Pay attention that `sentry-testkit` is already configured in the test.


### Step 2: Context
Use React's `Context API` to pass the following parameters as context to consuming components:
1. Font Color Theme - create a toggle controller for the user to set her own favorite theme for text colors.
2. TDB


### Step 3: Hooks
We will use `useState` and `useEffect` hooks to implement the following functionality:
* List of children with the following columns:
  * "Named Avatar"
  * Name
  * Check-in Status
  * Notify (dropdown actions):
    * Notify parent for missing child
    * Notify day care staff
    * Notify general message
  * Check-in Timestamp/Action
    * Grouped buttons of "check-in" and "sick" actions
* Add option to add a child to the list

### Step 4: Lazy Rendering and Loading
Make children list component loads and render only after children data is loaded from server.
