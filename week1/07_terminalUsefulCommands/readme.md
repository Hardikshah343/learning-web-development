Note : For following commands to run on windows:
### Install wsl (windows subsystem linux)
```powershell
$ wsl --install
```

# Bash commands

### 1. pwd: print working directory

```terminal
$ pwd
/media/sf_FILES/Webdev
```

### 2. cd: change directory
```terminal
$ cd /Desktop
```
To go back up a directory
```terminal
$ cd ..
$ cd ./../
$ cd ./../../  -> multilevel
```

### 3. ls: list (content of directory)
```terminal
$ ls
Desktop Home
```
See files in more detailed information 
```terminal
$ ls -l
total 0
drwxr-xr-x@ 6 hardik root 192 Dec 8 23:38 Demo

$ ls -l Demo
# all files and directories in the Directory Demo
```
Description:
> total: number of files.
> drwxr-xr-x@ -> permissions of folder (prefix d for directory)
> rwxr-xr-x@ -> permissions of files
> 6 number of references 
> hardik: owner of directory
> root: group owner
> 192: Size of directory/file in bytes
> Dec 8 23:38 : Time stamp of last modified
> Demo: Name of directory.

See all files and all sub folders/files: (Recursive)
```terminal
$ ls -R Demo
```
See last modified first, and if in details then -lt
```terminal
 $ ls -t Demo
 $ ls -lt Demo
```
If we want files in reverse order 'r'
```terminal
$ ls -lr Demo
```
If we want to filter them based on size
```terminal
$ ls -s Demo
```
So most of times we store keys in environment variables or files. But we wont be able to see those directly. Also files that are preceded with a . eg .vscode, .git, etc are also not listed directly (use all)
```terminal
$ ls -la Demo
$ ls -lRa Demo
```
#### Wildcards for ls
1. Recursively search for all files in this directory and return all files that have .json extenstion
```terminal
$ ls -lR | grep .json
```
or 
```terminal
$ ls *.json
```
2. To search for file using wildcard
```terminal
$ ls Zoo*
```

### 4. mkdir: make directory
```terminal
$ mkdir hello
$ ls
hello
```
Using && to combine multiple commands 
```terminal 
$ mkdir hello && cd hello
```
We can also create directories recursively.
```terminal
$ mkdir -p hello/world
$ ls
hello
$ ls hello
world
```

### 5. touch: to create files
```terminal
$ touch hello.txt
$ ls
hello.txt
```

### 6. cat: Prints the content of the file. [Concatenate]
```terminal
$ cat hello.txt
Hi from hello.txt
```
Using cat to append to a file
```terminal
$ cat > hello.txt
Line 2 to append
Line 3 to append
Line 4 to append
Line 5 to append
< ctrl + d >
```
Now if we want to add more details to this file.
```terminal
$ cat >> hello.txt
Line 6 to append
Line 7 to append
Line 8 to append
```

### 7. vi: Editor for files.
```terminal 
$ vi hello.txt
```

### 8. mv: move from source to destination
```terminal
$ mv ./../fileFolderToMove.txt .
```
mv command can also be used to rename a file.
```terminal
$ mv oldFileName.js newfileName.js
```

### 9. cp: copy from source to destination
```terminal
$ cp fileFolderToCopy.txt ./newDirectoryPath/
```
To copy directories we have to recursively copy.
```terminal
$ cp -r hello/test  new/test
```

### 10. rm: remove files and folders
```terminal
$ rm filename.txt
```
To delete all files and folders use recursive.
```terminal
$ rm -r demo
```
To remove everything in the same directory
```terminal
$ rm -r *
```

### 11: echo: display on terminal
Prints on terminal
```terminal
$ echo 'Hello World!'
$ echo $PATH
```

### MORE on files
1. Files and permissions: 
> rwx: read write execute permissions
> User/group/others -> rwxrwxrwx 

To assign permission we have two ways numeric and alphabetic.
a. chmod: change file permission takes two arguments. 1st is whose permission user/group/other. Second is either adding more permissions or striping off the alloted permissions.
eg. chmod whosePermission+x file_folder_name
```terminal
$ chmod u+x newscript.sh
$ chmod g-r hello
$ chmod o-wx wow.txt
```
Method 2 numberic method: (Look at them as binary _ _ _)
4: read | 2: write | 1: execute | 6: read write | 3: write execute | 5: read execute | 7: for all
chmod UserGroupOther file/folderName
```terminal
$ chmod 666 hello
```
2. View files
a. head: First 10 lines of file.
b. tail: last 10 lines of file.
c: head -20 : Top 20 files
d: tail -20 : Last 20 files
e. tail -n +25 newfile.txt | head -5 
f. wc filename.txt
    NoOfLines  NoOfWords  NoOfCharacters
NOTE: | (pipe) output from left is input to right

3. grep: find occurrences of words phrases regexs from set file directory project,etc
eg. Number of times "one" was used
```terminal
$ grep "one" newfile.txt
```
eg. Occurrences of "one" from file
```terminal
$ grep "one" newfile.txt | wc
```
eg. get the count of occurance of "one"
```terminal
$ grep -c "one" newfile.txt
or
$ grep "one" newfile.txt | wc -l
```
eg. get all the matched lines where the phrase "one" is present
```terminal
grep -h "one" newfile.txt   # h for case sensitive
grep -hi "one" newfile.txt  # i ignoring case sensitive
```
eg. match whole word -w, -o
```terminal
grep -hinw "one" newfile.txt
```

4. history
to go back to all the commands

5. Bash script to automate the tasks 

### MORE FILE OPERATIONS (IMP)
Following operatiosn on log.txt file in same directory.
```terminal
$ grep "ERROR" log.txt
Timestamp       Category        Message
1598863888      ERROR       User annonumous attemp to access protected resource without credentials
1598863901      ERROR       Requested resource not found
```
eg. Everything except INFO
```terminal
$ grep -v "INFO" log.txt
Timestamp       Category        Message
1598863888      ERROR       User annonumous attemp to access protected resource without credentials
1598863901      ERROR       Requested resource not found
```
eg. To look at all lines after a specific line. Like we want all logs after error, 5 lines.
```terminal
$ grep -A 5 ERROR log.txt
Timestamp       Category        Message
1598863888      ERROR       User annonumous attemp to access protected resource without credentials
1598863891      INFO        System health check status:passed
1598863901      ERROR       Requested resource not found
1598864411      INFO        User admin logged out
```
eg. To look at all lines before a specific line. Like we want all logs before error, 5 lines.
```terminal
$ grep -B 5 ERROR log.txt
Timestamp       Category        Message
1598843202      INFO        Booting up system
1598843402      INFO        Booting up critical service: Authorization
1598843502      INFO        Systm booted successfully
1598853502      INFO        User admin requested access for userlist
1598863888      ERROR       User annonumous attemp to access protected resource without credentials
1598863891      INFO        System health check status:passed
1598863901      ERROR       Requested resource not found
```
eg. TO look before and after that specific line.
```terminal
$ grep -C 5 ERROR log.txt
Timestamp       Category        Message
1598843202      INFO        Booting up system
1598843402      INFO        Booting up critical service: Authorization
1598843502      INFO        Systm booted successfully
1598853502      INFO        User admin requested access for userlist
1598863888      ERROR       User annonumous attemp to access protected resource without credentials
1598863891      INFO        System health check status:passed
1598863901      ERROR       Requested resource not found
1598864411      INFO        User admin logged out
```

### SED: substitute command in place.
#### s/pattern/replacement/
```terminal
$ sed 's/ERROR/CRITICAL/' log.txt # replace all ERROR -> CRITICAL
$ sed -ibackup 's/ERROR/CRITICAL' log.txt # take backup before updating. Creates log.txtbackup file for us.
$ sed '3,5 /ERROR/ p' log.txt
$ sed -n '3,/ERROR/ p' log.txt # -n for all, p for print, from line 3
```

#### THE MOST POWERFUL TOOL TO TEXT PROCESSING
# AWK (also scripting language)
awk [option] script file
How patterns are defined: '(patter){action}'

```terminal
$ awk '/ERROR/{print $0}' log.txt # prints to terminal
$ awk '{gsub(/ERROR/, "CRITICAL")}(print $0)' log.txt # substitute ERROR to CRITICAL and prints
$ awk 'BEGIN {print "LOG SUMMARY\n---------"} {print} END {print "-------\nEND OF LOG SUMMARY"}' log.txt  # add header and footer to file.
$ awk '{print $1, $2}' log.txt  # print 1st and 2nd column
$ awk -F "," '{print $1, $2}' log.txt  # -F for delimiter between lines
$ awk '{count[$2]++} END {print count["ERROR"]}' log.txt  # print number of occurances or error
$ awk '{if ($1 > 1234567) {print $0}}' log.txt  # to print data after particular value is greater than.
```

Heavily used on bigger projects and faster processing.