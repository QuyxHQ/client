type QuyxUser = Bae & {};

type Base = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

type EditUserProps = {
  email: string;
  username: string;
  pfp: string;
};

type ApiResponseWithPagination<T> = {
  status: boolean;
  message: string;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    skip: number;
    total: number;
  };
};
