# Version Control System

Free and open source version control system.

### What is version control system?
* A system that keeps track of our files or projects.
* It allows you to revert selected files to a previous state, **revert** the entire project to a previous state, **compare changes** over time, see who last modified something so that we can know what might be causing a problem, or **what** is the issuem **who** made it, and **when** with the details.

### Version control System (VCS) are of 2 types

![Alt text](image-1.png)
So here in centralized all the changes are to maintained in a single server, all changes are global and seen to all.
Changes made by one is seen by all.
But kind of problematic, as if a fault is made by whole system goes down.
All time network connectivity is required to make changes.
Basically all are working on different part of project and are merging continuously.
All members are dependent on each other.

![Alt text](image.png)
So here all the members have a local code base, and whenever changes are to be updated for all we have connect to server and update for all.
So even if code doesnt run on one system, it wont affect others.
All members can work independently.

## Why GIT?
* Free, and open source
* Scalable
* Super fast
* Cheap branching and merging

## What is GitHub?
GitHub is a **web-based hosting service** for git repositories.
You can use git without GitHub, but not vice versa.

| GIT | GitHub |
|---- | ------ |
| Used for Version Control   |   Used for hosting GIT repositories |
| Installed Locally on computer | Cloud Based |
| Tracks changes made to a file | Provides a web interface to view file changes |


### Terminologies

**1. Local Repository:**
Every VCS tool provides a private workplace as a working copy. Developers make changes in their private workplace and after commit, these changes become a part of the repository.
Git Takes it one further by providing them a private copy of the whole repository.
Users can perform many operations with this repository such as add file, remove file, rename file, move file, commit changes and many more.

**2. Working Directory and Staging Area or Index:** 
An intermediate area where commits can be formatted and reviewed before completing the commit.

**3. push:**
Send a Change to another repository [May require permission]

**4. pull:**
Grab a change from a repository.


### Basic work flow of GIT

Step 1: You modify a file from the (local) working directory.
Step 2: You add these files to the staging area.
Step 3: You perform commit operation that moves the files from the staging area. After push operations it stores the changes permanently to the git repository.

![Alt text](image-2.png)

## Blobs
Blob stands for **Binary Large Objects**. Each version of a file is represented by blob.
A blob holds the file data but doesn't contain any metadata about the file.
It is a binary file, and in Git database, it is named as **SHA1** hash of that file.
**In Git, files are not addressed by names. Everything is content-addressed.**

## Trees
Tree is an object, which represents a directory. It holds blobs as well as other sub-directories.
A tree is a binary file that stores references to blobs and trees which are also named as **SHA1** hash of the tree object.

## Commit
* Commit holds the current state of the repository. A commit is also named by SHA1 hash.
* Commit object = a node of the **linked list.**
* Every commit object has a pointer to the parent commit object.
* From a given commit, you can traverse back by looking at the parent pointer to view the history of the commit.
* If a commit has multiple parent commits, then that particular commit has been created by merging two branches.

## Git commands

**Clone**: Bring a repository hosted somewhere like Github into a folder or your local machine.
**Add**: Track your files and changes in GIT. (i.e. add in staging area/index)
**Commit**: Save your files in git.
**Push**: Upload your commits to a git repo, like GitHub.
**Pull**: Download changes from a remote repository to your local repository.

> Note we can always use github as a interface for all these below commands.


### install git
> https://www.atlassian.com/git/tutorials
```terminal
$ sudo apt-get install git
$ git config --global user.name "hardikshah"
$ git config --global user.email "hardikshah@gmail.com"
```

### Important git commands
* **git init**
Initialises a workspace with git. i.e. from scratch. If already repository is present on git use git clone.

* **git status**
Check the current status of GIT, i.e. if there is any problem or issue in directory.

* **git add .** // to add all files
* **git add fileName**
Git copy or basically add all the files to local repository or staging state.
Not yet uploaded for global repository, kind of in the middle.
Here we can pull the changes of others and check if error occurs before uploading/pusing to git global repository.
Before running this command, try git status and we can see all the files that are not yet added to staging step. And after adding them they will look different.(green)

* **git rm --cached fileName**
If you want to remove a file that you dont want to upload to git global repository, then we can remove it.

* **git commit -m "Message for the changes like a comment for everyone to read"**
Local repository for all the files to in future upload on git.

* **git remote -v**
Here we can check the actual global link where we want to commit, if nothing is seen we can add them using ->

* **git remote add origin https://githublink.git**
To add the git repository link. (add .git at the end)
But this method is depreciated.
* **git remote set-url https://<token>@github.com/usrname/repo/**
This sets main to new way of communicating to git.

* **git push --set-upstream origin master** or **git push origin master**
Pushes all changes to git

* **git clone**
To clone repository along with whole history and changes.

* **git commit -ma "Message for updating on all files"**
To put changes message for all.


### Flow of writing the code
1. **Github workflow**: If we are using a github CLI, and we are logged in we are directly making changes on the main repository. 
Write code ---> Commit code changes ----> (if not authorised) Pull request for author to review and commit.
2. **Local Git Workflow**: Here we make the whole workspace local maybe using git clone.
Then After making changes/ writing code we add the changes to Intermediatory/ stage code using git add . command.
Then we commit all changes, but still the main repo is not updated. At this point we can check if after commit any problem occurs and we may fix them and start again with adding.
After all is done we can then do "git push" is when we actually upload our code.


## Branches
When talking about big projects multiple poeple are working on different levels i.e. some may be working on main branch, some on differenct modules and some on different features.
So here comes branches. That is making the main code which is stable still running whilist other people can modify different part of the code and make changes.
After all review is done then the whole code is merged back to main branch and so on.

![Alt text](image-3.png)


* **main or master** is the main branch.
* **git branch**
Gives us all branchs available

* **git checkout -b feature_update_files**
Creates a new brach and switches to the new branch

* **git checkout main** | **git checkout feature_update_files**
Switch between branches

**Note: changes made in one branch are not reflected in another unless merged**

* **git diff branch1**
Compares branch1 with current branch and tells the changes

* **git merge branch1**
Merges the changes of branch1 to current branch

* **git push -u origin brach1**
Pushes changes of branch1 to repository

* **git branch -d feature_update_files**
Deletes the branch that is no longer needed. Also to delete this branch make sure you are not on that same branch to be deleted.


## What is a Git Merge Conflict?
When two branches having changes on same part of code/ directory, and git can not automatically determine which should be kept because both have common ancestor.

1. **While starting the merge process**: If there are changes in the working directory's stage area for the current project, merging won't start.
In this case, conflicts happen due to pending changes that need to be stabilized.

2. **During the merge process**: When there is a conflict between the local branch and the branch being merged.
Git resolves as much as possible, but there are things that have to be resolved manually in the conflicted files.

* **git log --merge**
Produce the list of commits that are causing the conflict.

* **git diff**
Identify the differences between the states repositories or files.

* **git checkout** 
Used to undo the changes made to the file, or for changing branches.

* **git reset --mixed**
Used to undo changes to the working directory and staging area

* **git merge --abort**
Helps in exiting the merge process and returning back to the state before the merging began.

* **git reset**
Used at the time of merge conflict to reset the conflicted files to their original state.



