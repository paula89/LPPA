using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CRUD_LPPA
{
    public partial class CRUD_LPPA : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            User.Visible = false;
            Admin.Visible = false;
            SuperAdmin.Visible = false;
        }
    }
}