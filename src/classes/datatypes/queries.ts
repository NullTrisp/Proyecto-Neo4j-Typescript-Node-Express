export type queries = {
  [key: string]: query;
};

type query = {
  query: string;
  file?: string;
  params?: any;
};
