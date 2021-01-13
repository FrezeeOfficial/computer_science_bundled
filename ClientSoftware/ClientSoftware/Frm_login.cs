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
    public partial class Frm_login : Form
    {
        WS WebSocket;
        public Frm_login()
        {
            InitializeComponent();
            string url = "ws://localhost:5443/cloud_app";
            this.WebSocket = new WS(url);

            Btn_submit.TabStop = false;
            Btn_submit.FlatStyle = FlatStyle.Flat;
            Btn_submit.FlatAppearance.BorderSize = 0;

        }

        private void Btn_submit_Click(object sender, EventArgs e)
        {
            // save local memory of the username
            Properties.Settings.Default.username = TxtBx_Username.Text;
            Properties.Settings.Default.Save();

            // try to authorise with the provided username and get a uuid from the api

            this.WebSocket.authenticate();

            Application.Exit();
        }
    }
}
