namespace ClientSoftware
{
    partial class Frm_login
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.TxtBx_Username = new System.Windows.Forms.TextBox();
            this.Lbl_username = new System.Windows.Forms.Label();
            this.Lbl_title = new System.Windows.Forms.Label();
            this.Btn_submit = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // TxtBx_Username
            // 
            this.TxtBx_Username.Location = new System.Drawing.Point(91, 142);
            this.TxtBx_Username.Name = "TxtBx_Username";
            this.TxtBx_Username.Size = new System.Drawing.Size(202, 20);
            this.TxtBx_Username.TabIndex = 0;
            // 
            // Lbl_username
            // 
            this.Lbl_username.AutoSize = true;
            this.Lbl_username.Font = new System.Drawing.Font("Roboto Thin", 10F, System.Drawing.FontStyle.Italic);
            this.Lbl_username.Location = new System.Drawing.Point(88, 122);
            this.Lbl_username.Name = "Lbl_username";
            this.Lbl_username.Size = new System.Drawing.Size(72, 17);
            this.Lbl_username.TabIndex = 1;
            this.Lbl_username.Text = "Username:";
            // 
            // Lbl_title
            // 
            this.Lbl_title.AutoSize = true;
            this.Lbl_title.Font = new System.Drawing.Font("Roboto Light", 12F);
            this.Lbl_title.Location = new System.Drawing.Point(156, 47);
            this.Lbl_title.Name = "Lbl_title";
            this.Lbl_title.Size = new System.Drawing.Size(116, 19);
            this.Lbl_title.TabIndex = 2;
            this.Lbl_title.Text = "One Last Thing";
            // 
            // Btn_submit
            // 
            this.Btn_submit.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(39)))), ((int)(((byte)(52)))));
            this.Btn_submit.ForeColor = System.Drawing.Color.White;
            this.Btn_submit.Location = new System.Drawing.Point(309, 140);
            this.Btn_submit.Name = "Btn_submit";
            this.Btn_submit.Size = new System.Drawing.Size(75, 23);
            this.Btn_submit.TabIndex = 3;
            this.Btn_submit.Text = "Next";
            this.Btn_submit.UseVisualStyleBackColor = false;
            this.Btn_submit.Click += new System.EventHandler(this.Btn_submit_Click);
            // 
            // Frm_login
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(458, 249);
            this.Controls.Add(this.Btn_submit);
            this.Controls.Add(this.Lbl_title);
            this.Controls.Add(this.Lbl_username);
            this.Controls.Add(this.TxtBx_Username);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Frm_login";
            this.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Hide;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Frmlogin";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox TxtBx_Username;
        private System.Windows.Forms.Label Lbl_username;
        private System.Windows.Forms.Label Lbl_title;
        private System.Windows.Forms.Button Btn_submit;
    }
}