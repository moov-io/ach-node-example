import {achInterface} from "./achInterface"
import { ACHFilesApi, Configuration } from 'ach-node-sdk';

const configuration = new Configuration({ basePath: 'https://ach.mycompany.com' });
const achFilesApi = new ACHFilesApi(configuration);

var a:achInterface;

var Example_BlogPost = {};

var fh = {
    immediateOrigin: "123456780";
    immediateOriginName: "My Banke Name";
    immediateDestination: "071000301";
    immediateDestinationName: "FRBATLANTA";
    fileCreationTime: "190816"; // dynamic, current day - YYMMDD. Y=Year, M=Month, D=Day;
    fileCreationDate: "1055";   // dynamic, currnet day - HHmm. H=Hour, m=Minute;
}

var bh = {
  ID: string;
  serviceClassCode: a.CreditsOnly;
  companyName: "Bike Shop";
  companyIdentification: fh.immediateOrigin;
  standardEntryClassCode: a.ppd;
  companyEntryDescription: "REG.SALARY";
  ODFIIdentification: "12345678"; // first 8 of FI routing number
  EffectiveEntryDate: "190816";    // dynamic, current or future day - YYMMDD. Y=Year, M=Month, D=Day
}

