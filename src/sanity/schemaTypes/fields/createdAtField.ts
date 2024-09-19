export const createdAtField = {
  name: "createdAt",
  title: "Created at",
  type: "datetime",
  initialValue: () => new Date().toISOString(),
};
