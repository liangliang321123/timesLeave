type employee = {
  employeeID: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  departmentID?: number;
  joinDate: Date;
  role: string;
  loginUsername: string;
};

export default employee;
