import {RootObject,FileHeader,EntryDetail,BatchHeader} from "./achInterface"
import { ACHFilesApi, Configuration } from 'ach-node-sdk';
const configuration = new Configuration({ basePath: 'http://ach:8080' });
const achFilesApi = new ACHFilesApi(configuration);
let Example_BlogPost = {};
// Build the File Header
const fh: FileHeader = {
    immediateOrigin: "123456780",
    immediateOriginName: "My Bank Name",
    immediateDestination: "071000301",
    immediateDestinationName: "FRBATLANTA",
    fileCreationTime: "190816", // dynamic, current day - YYMMDD. Y=Year, M=Month, D=Day
    fileCreationDate: "1055",   // dynamic, currnet day - HHmm. H=Hour, m=Minute;
    fileIDModifier: 'M'
}
//Build the Batch Header
const bh = {
    "ID": "0",
    "serviceClassCode": 220,
    "companyName": "MY_COMPANY_NAME", // Your company name
    "companyDiscretionaryData": "123456789",
    "companyIdentification": "1",
    "standardEntryClassCode": "PPD",
    "companyEntryDescription": "PURCHASE",
    "companyDescriptiveDate": "string",
    "effectiveEntryDate": "190102",
    "ODFIIdentification": "12345678",
}
//Create Entry Detail
var entries = [];
 const entry: EntryDetail = {
     ID: 'a.NewEntryDetail(',
     transactionCode: 22,
     RDFIIdentification: '12345678',
     DFIAccountNumber: "151",
     amount: AMOUNT_TO_PAY, //Integer of amount per pay period
     individualName: "YOUR_EMPLOYEE_NAME", //String name of employee
     traceNumber: 'string',
     addenda05: [{
         //This is where you put data for the addenda02
         entryDetailSequenceNumber: 4,
         id: '3',
         paymentRelatedInformation: 'PRI',
         sequenceNumber: 454,
         typeCode: "TC"
     }],
     addendaRecordIndicator: 1,
     checkDigit: "0",
     discretionaryData: 'somedata',
     identificationNumber: 'idnumber'
 }
  entries.push(entry);
 // console.log(entries);
const id = (Math.random()+1) * 10000000000;
 const testFile = achFilesApi.createFile({
     ID: id+'',
     fileHeader: fh,
     batches: [{
         batchHeader: bh,
         entryDetails: entries
     }],
 },'test12345654321',).
     then((id) => console.log(id.data))
     .catch( err => console.log(err))
//