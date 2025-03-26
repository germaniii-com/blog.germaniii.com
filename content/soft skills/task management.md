---
id: task management
aliases: []
tags:
  - softskills
  - management
---

As I have increased my professional experience, I have come across multiple ways on how to manage projects.

Once [[task estimates]] has beeen created, we now move on to [[task management]]. This article will talk about multiple ways on managing or handling tasks.

## Earned Value Management / Analysis (EVM)

This is a project management methodology that integrates cost, schedule and scope of the tasks to measure the performance of the project.
This will help us objectively determine bottlenecks, and points of interests within the project.

### Measurements
Once you have created the [[task estimates]], it is now time to break down the tasks that has been estimated.

> [!TIP]
> This where work experience comes in handy. More experience, means more knowledge on how and when tasks can be done.

There are three variables that you would have to think about with this methodology:
- Planned Value
  - This can refer to the amount of hours you have estimated to the tasks
- Actual Cost
  - In my case, I set a "per hour" unit cost, which is my current hourly rate.
- Earned Value
  - We can compute this value ***during*** the development period. This refers to the amount of actual hours worked on a task.

If you are only making a documentation of the tasks without the need of costing, you can omit the **Actual Cost** variable 


### Documentation

In order for us to properly document this method, my approach can be summarized by the table below:

| Task | Estimated Hours | Total Actual Hours | % Deviation |
| --- | --- | --- | --- |
| Make the button green | 2h | 1h | -66.6%  |

Here is what each column means:
- Task
  - This is the name of the task at hand.
- Estimated Hours
  - This is the ***Planned Value*** which also can be the initially estimated task created from the [[task estimates]].
  - If the [[task estimates]] value is too big, you can break it down into granular parts to properly distribute the bulk of the hours.
- Total Actual Hours
  - This is the ***Earned Value*** which is the actual amount of hours worked on the task.
- % Deviation
  - This is a computation of ` (Total Actual Hours - Estimated Hours) / Estimated Hours `.
  - This represents how you are performing on the current task.

### Cost

If you are not including costs, in this case, you will only be tracking how much work you have done with this formula:
```
  Actual Cost = ∑ (Actual Hours Worked per Task) = x hours
```


If you are including costs in this method. You can calculate the Actual Cost by this formula:
```
  Actual Cost = ∑ (Actual Hours Worked per Task)×(Hourly Rate per Developer) = $x
```

Now, you may ask "How will I be able to profit from this?" that's where the last few variables ***Profit Margin***, ***Buffer Margin***, and the ***Overhead Margin*** comes in.
These margins are really up to you it could range from 20% to 30% or even 100% if you are brave enough.

You can compute these values with:
```
  Actual Cost = ∑ (Actual Hours Worked per Task)×(Hourly Rate per Developer) = $x

  Profit Margin = 20% = 0.2

  Actual Cost with Profit Margin = Actual Cost * (1 + Profit Margin) 

  Buffer Margin = 10% = 0.1

  Actual Cost with Profit Margin and Buffer Margin = Actual Cost with Profit Margin * (1 + Buffer Margin) 

  Overhead Margin = 10% = 0.1

  Actual Cost with Profit Margin, Buffer Margin and Overhead Margin = Actual Cost with Profit Margin and Buffer Margin * (1 + Overhead Margin) 
```

So as you can see, each variable is added compoundly to the base value. 
If everything works, the best scenario is all your buffer and overhead margins are not turned into expense.

> [!TIP]
> If you bill by hours, add a buffer % to actual hours.
> If you bill by cost, pad the actual cost with overhead and profit margins.
