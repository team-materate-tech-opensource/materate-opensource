# Math-A-Hack Results *Back-end*

![Django CI](https://github.com/Team-MateRate/webD_Backend_math-a-hack/workflows/Django%20CI/badge.svg)

The documentation for models and views is available at [`/admin/doc`](http://materate-math-a-hack-results.ap-south-1.elasticbeanstalk.com/admin/doc/)

### How to import data from moodle?

**Use `importer` branch to get scripts. Use `git checkout importer` to switch branch and `git pull` to pull changes.**

The data for users have to be in [`.csv` format](#users). To import data from moodle, you need to have the questions in [`.xml` format](#questions) ***(uncheck category while downloading the file)***, the option error labels in proper [`.csv` format](#opt_weight) (similar to the one for class 10) and the student responses in [`.csv` format](#responses) from the moodle. No files are needed for `re_evaluate`.

These files have to be loaded to the EC2 instance created for this purpose. First, you need to turn ON the instance by going to `Actions`>`Instance State`>`Start`. After initializing, you will be able to connect to it using SSH. You can get the comman-line for the same using the `Connect` button. 

The EFS is mounted at `/home/ubuntu/math-a-hack/media`. The files under `public` will be accessible from the public, so it is available to store these data in the folder named `private`. 

Use `users`, `questions`, `opt_weight`, `responses` and `re_evaluate` as the additional command to add users, import questions, error labels, responses and start re-evaluation respectively. To start a script, go to `/home/ubuntu/math-a-hack` and type the following command:
```
python3 manage.py <COMMAND>
```
*(For example, `python3 manage.py questions` for questions)*

You will be asked to enter the path of the file to be used **with the extension**. Also note down the quiz id printed while running `questions`. This will be required as input for other scripts.

After importing, do not forget to *Stop* the instance. To do so, go to the EC2 console and use `Actions`>`Instance State`>`Stop` (***Warning: Do not click on `Terminate`. Once terminated, the instance cannot be used again!***).


### Formats

#### users
The `.csv` file must have the following fields (case/space sensitive)
```
'username','password','name','standard','email','contact_no'
```
The `standard` has to be a number between `1` and `12` (or empty). `email` should be in a valid format. If duplicate `username` are found, they are skipped and the same is printed on console.

#### questions
The `.xml` file has to be download from the moodle (via. `Quiz settings`>`Question bank`>`Export`). Make sure that the question names are in lexicographical order before the process so that the same order of questions is maintained. *For example, `Q2` comes after `Q19` instead of `Q1`; so they can be named as `Q01` and `Q02`*. ***Uncheck category while downloading the file from moodle.***

#### opt_weight
The questions must be along the row and the error label for each option along the columns. The column names should be as :
```
'Option A', 'Option B', 'Option C', 'Option D',...
```
To add more options, do the necessary changes in `fields` variable in `result/management/commands/opt_weights.py`. You can use *vim* or *nano* editors for doing it through the command line. For example,
```
sudo nano result/management/commands/opt_weights.py
```

#### responses
The responses can be downloaded in `.csv` format from moodle under `Quiz settings`>`Results`>`Responses`. You don't have to include the question text and the correct response while downloading the `.csv` file.

***Note that in the Beanstalk instances, only the `public` directory in media is mounted at `/data`, unlike in the instance meant for importing.***

---
*Documented by [@subhalingamd](https://github.com/subhalingamd)*
