# GitHub Actions

## Workflows

A workflow is a configurable automated process made up of one or more jobs.
Workflows will run when triggered by an event in your repository, triggered manually, or at a defined schedule.

## Events

An event is a specific activity in a repository that triggers a workflow run.
For example, activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository.

## Jobs
A job is a set of steps in a workflow that is executed on the same runner.
Each step is either a shell script that will be executed, or an action that will be run.
Steps are executed in order and are dependent on each other.
Data can be shared between steps in a job using outputs, or by storing data as artifacts.
A job can have dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other.
When a job takes a dependency on another job, it will wait for the dependent job to complete before starting.

## Actions
An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task.
Use an action to help reduce the amount of repetitive code that you write in your workflow files.
An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up authentication for a cloud service.

## Runners
A runner is a server that runs your workflows when they're triggered.
Each runner can run a single job at a time.
GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners for your workflows.
