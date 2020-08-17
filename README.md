# Getting Started 
Building ACH files is no small task. The sheer number of fields required is enough to make your head spin. In this tutorial you will use our Node SDK and a CSV of mock employee payroll data   to generate a NACHA compliant PPD ACH file. 

There are three steps to follow in creating a NACHA compliant PPD ACH file using the moov ACH project. Outside of the scope of this tutorial is how you will take your completed file and give it to your Bank for processing.

## Build the File
Publish to the moov ACH API
Request the completed file from the moov ACH API

This tutorial is meant for people with a robust understanding of ACH file management and who need to upgrade their parser or don’t want to reinvent one from scratch. If you’re looking for a full stack solution to sending ACH payments and more, you may want to look at Paygate. 

## Anatomy of an ACH File
Before we dive in let’s talk about the structure of an ACH file. Every line of an ACH file is called a record, and records have all sorts of rules that you don’t need to know so we won’t get into them here. 

What you do need to know is that though you only need one File Header Record/Control Record pair, there can be multiple batches in a single file, for the sake of this tutorial we’ll only build a single batch.


- File Header Record
    - Batch Header Record
        - PPD Entry Detail Records
    - Batch Control Record
    - Batch2 Header Record
        - PPD Entry Detail Records
    - Batch2 Header Record
- File Control Record


You may notice that header records and control records are similar to how HTML tags are used to cordon off different sections of the file. Most of the important information for a file is contained in the PPD Entry Detail Record and there may be multiple records in a single batch. 

If you’d like a detailed breakdown of what an ACH file entails, checkout out our (ACH file structure doc.)[https://github.com/moov-io/ach/blob/master/docs/file-structure.md]. For the purpose of this tutorial we’ll use the default values for many of the fields in your ACH file. 



## Prerequisites
Before we get started you’ll need to have docker and make installed:

(Docker)[https://docs.docker.com/get-docker/]
(Make)[https://apps.apple.com/us/app/xcode/id497799835?mt=12]

Now all you need to do is star, fork, and clone this project. Next you’ll want to navigate to the project folder and run:

```Make```

Then you’ll want to run:

```Docker-compose up```

This will build the ACH API as well as creating an ACH file. Now that you’ve created your first ACH file you can take a look at it here:

http://localhost:8080/files


## What’s next?
By running these two commands you have built an API that takes in data and builds a NACHA compliant ACH file. In this example you used hard coded data which you can view in the payroll.ts file. 

The next steps to using this in your day to day operations would be to read payroll data from a CSV file and build multiple “Entry Detail Records” into this file. Once the file has been built you can upload it to your ODFI’s FTP service. 
