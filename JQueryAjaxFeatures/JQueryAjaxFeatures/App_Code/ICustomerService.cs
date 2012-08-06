using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

[ServiceContract]
public interface ICustomerService
{
    [OperationContract]
    List<Customer> GetCustomers();

    [OperationContract]
    OperationStatus InsertCustomer(Customer cust);
}
