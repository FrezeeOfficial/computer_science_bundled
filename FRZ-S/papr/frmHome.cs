// ***********************************************************************
// Assembly         : papr
// Author           : KIM TOO FLEX
// Created          : 08-02-2017
//
// Last Modified By : KIM TOO FLEX
// Last Modified On : 08-02-2017
// ***********************************************************************
// <copyright file="Form1.cs" company="">
//     Copyright ©  2017
// </copyright>
// <summary></summary>
// ***********************************************************************

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace freeze_uk
{
    /// <summary>
    /// Class Form1.
    /// </summary>
    /// <seealso cref="System.Windows.Forms.Form" />
    public partial class Form1 : Form
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Form1" /> class.
        /// </summary>
        public Form1()
        {
            InitializeComponent();
        }






        /// <summary>
        /// Handles the Click event of the bunifuImageButton2 control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void bunifuImageButton2_Click(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// The form drag
        /// </summary>
        Bunifu.Framework.UI.Drag FormDrag = new Bunifu.Framework.UI.Drag();
        /// <summary>
        /// Handles the MouseDown event of the pnlHeader control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="MouseEventArgs" /> instance containing the event data.</param>
        private void pnlHeader_MouseDown(object sender, MouseEventArgs e)
        {
            FormDrag.Grab(this);

        }

        /// <summary>
        /// Handles the MouseMove event of the pnlHeader control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="MouseEventArgs" /> instance containing the event data.</param>
        private void pnlHeader_MouseMove(object sender, MouseEventArgs e)
        {
            FormDrag.MoveObject();
        }

        /// <summary>
        /// Handles the MouseUp event of the pnlHeader control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="MouseEventArgs" /> instance containing the event data.</param>
        private void pnlHeader_MouseUp(object sender, MouseEventArgs e)
        {
            FormDrag.Release();
        }

        /// <summary>
        /// Handles the Click event of the bunifuImageButton3 control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void bunifuImageButton3_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        /// <summary>
        /// Handles the Click event of the btnMenu control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void btnMenu_Click(object sender, EventArgs e)
        {
            if (pnlSideMenu.Width == 260)
            {
                pnlSideMenu.Width = 80; //small sidebar (hide labels)
                picLogo.Size = new Size(40,40); //reduce sidebar logo
                picLogo.Location = new Point(18,24); //change logo location
                picLogo.Image = logo_small.Image;
            }
            else
            {
                pnlSideMenu.Width = 260;  //expabd sidebar
                picLogo.Size = new Size(184, 44); //large logo
                picLogo.Location = new Point(46, 26);  //put logo to center
                picLogo.Image = logo_big.Image;
            }
        }


        /// <summary>
        /// Handles the Click event of the btnDashboard control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        private void btnDashboard_Click(object sender, EventArgs e)
        {
            page_dashboard1.BringToFront();
        }

        /// <summary>
        /// Handles the Click event of the btnproducts control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        private void btnproducts_Click(object sender, EventArgs e)
        {
            pageProducts1.BringToFront();
        }

        /// <summary>
        /// Handles the Click event of the btnAccount control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        private void btnAccount_Click(object sender, EventArgs e)
        {
            pageAccount1.BringToFront();
        }

        /// <summary>
        /// Handles the Click event of the btnSettings control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs" /> instance containing the event data.</param>
        private void btnSettings_Click(object sender, EventArgs e)
        {
            pageSettings1.BringToFront();
        }

        private void bunifuImageButton3_Click_1(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void bunifuImageButton2_Click_1(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void btnMax_Click(object sender, EventArgs e)
        {
            if (this.WindowState == FormWindowState.Maximized)
            {
                this.WindowState = FormWindowState.Normal;
            }
            else
            {
                this.WindowState = FormWindowState.Maximized;
            }

        
        }

        private void pnlHeader_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
