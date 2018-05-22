using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebInvestigationGame.Startup))]
namespace WebInvestigationGame
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
