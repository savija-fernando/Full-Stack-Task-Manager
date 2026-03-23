export type Task = {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "Completed";
  createdDate: string;
};

export type CreateTaskDto = {
  title: string;
  description: string;
  status: "Pending" | "Completed";
};

export type UpdateTaskDto = {
  title: string;
  description: string;
  status: "Pending" | "Completed";
};