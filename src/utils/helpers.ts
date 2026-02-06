import { emailRegExp } from "./constants";
import { OS_TYPE } from "./enum";
import { isMobile } from 'react-device-detect';

export function validateEmail(email: string) {
  const re = emailRegExp;
  return re.test(email);
}

export const convertPriceToNumber = (value: string): number => {
  const result = [];

  for (let i = 0; i < value.length; i++) {
    if (value[i] !== ".") {
      result.push(value[i]);
    }
  }
  return +result.join("");
};

export function formatNumber(value: string | number) {
  return Number(value).toLocaleString("en-US");
}

export function generateRandomIP(): string {
  const octet = () => Math.floor(Math.random() * 254) + 1;
  return `${octet()}.${octet()}.${octet()}.${octet()}`;
}

export const covertUserID = (id: string) => {
  if (!id) return;

  return `US${id.slice(-8)}`;
};

export const getLocalStorage = <T>(key: string): T | undefined | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
      ? (JSON.parse(localStorage.getItem(key)!) as T)
      : null;
  }

  return;
};

export function formatTime(date: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const month = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  return `${hours}:${minutes} ${month} ${day}, ${year}`;
}

export const setLocalStorage = (key: string, value: unknown) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const convertNumberToMonth = (number: number) => {
  switch (number) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
};

export function getOs() {
  if (!window.navigator) {
    return OS_TYPE.OTHER;
  }

  const userAgent = window.navigator.userAgent;

  if (!!userAgent.match(/Android/i)) {
    return OS_TYPE.ANDROID;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (!!userAgent.match(/iPhone/i)) {
    return OS_TYPE.IOS;
  }

  return OS_TYPE.OTHER;
}

export const formatToPrice = (n = 0) => {
  const result = n;
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function getDeviceId() {
  let id = localStorage.getItem("device_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("device_id", id);
  }
  return id;
}

export const openAppOrWeb = async ({
  link,
}: {
  link: string;
}) => {
  if (isMobile) {
    window.location.href = link;
  } else {
    window.open(link, '_blank', 'noopener');
  }
};

export function formatCompact(num: number) {
  const sign = num >= 0 ? '+' : '-';

  return (
    sign +
    new Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(Math.abs(num))
  );
}