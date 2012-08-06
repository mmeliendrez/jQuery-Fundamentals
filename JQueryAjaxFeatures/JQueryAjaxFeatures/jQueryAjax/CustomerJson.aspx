<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CustomerJson.aspx.cs" Inherits="jQueryAjax_GetCustomers" %>

<asp:DataList id="dlCustomers" runat="Server">
    <HeaderTemplate>
        <table style="width:400px;">
            <tr style="background-color:#c8c8c8;">
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
            </tr>
    </HeaderTemplate>
    <ItemTemplate>
        <tr>
                <td><%# Eval("id") %></td>
                <td><%# Eval("FirstName") %></td>
                <td><%# Eval("LastName") %></td>
        </tr>
    </ItemTemplate>
    <FooterTemplate>
        </table>
    </FooterTemplate>
</asp:DataList>