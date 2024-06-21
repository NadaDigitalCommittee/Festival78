// import {
//   GoogleSpreadsheet,
//   GoogleSpreadsheetCellErrorValue,
// } from "google-spreadsheet";
// import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // const data = await getData();
  const data = {
    queue: [],
    queuingTime: 0,
    queuingNumber: 0,
    skippedNumbers: [],
  };
  return NextResponse.json(data);
}

// const serviceAccountAuth = new JWT({
//   email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   key: process.env.GOOGLE_API_KEY,
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });
// const doc = new GoogleSpreadsheet(
//   process.env.GOOGLE_SPREADSHEET_ID_FOR_SHOGI ?? "",
//   serviceAccountAuth
// );

// async function getData() {
//   await doc.loadInfo();

//   const sheet = doc.sheetsByIndex[1];
//   await sheet.loadCells("A1:Z100");

//   const queuingNumbers: number[] = await sheet
//     .getCellsInRange("E2:E6")
//     .then((cells: string[][]) => cells.map((number) => Number(number[0])));
//   const queuingTimes: number[] = await sheet
//     .getCellsInRange("U2:U6")
//     .then((cells: string[][]) => cells.map((time) => Number(time[0])));
//   const queue = queuingNumbers
//     .map((number, i) => ({ number, time: queuingTimes[i] }))
//     .filter((queue) => queue.number && !isNaN(queue.time));
//   const queuingTimeCell = sheet.getCellByA1("L2").value;
//   const queuingTime =
//     queuingTimeCell instanceof GoogleSpreadsheetCellErrorValue
//       ? NaN
//       : Number(queuingTimeCell);
//   const queuingNumberCell = sheet.getCellByA1("N2").value;
//   const queuingNumber =
//     queuingNumberCell instanceof GoogleSpreadsheetCellErrorValue
//       ? NaN
//       : Number(queuingNumberCell);
//   const skippedNumbers: number[] = await sheet
//     .getCellsInRange("X2:X6")
//     .then((cells: string[][]) =>
//       cells
//         .filter((number) => number[0])
//         .map((number) => Number(number[0]))
//         .filter((number) => number)
//     );

//   return { queue, queuingTime, queuingNumber, skippedNumbers };
// }
