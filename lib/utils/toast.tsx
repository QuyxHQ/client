export enum TOAST_TYPE {
  SUCCESS = "success",
  ERROR = "error",
}

export function customToast({
  type,
  message,
}: {
  type: TOAST_TYPE;
  message: string;
}) {
  return;
}
