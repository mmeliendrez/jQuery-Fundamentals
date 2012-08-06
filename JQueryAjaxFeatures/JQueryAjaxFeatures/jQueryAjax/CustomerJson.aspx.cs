using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Runtime.Serialization.Json;

public partial class jQueryAjax_GetCustomers : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.ContentType = "application/json";

        var cust = new Customer()
        {
            Id = int.Parse(Request["id"]),
            FirstName = "John",
            LastName = "Doe"
        };

        var ser = new DataContractJsonSerializer(typeof(Customer));
        ser.WriteObject(Response.OutputStream, cust);
    }
}