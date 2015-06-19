using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LetsTalkJS2.Startup))]
namespace LetsTalkJS2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
