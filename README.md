# Ninja Automation Test

These are the instructions for Ninja's Automation Test

* You must have Node v16 or above and npm installed in your machine.
* You must have the [server](https://github.com/NinjaRMM/devicesTask_serverApp) and the [client side](https://github.com/Yastrenky/devices-clientapp) running to be able to run the tests.

## Deliverables


### **Test Automation**  

To automate the developed test plan, the testing tool TestCafe was used as requested. To be able to execute those test cases you need to clone this GitHub repository and execute the following command from inside the main directory in order to install dependencies: `npm install`.  

After installing dependencies you can run all the tests that are automated using the command: `npm run test`. Please note that these tests will be running **locally**.
Also, the automated test cases from TestCafe are integrated and linked to the QASE test management tool. So if you want to run automated test cases and have their run results updated into QASE you can simply execute the `npm run test:qase` command from your command line. After that, you can check the "test runs" section from QASE and your test run that just executed, analyze the results, evidences and export detailed reports from that test run.

### **Test Management**  

To develop this task, a test management tool called [QASE](https://qase.io/) was used.  
To access the platform you will need to click the following link and use these credentials:  
- https://app.qase.io/projects  
- E-mail: rafaelschulteninjatest@gmail.com  
- Password: password123

After logging in, you should select the "Ninja Test Project" project. In there under the "repository" section you will find all test cases that were built from the challenge requirements. All the test cases have their informations described with descriptions, types, steps and others. You can access that clicking on the test cases from the repository.  

Also, in the "test runs" section you will find test runs for the developed test cases. These are pre-made just as a demonstration purpose.
  

### **Details**:  

This READme is being used as the document in order to centralize instructions and code in one place.  
The instructions are being described in this document, however let's summarize how to's below:  
        - To **manually** run any test cases in QASE you should created a new test run in the "test runs" section and add the respective test cases that you wish to run  and start to run them manually.  
        - To run **automation** please verify section **Test Automation** above.     
        - Test results can be seen in many ways like directly from the command line and also from "test runs" sections from QASE when the tests are executed using QASE integration.  
        - With QASE test reports are very easy to get. When you access a QASE test run you can get the report through the "export" button in PDF or CSV mode, the report is very detailed and contains each test case and in the case of failed test cases it has it's evidences, comments and stacktraces (when runing automated) attached properly. Also, you can generate a complete report through a public link as well ([like this one](https://app.qase.io/public/report/be4cc6ac94c5bed63cce9f1557b14d4f3376feb9)). It is a great way to share results and reports with people that don't have access to the platorm.  
        - It's important to highligh that this project was done with the view of quality as a whole and not just creating tests and automating them. The integrations, the combination of tools and code were done thinking in a quality-centered culture to be inserted and developed within a company pursuiting quality processes, product and not just relying on QA's but also developers and product team. Improving step by step with the help of everyone is key to success.  
      
## Observations  

- Files like `.qaserc` and `.testcaferc.json` should be files added to git ignore due to the sensitive information that they carry such as important variables and api keys, for example. In this repository they were commited just for the sake of this test so people will be able to clone it and run it properly.
- All test cases have their correct information set such as positive/negative, steps, type etc, you only need to open them in a full screen for a better view. 
- QASE can be also integrated to Jira or other project management tools to make an even better workflow.
- Maybe some things could be done better coding wise, I'm sure of that, however this was my first time using TestCafe. 
