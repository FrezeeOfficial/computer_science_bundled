using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Websocket.Client;

namespace ClientSoftware
{
    public class WS
    {

        IWebsocketClient con;
        Uri url;
        bool authenticated = false;

        public WS(string _url)
        {
            // make instance of the connection
            this.url = new Uri(_url);
            this.con = new WebsocketClient(this.url);

            Thread thr = new Thread(this.start_socket);
            thr.Start();
        }

        public void start_socket()
        {
            var exitEvent = new ManualResetEvent(false);

           
            using (this.con)
            {
                con.Name = "Client C#";
                con.ReconnectTimeout = TimeSpan.FromSeconds(30);
                con.ErrorReconnectTimeout = TimeSpan.FromSeconds(30);

                // listen for mesages
                con.MessageReceived.Subscribe(msg =>
                {
                    Console.WriteLine($"Message: {msg}");

                    JObject o = JObject.Parse(msg.ToString());
                    Console.WriteLine(o["uuid"]);
                });

              
                
                con.Start().Wait();
                exitEvent.WaitOne();
            }

           
        }

        public void authenticate()
        {
            if (!authenticated)
            {
                Console.WriteLine("kjhdfa");

                JObject auth_data = new JObject();
                auth_data["command"] = "authenticate";
                auth_data["username"] = Properties.Settings.Default.username;

                con.Send(auth_data.ToString());



                authenticated = true;

                get_uuid();
            } 
        }

        public void get_uuid()
        {
            using (this.con)
            {
                JObject req_data = new JObject();
                req_data["command"] = "generate_uuid";
                con.Send(req_data.ToString());
            }
        }

    }
}
