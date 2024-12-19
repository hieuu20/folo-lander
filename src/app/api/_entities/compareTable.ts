import mongoose from "mongoose";

export interface ICompareTable {
  _id: string;
  compareTable: string[][];
  type: string;
}

const CompareTableSchema: mongoose.Schema<ICompareTable> =
  new mongoose.Schema<ICompareTable>({
    type: String,
    compareTable: [
      {
        type: [
          {
            type: String,
          },
        ],
      },
    ],
  });

export const CompareTableModel: mongoose.Model<ICompareTable> =
  mongoose.models.CompareTable ||
  mongoose.model("CompareTable", CompareTableSchema);
