export interface ResourceInterface<T> {
  data: T[];
  links: Links;
  meta: Meta;
}

export interface CompanyType {
  id: number;
  slug: string;
  name: string;
  url: string;
  color: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface IndexPropsInterface<T> {
  company: CompanyType;
  resource: ResourceInterface<T>;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface TableProps<T> {
  data: T[];
  meta: Meta;
}
