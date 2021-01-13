using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ClientSoftware
{
    public partial class show_token : Form
    {
        public show_token()
        {
            // positioning the box in the correct location
            InitializeComponent();
            Rectangle workingArea = Screen.GetWorkingArea(this);
            this.Location = new Point(workingArea.Right - Size.Width,
                                      workingArea.Bottom - Size.Height);


            // styling the components within the form
            btn_done.TabStop = false;
            btn_done.FlatStyle = FlatStyle.Flat;
            btn_done.FlatAppearance.BorderSize = 0;

            token_label.Text = "1ksd*-83Akx-*2jsna_84&sjx";

        }

        private void btn_done_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
