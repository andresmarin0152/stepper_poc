export const MONTHLY_PLANS = [
  {
    id: 1,
    name: "Basic",
    price: 99,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 users",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 199,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to all features",
      "Advanced reporting and analytics",
      "Unlimited users",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 299,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to all features",
      "Advanced reporting and analytics",
      "Unlimited users",
    ],
  },
];

export const YEARLY_PLANS = [
  {
    id: 1,
    name: "Basic",
    price: 1000,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 users",
      "Support for 10 users",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 2000,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to all features",
      "Advanced reporting and analytics",
      "Unlimited users",
      "Support for 20 users",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 3000,
    titleFeature: "Everything in our basic plan",
    features: [
      "Access to all features",
      "Advanced reporting and analytics",
      "Unlimited users",
      "Support for 30 users",
    ],
  },
];


export enum BILLING_TYPE {
  MONTHLY = "Monthly billing",
  YEARLY = "Annual billing",
}


export const  getInfoByBillingType = (billingType: string) => {
  if (billingType === BILLING_TYPE.MONTHLY) {
    return MONTHLY_PLANS;
  }
  return YEARLY_PLANS;
};
