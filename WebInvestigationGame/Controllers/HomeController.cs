using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebInvestigationGame.Models;

namespace WebInvestigationGame.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            PesquisaViewModels model = new PesquisaViewModels();
            model.in_suspeito = 1;
            model.in_local = 1;
            model.in_arma = 1;
            model.lb_assassino = "Esqueleto";
            model.lb_local = "Etérnia";
            model.lb_arma = "Cajado Devastador";
            model.assassino = string.Empty;
            model.local = string.Empty;
            model.arma = string.Empty;
            model.pesquisa = 0;
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


    }
}