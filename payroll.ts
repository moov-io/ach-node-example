import {RootObject,FileHeader,EntryDetail,BatchHeader} from "./achInterface"
import { ACHFilesApi, Configuration } from 'ach-node-sdk';
const configuration = new Configuration({ basePath: 'http://localhost:8080' });
const achFilesApi = new ACHFilesApi(configuration);
let Example_BlogPost = {};
// Build the File Header
const fh: FileHeader = {
    immediateOrigin: "123456780",
    immediateOriginName: "My Banke Name",
    immediateDestination: "071000301",
    immediateDestinationName: "FRBATLANTA",
    fileCreationTime: "190816", // dynamic, current day - YYMMDD. Y=Year, M=Month, D=Day
    fileCreationDate: "1055",   // dynamic, currnet day - HHmm. H=Hour, m=Minute;
    fileIDModifier: 'M'
}
//Build the Batch Header
const bh: BatchHeader = {
    "ID": "0",
    "serviceClassCode": 220,
    "companyName": "Acme Corp",
    "companyDiscretionaryData": "123456789",
    "companyIdentification": "1",
    "standardEntryClassCode": "PPD",
    "companyEntryDescription": "PURCHASE",
    "companyDescriptiveDate": "string",
    "effectiveEntryDate": "190102",
    "ODFIIdentification": "12345678",
    "batchNumber": 0
}
//Create Entry Detail
var entries = [];
 const entry: EntryDetail = {
     ID: 'a.NewEntryDetail(',
     transactionCode: 22,
     RDFIIdentification: '12345678',
     DFIAccountNumber: "151",
     amount: 10000,
     individualName: "Joe Smith",
     traceNumber: 'string',
     addenda02: {
         //This is where you put data for the addenda02
         id: 'test',
         typeCode: 'test',
         referenceInformationOne: 'test',
         referenceInformationTwo: 'test',
         terminalIdentificationCode: 'test',
         transactionSerialNumber: 'test',
         transactionDate: '1220',
         authorizationCodeOrExpireDate: 'test',
         terminalLocation: 'test',
         terminalCity: 'test',
         terminalState: 'test',
         traceNumber: 'test'
     },
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
