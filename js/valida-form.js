function validar () {
			var nome = form.nome.value;
			var email = form.email.value;
			var senha = form.senha.value;
			var rep_senha = form.rep_senha.value;

		if (nome == ""){
			alert('Preencha campo nome!!');
			form.nome.focus();
			return false;
		}

		if(email == "" || email.indexOf('@') == -1 ){
            alert('Preencha o campo E-mail.');
            form.email.focus();
            return false;
        }

		if(senha == "" || senha.length <= 5){
            alert('Preencha o campo senha com minimo 6 caracteres');
            form.senha.focus();
            return false;

        }
        if(rep_senha == "" || rep_senha.length <= 5){
            alert('Confirme sua senha com minimo de 6 caracteres');
            form.senha.focus();
            return false;
        }
	}