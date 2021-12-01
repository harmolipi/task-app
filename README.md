# Task App

Created as part of [The Odin Project](https://www.theodinproject.com) curriculum.

View on [Github](https://github.com/harmolipi/task-app).

## Functionality

This is the [Task App](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/handle-inputs-and-render-lists) project - my first foray into React by creating a simple input field that adds items to a list component.

## Thoughts

The main challenge of this one was figuring out how exactly to structure components in React. Initially I thought I successfully completed the project, but then I realized that all of my logic (both for the list display and the input field + button) was in my `Overview` component, which is just supposed to include the list display. I then moved the input field and button to the `App` component, which involved a lot of trial and error as I figured out how exactly to get the new item to be added to the `Overview`.

Eventually though, it made sense. `Overview` does nothing but receive an array via its `props`, and iterate through them, mapping them to `<li>` elements. `App` uses `onChange` on the `input` to keep `state.newTask` updated with its value. Finally, when the form is submitted, `onSubmit` adds the new task to the `tasks` array.

`tasks` is simply passed to `Overview`, and React is smart enough to know to update it accordingly - thus the list printed always reflects the current contents of the array. Awesome!

God bless.

-Niko Birbilis
