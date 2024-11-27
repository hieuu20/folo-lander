import { connectDB } from "../_db";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export class BaseService {
  constructor() {
    connectDB();
  }
}

export interface PaginationMetaModel {
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginationResponse<T> {
  metaData: PaginationMetaModel;
  data: T[];
}

export interface QueryFilterDto {
  readonly page: number;
  readonly limit: number;
  readonly search?: string;
}