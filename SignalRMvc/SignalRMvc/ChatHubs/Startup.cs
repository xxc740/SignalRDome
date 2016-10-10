using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;

[assembly:OwinStartup(typeof(SignalRMvc.ChatHubs.Startup))]
namespace SignalRMvc.ChatHubs
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}