// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = 'edge';

export async function GET() {
  // const data = await getData();
  const data = { statuses: [2, 0, 1, 2, 2, 1, 0, 1, 2, 1, 2, 0] };
  return NextResponse.json(data);
}

// const serviceAccountAuth = new JWT({
//   email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   key: process.env.GOOGLE_API_KEY,
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const sheetId = process.env.GOOGLE_SPREADSHEET_ID_FOR_CROWDS ?? "";
// const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

// async function getData() {
//   await doc.loadInfo();

//   const sheet = doc.sheetsByIndex[0];
//   await sheet.loadCells("A1:G15");

//   const cells: string[][] = await sheet.getCellsInRange("E4:E15");
//   const statuses = cells.map((status) => Number(status[0]));

//   return { statuses };
// }
