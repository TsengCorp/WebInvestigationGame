using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using WebInvestigationGame.Models;

namespace WebInvestigationGame.Controllers
{
    public class PesquisaController : Controller
    {
        private string suspeitos = "Esqueleto|Khan|Darth vader|Sideshow Bob|Coringa|Duende Verde"; // (6)
        private string local = "Etérnia|Vulcano|Tatooine|Springfield|Gotham|Nova York|Sibéria|Machu Picchu|Show do Katinguele|São Paulo"; // 10
        private string arma = "Cajado Devastador|Phaser|Peixeira|Trezoitão|Sabre de Luz|Bomba";
        // GET: Pesquisa
        public ActionResult Index()
        {
            PesquisaViewModels model = new PesquisaViewModels();
            model.in_suspeito = 1;
            model.in_local = 1;
            model.in_arma = 1;
            model.lb_assassino = "Esqueleto";
            model.lb_local = "Etérnia";
            model.lb_arma = "Cajado Devastador";
            model.pesquisa = 0;
            return View(model);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="in_suspeito"></param> true/false
        /// <param name="in_local"></param> true/false
        /// <param name="in_arma"></param> true/false
        /// <param name="assassino"></param> valor da label
        /// <param name="local"></param> valor da label
        /// <param name="arma"></param> valor da label
        /// <param name="respostas"></param> é a resposta dos itens já dados ok
        /// <returns></returns>
        // GET: Pesquisa/Details/5
        [HttpPost]
        public async Task<ActionResult> GetPesquisa(PesquisaViewModels PesquisaView)
        {
            
            try
            {
                if (PesquisaView.in_suspeito == 0 && PesquisaView.in_local == 0 && PesquisaView.in_arma == 0 && PesquisaView.pesquisa == 2)
                    return Json(true);
                else 
                    return Json(false);
            }
            catch
            {
                return Json(false);
            }
        }

        private PesquisaViewModels MontaModel(string[] itens, PesquisaViewModels model, int correto)
        {
            return model;
        }
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

    }
}
