interface RootObject {
  ID: string;
  fileHeader: FileHeader;
  batches: Batch[];
}

interface Batch {
  batchHeader: BatchHeader;
  entryDetails: EntryDetail[];
}

interface EntryDetail {
  ID: string;
  transactionCode: number;
  RDFIIdentification: string;
  checkDigit: string;
  DFIAccountNumber: string;
  amount: number;
  identificationNumber: string;
  individualName: string;
  discretionaryData: string;
  addendaRecordIndicator: number;
  traceNumber: string;
  addenda02: Addenda02;
  addenda05: Addenda05[];
}

interface Addenda05 {
  id: string;
  typeCode: string;
  paymentRelatedInformation: string;
  sequenceNumber: number;
  entryDetailSequenceNumber: number;
}

interface Addenda02 {
  id: string;
  typeCode: string;
  referenceInformationOne: string;
  referenceInformationTwo: string;
  terminalIdentificationCode: string;
  transactionSerialNumber: string;
  transactionDate: string;
  authorizationCodeOrExpireDate: string;
  terminalLocation: string;
  terminalCity: string;
  terminalState: string;
  traceNumber: string;
}

interface BatchHeader {
  ID: string;
  serviceClassCode: number;
  companyName: string;
  companyDiscretionaryData: string;
  companyIdentification: string;
  standardEntryClassCode: string;
  companyEntryDescription: string;
  companyDescriptiveDate: string;
  effectiveEntryDate: string;
  originatorStatusCode: number;
  ODFIIdentification: string;
  batchNumber: number;
}

interface FileHeader {
  immediateOrigin: string;
  immediateOriginName: string;
  immediateDestination: string;
  immediateDestinationName: string;
  fileCreationTime: string;
  fileCreationDate: string;
  fileIDModifier: string;
}