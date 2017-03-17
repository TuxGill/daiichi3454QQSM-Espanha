var ajudas = 1;
var nivel =1;
var round =1;

var escolha;
var certa;
var pronto=0;

$(document).ready(function(){

	$('.home').click(function(event) {
		/* Act on the event */

	$('.area-jogo').fadeIn(100);
		$(this).fadeOut(500);


	
	
	//setPerguntas = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p13,p17,p18,p19,p29,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43];
	setPerguntas = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p16,p17,p18,p19,p20];
	
	//setPerguntas=[p43];

	shuffle(setPerguntas);
	mostraPergunta();
	var actualQuestion;

	});

	$('.ooohhh, .ooohhh-n3, .parabens-n6 ').click(function(){
		newTeam();
	});


});

function mostraPergunta(){
	$('audio').stop();
	$('.som-nova-pergunta')[0].play();
	pronto=0;
	//alert('resposta'+answer);
	console.log('NIVEL:'+nivel);
	$('.n'+nivel).attr('src','images/n'+nivel+'Activo.png');
	$('.nova-pergunta').css('pointer-events','none');
	$('.respostas li').css('pointer-events','auto');


	$('.r-A').removeClass('r-A-errado');
	$('.r-A').removeClass('r-A-certo');
	$('.r-A').removeClass('r-A-block');

	$('.r-B').removeClass('r-B-errado');
	$('.r-B').removeClass('r-B-certo');
	$('.r-B').removeClass('r-B-block');

	$('.r-C').removeClass('r-C-errado');
	$('.r-C').removeClass('r-C-certo');
	$('.r-C').removeClass('r-C-block');

	$('.r-D').removeClass('r-D-errado');
	$('.r-D').removeClass('r-D-certo');
	$('.r-D').removeClass('r-D-block');



	//console.log(nivel);

	//console.log(setPerguntas);


	//recebe o array de perguntas e as ajudas.
	//retira a ultima pergunta do array e exibe no ecra 
	var question = setPerguntas[setPerguntas.length-1];
	actualQuestion=question;

	setPerguntas.pop();
	//console.log(question);
	//DESENHA PERGUNTA
	$('.pergunta p').html(question.texto);
	//DESENHA RESPOSTAS POSSIVEIS
	$('.r-A p').html(question.a);
	$('.r-B p').html(question.b);
	$('.r-C p').html(question.c);
	$('.r-D p').html(question.d);

}

function checkAnswer(){
	//alert(certa);
	if(escolha==certa){
		//alert('acertou');

		$('.r-'+certa).addClass('r-'+certa+'-certo');
		$('.som-acertou')[0].play();

		if(nivel<4){
			//mostraPergunta();
			nivel++;
			$('.nova-pergunta').css('pointer-events','auto');
			pronto =1;
			


		} else {
			$('.r-'+certa).addClass('r-'+certa+'-certo');
			setTimeout(function(){ 
				$('audio').stop();

				$('.parabens-n6').fadeIn(function(){
					$('.som-acertou')[0].play();

				});
				$('.area-jogo').fadeOut();

			 }, 5000);
			//alert('acabou');
		}
	} else {
		//alert('falhou');
		$('.som-falhou')[0].play();

		$('.r-'+escolha).addClass('r-'+escolha+'-errado');

		$('.r-'+certa).addClass('r-'+certa+'-certo');

		if(ajudas==0){
			if(nivel >=4)
				$('audio').stop();
				$('.ooohhh').fadeIn( function(){
				

					$('.som-falhou')[0].play();
					
				});
			if(nivel<4)
				$('.ooohhh').fadeIn( function(){
					$('.som-falhou')[0].play();

				});

			$('.area-jogo').fadeOut();

			//alert('acabou o jogo');
		}
	}

}

function chooseAnswer(answer){
	//console.log(nivel);
	//alert(answer);
	//console.log('a resposta e '+answer);
	console.log(actualQuestion);
	//console.log('a resposta certa é:'+actualQuestion.r_certa);

	$('.r-'+answer).addClass('r-'+answer+'-block');
	$('.som-bloqueou')[0].play();

	$('.respostas li').css('pointer-events','none');
	//$('.respostas li').click(function(){return false;});
	escolha = answer;
	certa=actualQuestion.r_certa;




}

function getHelp(){

	//alert(answer);

	if(ajudas>0){
		//alert(ajudas);
			ajudas--;
	/*	$('.respostas li').css('pointer-events','auto');

		if(ajudas ==2){
			$('.ajuda-1').attr('src','images/vidaUsada.png')
		}

		if(ajudas ==1){
			$('.ajuda-2').attr('src','images/vidaUsada.png')
		}
*/
		if(ajudas ==0){
			$('.ajuda-1').attr('src','images/vidaUsada.png')
		}

	
		mostraPergunta();
	} else {
		alert('Não há mais ajudas');
	}
}


function shuffle(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;

  	while (0 !== currentIndex) {
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}

  	return array;
}

function newTeam(){
	 ajudas = 3;
	 nivel =1;
	 round =1;

	 escolha;
	 certa;
	 pronto=0;

	$('.ooohhh-n3').fadeOut();
	$('.ooohhh').fadeOut();
	$('.parabens-n6').fadeOut();
	$('.area-jogo').fadeIn();
	$('.ajuda-1').attr('src','images/vida.png');
	$('.n1').attr('src','images/n1.png');
	$('.n2').attr('src','images/n2.png');
	$('.n3').attr('src','images/n3.png');
	$('.n4').attr('src','images/n4.png');


	mostraPergunta();

}