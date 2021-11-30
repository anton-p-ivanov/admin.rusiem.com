export type TPaginationProps = {
  resultsTotal: number;
  resultsPerPage?: number;
  page?: number;
  navigate: (page: number) => void;
};
