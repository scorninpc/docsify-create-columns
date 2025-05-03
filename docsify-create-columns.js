(function () {
	var docsifyCreateColumns = function (hook, vm) {
		
		hook.beforeEach(function(html) {

			// faz o regex em busca do [!columns]
			regex = /\[!columns(?:[\|\s|\S]*?)?\]\s*([\s\S]*?)(.*?)\[!\/columns\]/s;
			while ((match = regex.exec(html)) !== null) {

				// inicializa o estilo do bloco
				var columns_style = "",
					column_style = "";

				// verifica se tem configuração de estilo
				var params_regex = /\[\!columns(\|.*)?\]/g;
				var params_match = params_regex.exec(match[0]);
				if(params_match[1] != undefined) {

					// se tem, explode os parametros e percorre cada um
					var params = params_match[1].split("|");
					for(var i = 0; i < params.length; i++) {

						// explode o valor e o nome
						var param = params[i].split(":"),
							param_name = param[0],
							param_value = param[1];

						// se é espaçamento horizontal
						if(param_name == "spaceHorizontal") {
							column_style += "padding-left:" + param_value + "; padding-right:" + param_value + ";";
						}
						// se é espaçamento vertical
						else if(param_name == "spaceVertical") {
							column_style += "padding-top:" + param_value + "; padding-bottom:" + param_value + ";";
						}
						// se é margin top
						else if(param_name == "marginTop") {
							columns_style += "margin-top:" + param_value + ";";
						}
						// se é margin bottom
						else if(param_name == "marginBottom") {
							columns_style += "margin-bottom:" + param_value + ";";
						}
						// verifica se o conteudo é centralizado
						else if((param_name == "contentAlign")) {
							columns_style += "text-align: " + param_value + ";";
						}
					}
				}
				
				// faz as trocas do bloco pai de colunas
				var novo = match[0].replace(/\[!columns(\|.*)?\]/g, '<div class="create-columns" style="' + columns_style + '">').replace(/\[!\/columns\]/g, '</div>');

				// agora faz as trocas dos blocos filhos, coluna
				novo = novo.replace(/\[!column\]/g, '<div class="create-column"  style="' + column_style + '">');
				novo = novo.replace(/\[!\/column\]/g, '</div>');

				// e faz a troca no html final, para interar o proximo bloco
				html = html.replace(match[0], novo);
			}

			// retorna o html finalizado
			return html;
		});

	};

	// Add plugin to docsify's plugin array
	$docsify = $docsify || {};
	$docsify.plugins = [].concat($docsify.plugins || [], docsifyCreateColumns);

})();