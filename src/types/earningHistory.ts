export enum EarningType {
  REFERRAL = "REFERRAL",
  SHARE_SOCIAL = "SHARE_SOCIAL",
  DONATION = "DONATION",
  INVESTMENT = "INVESTMENT",
  FRAUD = "FRAUD",
  CLAIM_REWARD = "CLAIM_REWARD"
}

export enum EarningStatus {
  COMPLETED = "COMPLETED",
  CONFIRM = "CONFIRM",
}


export interface EarningHistory {
    userId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detail: any;
    type: EarningType;
    value: number;
    status: EarningStatus;
    createdAt: string;
    updatedAt: string;
  }