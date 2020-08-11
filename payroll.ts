import {achInterface} from "./achInterface"
import { ACHFilesApi, Configuration } from 'ach-node-sdk';

const configuration = new Configuration({ basePath: 'https://ach.mycompany.com' });
const achFilesApi = new ACHFilesApi(configuration);

var a:achInterface;

var Example_BlogPost = {};

// Build the File Header
var fh = {
    immediateOrigin: "123456780";
    immediateOriginName: "My Banke Name";
    immediateDestination: "071000301";
    immediateDestinationName: "FRBATLANTA";
    fileCreationTime: "190816"; // dynamic, current day - YYMMDD. Y=Year, M=Month, D=Day;
    fileCreationDate: "1055";   // dynamic, currnet day - HHmm. H=Hour, m=Minute;
}

//Build the Batch Header
var bh = {
  ID: a.NewBatchHeader,
  serviceClassCode: a.CreditsOnly,
  companyName: "Bike Shop",
  companyIdentification: fh.immediateOrigin,
  standardEntryClassCode: a.ppd,
  companyEntryDescription: "REG.SALARY",
  ODFIIdentification: "12345678", // first 8 of FI routing number
  EffectiveEntryDate: "190816";    // dynamic, current or future day - YYMMDD. Y=Year, M=Month, D=Day
}

//Create Entry Detail
var entries = [];


  var entry = {
    ID: a.NewEntryDetail(),
    transactionCode: a.CheckingCredit(),
    RDFIIdentification: a.SetRDFI("987654321");
    DFIAccountNumber: "151";
    amount: 10000;
    individualName: "Joe Smith";
    traceNumber: string;
    addenda02: Addenda02;
    addenda05: Addenda05[];
  }

entries.forEach(entry => { 
  entries.push(entry);
});


