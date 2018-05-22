var data = {
    PesquisaView: {
        In_suspeito: 0,
        In_local: 0,
        In_arma: 0,
        Lb_assassino: "",
        Lb_local: "",
        Lb_arma: "",
        Assassino: "",
        Local: "",
        Arma: "",
        Pesquisa: 0
    },
}
var _data_ = undefined;
var _exec_ = false;
var runGetData = function () {
    data.PesquisaView = getPesquisa();
}
function getPesquisa() {
    data.PesquisaView.In_suspeito = $('#in-suspeito').val();
    data.PesquisaView.In_local = $('#in-local').val();
    data.PesquisaView.In_arma = $('#in-arma').val();
    data.PesquisaView.Lb_assassino = $('#sp-suspeito-pesquisa').text();
    data.PesquisaView.Lb_local = $('#sp-local-pesquisa').text();
    data.PesquisaView.Lb_arma = $('#sp-arma-pesquisa').text();
    data.PesquisaView.Assassino = $('#in-suspeito').val() == 0 ? $('#sp-suspeito-pesquisa').text() : '';
    data.PesquisaView.Local = $('#in-local').val() == 0 ? $('#sp-local-pesquisa').text() : '';
    data.PesquisaView.Arma = $('#in-arma').val() == 0 ? $('#sp-arma-pesquisa').text() : '';
    data.PesquisaView.Pesquisa = 1;
    return data.PesquisaView;
}
$(document).ready(function () {
    $(".btnComecar").on("click", function () {
        $('#dv-pesquisa').removeClass('collapse');
        $('#dv-iniciar').addClass('collapse');
    });
    $(".btnSair").on("click", function () {
        debugger;
        var pathparts = location.pathname.split('/');
        if (location.host == 'localhost') {
            var url = location.origin + '/' + pathparts[1].trim('/') + '/'; 
        } else {
            var url = location.origin + '/home';
        }
        window.location.href = url;
    });

    $(".btnProximo").on("click", function () {
        if (!_exec_) {
            _exec_ = true;
            runGetData();
            _data_ = JSON.stringify(data);
            if (PesquisaSupeito(data)) {
                
                $.ajax({
                    async: true,
                    type: "POST",
                    url: "/Pesquisa/GetPesquisa",
                    dataType: "json",
                    contentType: "application/json",
                    data: _data_,
                    beforeSend: function (resp) {
                        //$('#-modal-id-').modal('toggle');
                    },
                    success: function (resp) {
                        alert('Obrigado Pela sua contribuição');
                    },
                    error: function (resp) {
                    },
                    complete: function (resp) {
                        //$('#-modal-id-').modal('toggle');
                    }
                });
            }

            _exec_ = false;
        }

    });
});

function PesquisaSupeito(data) {

    var listSuspeitos = $('#in_listaSuspeitos').val().split('|');
    var listLocais = $('#in_listaLocais').val().split('|');
    var listArmas = $('#in_listaArmas').val().split('|');
    if ($('#in-suspeito').val() > 1 || $('#in-suspeito').val() < 0 || $('#in-local').val() > 1 || $('#in-local').val() < 0 || $('#in-arma').val() > 1 || $('#in-arma').val() < 0) {
        alert('Favor informar valores, válidos.');
        return false;
    }
    if (data.PesquisaView.In_suspeito.trim() != '' && data.PesquisaView.In_local.trim() != '' && data.PesquisaView.In_arma.trim() != ''
        && data.PesquisaView.In_suspeito == 0 && data.PesquisaView.In_local == 0 && data.PesquisaView.In_arma == 0
        && data.PesquisaView.Assassino.length > 0 && data.PesquisaView.Local.length > 0 && data.PesquisaView.Arma.length > 0) {
        $('#sp-assassino').text(data.PesquisaView.Assassino);
        $('#sp-local').text(data.PesquisaView.Local);
        $('#sp-arma').text(data.PesquisaView.Arma);
        data.PesquisaView.Pesquisa = 2;
        
        $('#dv-agradecimento').removeClass('collapse');
        $('#dv-pesquisa').addClass('collapse');
        // Ativar a ultima tela enquanto executa
        return true;
    } else {
        /// Suspeito
        if (data.PesquisaView.Lb_assassino.trim() != '' && data.PesquisaView.In_suspeito == 0) { // Se vier com 0 confirma que o nome exibido é o assassino então este não pesquisa mais.
            //  $('#sp-suspeito-pesquisa').text(data.PesquisaView.Lb_assassino.Trim());
            $('#in-suspeito').add(' readonly ');
        }
        else { /// Converter para uma função que faz os 3 campos                        
            if (listSuspeitos[5] == data.PesquisaView.Lb_assassino && data.PesquisaView.In_suspeito == 1) {
                $('#sp-suspeito-pesquisa').text(listSuspeitos[0].trim());
                $('#in-suspeito').val('');
            }
            else {
                var achou = false; // Se achou o próximo registro que será exibido
                for (var i = 0; i < 6; i++) {
                    if (achou) {
                        $('#sp-suspeito-pesquisa').text(listSuspeitos[i].trim());
                        $('#in-suspeito').val('');
                        break;
                    }
                    if (listSuspeitos[i].trim() == $('#sp-suspeito-pesquisa').text().trim())
                        achou = true;
                }
            }
        }
        /// Local
        if (data.PesquisaView.Lb_local.trim() != '' && data.PesquisaView.In_local == 0) { // Se vier com 0 confirma que o nome exibido é o assassino então este não pesquisa mais.
            //   $('#sp-local-pesquisa').text(data.PesquisaView.Lb_local.Trim());
            $('#in-local').add(' readonly ');
        }
        else { /// Converter para uma função que faz os 3 campos                        
            if (listLocais[9] == data.PesquisaView.Lb_local && data.PesquisaView.In_local == 1) {
                $('#sp-local-pesquisa').text(listLocais[0].Trim());
                $('#in-local').val('');
            }
            else {
                var achou = false; // Se achou o próximo registro que será exibido
                for (var i = 0; i < 10; i++) {
                    if (achou) {
                        $('#sp-local-pesquisa').text(listLocais[i].trim());
                        $('#in-local').val('');
                        break;
                    }
                    if (listLocais[i].trim() == $('#sp-local-pesquisa').text().trim())
                        achou = true;
                }
            }
        }
        /// Arma
        if (data.PesquisaView.Lb_arma.trim() != '' && data.PesquisaView.In_arma == 0) { // Se vier com 0 confirma que o nome exibido é o assassino então este não pesquisa mais.
            $('#in-arma').add(' readonly ');
        }
        else { /// Converter para uma função que faz os 3 campos                        
            if (listArmas[5] == data.PesquisaView.Lb_arma && data.PesquisaView.In_arma == 1) {
                $('#sp-arma-pesquisa').text(listArmas[0].trim());
                $('#in-arma').val('');
            }
            else {
                var achou = false; // Se achou o próximo registro que será exibido
                for (var i = 0; i < 10; i++) {
                    if (achou) {
                        $('#sp-arma-pesquisa').text(listArmas[i].trim());
                        $('#in-arma').val('');
                        break;
                    }
                    if (listArmas[i].trim() == $('#sp-arma-pesquisa').text().trim())
                        achou = true;
                }
            }
        }
    }
    return false;
}

var Pesquisa = function () {

    var runPessJuridico = function () {
        //runGetData();
        //_data_ = JSON.stringify(data);
        //$.ajax({
        //    async: true,
        //    type: "POST",
        //    url: "/Pesquisa/GetPesquisa",
        //    dataType: "json",
        //    contentType: "application/json",
        //    data: _data_,
        //    beforeSend: function (resp) {
        //        //$('#-modal-id-').modal('toggle');
        //    },
        //    success: function (resp) {
        //        alert('Registro enviado com sucesso!');
        //    },
        //    error: function (resp) {
        //    },
        //    complete: function (resp) {
        //        //$('#-modal-id-').modal('toggle');
        //    }
        //});
    }
}();