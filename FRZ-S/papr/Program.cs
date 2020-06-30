using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Runtime.InteropServices;

namespace freeze_uk
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        /// 
        // this is where all client api socket requests to slave machines are made
        public static Client ClientApi = new Client();


        [STAThread]
        static void Main()
        {

            Bunifu.Framework.LICENSE.License.RuntimeAuth("SORACO", "ralph@soraco.co", "FBeuCt1+kyUPIiZrqpXGDQ==");  //remove this when you import your UI DLL
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            if (Properties.Settings.Default.Machines == null)
            {
                Application.Run(new frmMachineManager());
            } else
            {
                Application.Run(new frmLogin());
            }
        }
    }
}
