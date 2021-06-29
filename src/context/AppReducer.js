export default function appReducer(user, action) {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...user,
          data:[...user.data, action.payload],
      };
      case "EDIT_USER":
        const updatedEmployee = action.payload;
        const updatedEmployees = user.data.map((employee) => {
          if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return employee;
        });
  
        return {
          ...user,
          data:updatedEmployees,
        };
  
      case "REMOVE_USER":
        return {
          ...user,
          data: user.data.filter(
            (i) => i.id !== action.payload
          ),
      };
      default:
        return user;
    }
  };