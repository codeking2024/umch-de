export declare const internalGroqTypeReferenceTo: unique symbol;
export interface eventType {
  title: string;
  typeEvent: string;
  slug: string;
  content: string;
  onSiteDate: {
    startDate: string;
    endDate: string;
  };
  onlineDate: {
    startDate: string;
    endDate: string;
  };
  address: Array<object>;
}

export interface navigationType {
  title: string;
  sort: number;
  items: Array<object>;
}

export interface navigationItemType {
  title: string;
  link: string;
  sort: number;
  items: navigationItemType[];
}
