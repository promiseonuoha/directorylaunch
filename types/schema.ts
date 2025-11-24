export interface Category {
  label: string;
  id: number;
}

export type UploadedFile = {
  file?: File;
  preview: string;
  url?: string;
};

export type NewTool = {
  name: string;
  website: string;
  description: string;
  shortDescription: string;
  paymentMethod: string;
  categories: Category[];
  companyInfo: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  reddit: string;
  twitter: string;
  ox: string;
  pinterest: string;
  logo: UploadedFile[];
  screenshots: UploadedFile[];
  tags: Tag[];
};

export type Tag = { value: string; label: string };

export interface ToolsCollection {
  bookmarked?: boolean;
  id: string;
  slug: string;
  created: Date;
  updated: Date;
  short_description: string;
  name: string;
  logo: string;
  rating: number;
  number_of_bookmarks: number;
  description: string;
  use_cases: string[];
  price: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    reddit: string;
    linkedIn: string;
    ox: string;
    pinterest: string;
  };
  email: string;
  url: string;
  payment_method: string;
  categories: string[];
  category_group: string;
  created_by: string;
  screenshot: string;
  ratings?: number;
  number_of_ratings?: number;
  status: "published" | "pending" | "adding";
}
