using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PresentationIntellisense.Startup))]
namespace PresentationIntellisense
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
