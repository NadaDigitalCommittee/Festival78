import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

export async function POST() {
  const data = await getData();
  console.log(data)
  return NextResponse.json(data);
}

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_API_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FOR_GOODS, serviceAccountAuth);

async function getData() {
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells("A1:H67");

  const cells: string[][] = await sheet.getCellsInRange("B4:B67");
  const statuses = cells.map(status => status[0] === "TRUE");

  return { statuses };
}