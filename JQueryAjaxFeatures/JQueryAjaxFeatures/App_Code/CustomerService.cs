using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Web;

[ServiceBehavior(IncludeExceptionDetailInFaults = true)]
public class CustomerService : ICustomerService
{
    public List<Customer> GetCustomers()
    {
        return new List<Customer> { 
            new Customer() {
                Id = 1,
                FirstName = "John",
                LastName = "Doe"
            },
            new Customer() {
                Id = 2,
                FirstName = "Jane",
                LastName = "Doe"
            }
        };
    }

    [WebGet(RequestFormat = WebMessageFormat.Json)]
    public OperationStatus InsertCustomer(Customer cust)
    {
        // Simulate inserting a customer... assume it works
        return new OperationStatus()
        {
            Status = true,
            InsertedId = 453,
            Message = "Customer Inserted: " + cust.FirstName + " " + cust.LastName
        };

    }
}
