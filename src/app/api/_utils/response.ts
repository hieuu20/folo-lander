import { NextResponse } from "next/server";

export const throwBadRequest = (message = 'BAD_REQUEST') => {
  return NextResponse.json({
    success: false,
    message: message
  }, {
    status: 400
  });
};

export const throwUnauthorizedError = (message = 'UNAUTHORIZED') => {
  return NextResponse.json({
    success: false,
    message: message
  }, {
    status: 401
  });
};

export const throwNotFoundError = (message = 'NOT_FOUND') => {
  return NextResponse.json({
    success: false,
    message: message
  }, {
    status: 404
  });
};

export const throwServerError = (message = 'SERVER_ERROR') => {
  return NextResponse.json({
    success: false,
    message: message
  }, {
    status: 500
  });
};

export const Ok = <T>(data: Omit<T, 'success'>) => {
  return NextResponse.json({
    success: true,
    ...data
  }, {
    status: 200
  });
};