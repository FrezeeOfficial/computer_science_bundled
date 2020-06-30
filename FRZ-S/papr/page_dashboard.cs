using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace freeze_uk
{
    public partial class page_dashboard : UserControl
    {
        public page_dashboard()
        {
            InitializeComponent();

            if (Program.ClientApi.Error == true)
            {
                home_errors1.Visible = true;
            } else
            {
                home_errors1.Visible = false;
            }
        }

        private void home_errors1_Load(object sender, EventArgs e)
        {

        }
    }
}
