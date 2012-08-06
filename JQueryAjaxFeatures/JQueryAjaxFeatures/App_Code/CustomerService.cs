using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
[ServiceBehavior(IncludeExceptionDetailInFaults = true)]
public class CustomerService
{
	// To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
	// To create an operation that returns XML,
	//     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
	//     and include the following line in the operation body:
	//         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
    [OperationContract]
    [WebGet]
	public void DoWork()
	{
		// Add your operation implementation here
		return;
	}

    [OperationContract]
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

    [OperationContract]
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
