using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace WebInvestigationGame.Models
{
    public class PesquisaViewModels
    {
        public string suspeitos = "Esqueleto|Khan|Darth vader|Sideshow Bob|Coringa|Duende Verde"; // (6)
        public string locais = "Etérnia|Vulcano|Tatooine|Springfield|Gotham|Nova York|Sibéria|Machu Picchu|Show do Katinguele|São Paulo"; // 10
        public string armas = "Cajado Devastador|Phaser|Peixeira|Trezoitão|Sabre de Luz|Bomba";

        public int in_suspeito { get; set; }
        public int in_local { get; set; }
        public int in_arma { get; set; }
        public string lb_assassino { get; set; }
        public string lb_local { get; set; }
        public string lb_arma { get; set; }
        public string assassino { get; set; }
        public string local { get; set; }
        public string arma { get; set; }
        public int pesquisa { get; set; }

    }
}
