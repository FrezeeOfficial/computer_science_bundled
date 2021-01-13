namespace ClientSoftware
{
    partial class show_token
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
            this.btn_done = new System.Windows.Forms.Button();
            this.token_label = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btn_done
            // 
            this.btn_done.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.btn_done.Font = new System.Drawing.Font("Roboto Mono Medium", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_done.ForeColor = System.Drawing.Color.White;
            this.btn_done.Location = new System.Drawing.Point(163, 114);
            this.btn_done.Name = "btn_done";
            this.btn_done.Size = new System.Drawing.Size(88, 31);
            this.btn_done.TabIndex = 0;
            this.btn_done.Text = "Done";
            this.btn_done.UseVisualStyleBackColor = false;
            this.btn_done.Click += new System.EventHandler(this.btn_done_Click);
            // 
            // token_label
            // 
            this.token_label.AutoSize = true;
            this.token_label.BackColor = System.Drawing.Color.White;
            this.token_label.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.token_label.Font = new System.Drawing.Font("Roboto Mono Medium", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.token_label.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(39)))), ((int)(((byte)(52)))));
            this.token_label.Location = new System.Drawing.Point(92, 59);
            this.token_label.Name = "token_label";
            this.token_label.Size = new System.Drawing.Size(0, 21);
            this.token_label.TabIndex = 2;
            // 
            // show_token
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(39)))), ((int)(((byte)(52)))));
            this.ClientSize = new System.Drawing.Size(412, 157);
            this.Controls.Add(this.token_label);
            this.Controls.Add(this.btn_done);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "show_token";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "show_token";
            this.TopMost = true;
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_done;
        private System.Windows.Forms.Label token_label;
    }
}