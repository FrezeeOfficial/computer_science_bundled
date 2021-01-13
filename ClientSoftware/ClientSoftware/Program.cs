using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.Net.Sockets;
using System.Net;
using System.Threading;
using Websocket.Client;
using Newtonsoft.Json.Linq;

namespace ClientSoftware
{
    class Server
    {

        static class Program
        {
            /// <summary>
            /// The main entry point for the application.
            /// </summary>
            [STAThread]
            static void Main()
            {
                Console.ReadLine();


                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);


                if (Properties.Settings.Default.uuid == "null")
                {
                    Application.Run(new Frm_login());
                }
                else
                {
                    
                }
            }
        }
    }
}