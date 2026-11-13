define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit: false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Non concerné' : 'Non concerné', 
        autoFocus:true, 
		submitText: 'Suivant'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
		decline: false,
        required : true, 		
        errorMsg: {
            required: 
                'Veuillez sélectionner une réponse.' 
        },
        autoSubmit:'false',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Attention, vous ne pourrez pas revenir sur votre réponse.'
	});

    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });

	API.addQuestionsSet('basicMulti',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectMulti'
    });
	
    API.addQuestionsSet('basicDropdown',{ //Menu déroulant 
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('basicText',{
		inherit : 'basicQ',
		type : 'text',
	});

	API.addQuestionsSet('basicGrid',{
		inherit: 'basicQ',
		type: 'grid',
		rowStemHide: true,
		checkboxType : 'colorMark',
		helpText: false,
		columns: [
			{type:'text', textProperty: 'left', css: {width:'15%'}},
			{stem: '1', css: {width: '10%'}},
			{stem: '2', css: {width: '10%'}},
			{stem: '3', css: {width: '10%'}},
			{stem: '4', css: {width: '10%'}},
			{stem: '5', css: {width: '10%'}},
			{type:'text', textProperty: 'right', css: {width:'15%'}},
			{stem: 'Non concerné', value: 8, css: {width: '10%'}}
		]
	}),


	API.addQuestionsSet('ressenti1',{
		inherit: 'basicGrid', 
		required: true,
		stem:'<b>1 - En arrivant au CC2 de cette matière, vous sentiez-vous en confiance pour réussir ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti1',
		rows: [{left: 'Très peu en confiance', right: 'Tout à fait en confiance'}
		]
		}
	);


	API.addQuestionsSet('ressenti2',{
		inherit: 'basicGrid',
		required: true,
		stem: '<b>2 - Comment avez-vous perçu la façon dont le chargé de TD de cette matière s\'adressait à vous et répondait à vos questions ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti2',
		rows: [{left: 'Désagréable et dévalorisante', right: 'Très agréable et valorisante'}
		]
	});

	API.addQuestionsSet('ressenti3',{	
		inherit: 'basicGrid', 
		required: true,
		stem: '<b>3 - Personnellement, pensez-vous avoir été traité différemment des autres étudiants dans cette matière, par exemple dans la façon dont l\'enseignant s\'adressait à vous, interagissait avec vous ou répondait à vos questions ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti3',
		rows: [{left: 'Mieux traité', right: 'Moins bien traité'}],
		steps: 3

		}
	);

	API.addQuestionsSet('ressenti4',{
		inherit: 'basicMulti', 
		decline: false,
		stem: '<b>4 - D\'après vous, ces traitements différents dans ce TD pouvaient-ils être liés à ces différents éléments ?</b>',
		answers: [
			{text: 'Votre sexe (le fait que vous soyez un homme ou une femme)', value:1},
			{text: 'Votre état de santé ou un handicap', value:2},
			{text: 'Votre couleur de peau', value:3},
			{text: 'Vos origines ou votre nationalité', value:4},
			{text: 'Votre religion', value:5},
			{text: 'Votre âge', value:6},
			{text: 'Autre', value:7},
			{text: 'Ne souhaite pas répondre / Ne sait pas', value:8},
			{text: 'Non concerné', value:9}
			]
	});

//L1

API.addQuestionsSet('licence',{
	inherit: 'basicSelect',
	name: 'licence',
	stem: 'En quelle année êtes-vous ?',
	answers: [
		{text: 'L1', value:1},
		{text: 'L2', value:2},
		{text: 'L3', value:3}
	]});

API.addQuestionsSet('24',{
		inherit : 'basicSelect', 
		name : 'stereotypes', 
		stem : 'Au-delà de votre expéricence personnelle, pensez-vous appartenir à un groupe envers lequel certains enseignants ont des stéréotypes / envers lequel des enseignants peuvent avoir des stéréotypes ?',
		answers : [
			{text : 'Oui', value:1}, 
			{text : 'Non', value:2},
			{text : 'Ne sait pas', value:8}
			]
	});
	
	API.addQuestionsSet('l1anglais1_1',{
		inherit: 'ressenti1', 
		name: 'l1anglais1_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_2',{
		inherit: 'ressenti2', 
		name: 'l1anglais1_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_3',{
		inherit: 'ressenti3', 
		name: 'l1anglais1_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_4',{
		inherit: 'ressenti4', 
		name: 'l1anglais1_4',
		header: 'Anglais (S1)'
	});


	API.addQuestionsSet('l1renfo_maths1',{
		inherit: 'ressenti1', 
		name: 'l1renfo_maths1',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths2',{
		inherit: 'ressenti2', 
		name: 'l1renfo_maths2',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths3',{
		inherit: 'ressenti3', 
		name: 'l1renfo_maths3',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths4',{
		inherit: 'ressenti4', 
		name: 'l1renfo_maths4',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1maths1_1',{
		inherit: 'ressenti1', 
		name: 'l1maths1_1',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_2',{
		inherit: 'ressenti2', 
		name: 'l1maths1_2',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_3',{
		inherit: 'ressenti3', 
		name: 'l1maths1_3',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_4',{
		inherit: 'ressenti4', 
		name: 'l1maths1_4',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_1',{
		inherit: 'ressenti1', 
		name: 'l1stats1_1',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_2',{
		inherit: 'ressenti2', 
		name: 'l1stats1_2',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_3',{
		inherit: 'ressenti3', 
		name: 'l1stats1_3',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_4',{
		inherit: 'ressenti4', 
		name: 'l1stats1_4',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco1',{
		inherit: 'ressenti1', 
		name: 'l1intro_eco1',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_eco2',{
		inherit: 'ressenti2', 
		name: 'l1intro_eco2',
		header: 'Introduction à l\'éonomie 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco3',{
		inherit: 'ressenti3', 
		name: 'l1intro_eco3',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_eco4',{
		inherit: 'ressenti4', 
		name: 'l1intro_eco4',
		header: 'Introduction à l\'éonomie 1 (S1)'
	});

	API.addQuestionsSet('l1intro_gest1',{
		inherit: 'ressenti1', 
		name: 'l1intro_gest1',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest2',{
		inherit: 'ressenti2', 
		name: 'l1intro_gest2',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest3',{
		inherit: 'ressenti3', 
		name: 'l1intro_gest3',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest4',{
		inherit: 'ressenti4', 
		name: 'l1intro_gest4',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1micro1_1',{
		inherit: 'ressenti1', 
		name: 'l1micro1_1',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_2',{
		inherit: 'ressenti2', 
		name: 'l1micro1_2',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_3',{
		inherit: 'ressenti3', 
		name: 'l1micro1_3',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_4',{
		inherit: 'ressenti4', 
		name: 'l1micro1_4',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_1',{
		inherit: 'ressenti1', 
		name: 'l1macro1_1',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_2',{
		inherit: 'ressenti2', 
		name: 'l1macro1_2',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_3',{
		inherit: 'ressenti3', 
		name: 'l1macro1_3',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_4',{
		inherit: 'ressenti4', 
		name: 'l1macro1_4',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag1',{
		inherit: 'ressenti1', 
		name: 'l1enjeux_manag1',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag2',{
		inherit: 'ressenti2', 
		name: 'l1enjeux_manag2',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag3',{
		inherit: 'ressenti3', 
		name: 'l1enjeux_manag3',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag4',{
		inherit: 'ressenti4', 
		name: 'l1enjeux_manag4',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1compta1_1',{
		inherit: 'ressenti1', 
		name: 'l1compta1_1',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_2',{
		inherit: 'ressenti2', 
		name: 'l1compta1_2',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_3',{
		inherit: 'ressenti3', 
		name: 'l1compta1_3',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_4',{
		inherit: 'ressenti4', 
		name: 'l1compta1_4',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1anglais2_1',{
		inherit: 'ressenti1', 
		name: 'l1anglais2_1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_2',{
		inherit: 'ressenti2', 
		name: 'l1anglais2_2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_3',{
		inherit: 'ressenti3', 
		name: 'l1anglais2_3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_4',{
		inherit: 'ressenti4', 
		name: 'l1anglais2_4',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1maths2_1',{
		inherit: 'ressenti1', 
		name: 'l1maths2_1',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_2',{
		inherit: 'ressenti2', 
		name: 'l1maths2_2',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_3',{
		inherit: 'ressenti3', 
		name: 'l1maths2_3',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_4',{
		inherit: 'ressenti4', 
		name: 'l1maths2_4',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_1',{
		inherit: 'ressenti1', 
		name: 'l1stats2_1',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_2',{
		inherit: 'ressenti2', 
		name: 'l1stats2_2',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_3',{
		inherit: 'ressenti3', 
		name: 'l1stats2_3',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_4',{
		inherit: 'ressenti4', 
		name: 'l1stats2_4',
		header: 'Statistiques 2 (S2)'
	});


	//L2

	API.addQuestionsSet('l2micro2_1',{
		inherit: 'ressenti1', 
		name: 'l2micro2_1',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_2',{
		inherit: 'ressenti2', 
		name: 'l2micro2_2',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_3',{
		inherit: 'ressenti3', 
		name: 'l2micro2_3',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_4',{
		inherit: 'ressenti4', 
		name: 'l2micro2_4',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_1',{
		inherit: 'ressenti1', 
		name: 'l2macro2_1',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_2',{
		inherit: 'ressenti2', 
		name: 'l2macro2_2',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_3',{
		inherit: 'ressenti3', 
		name: 'l2macro2_3',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_4',{
		inherit: 'ressenti4', 
		name: 'l2macro2_4',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2compta2_1',{
		inherit: 'ressenti1', 
		name: 'l2compta2_1',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_2',{
		inherit: 'ressenti2', 
		name: 'l2compta2_2',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_3',{
		inherit: 'ressenti3', 
		name: 'l2compta2_3',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_4',{
		inherit: 'ressenti4', 
		name: 'l2compta2_4',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2intro_rh1',{
		inherit: 'ressenti1', 
		name: 'l2intro_rh1',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh2',{
		inherit: 'ressenti2', 
		name: 'l2intro_rh2',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh3',{
		inherit: 'ressenti3', 
		name: 'l2intro_rh3',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh4',{
		inherit: 'ressenti4', 
		name: 'l2intro_rh4',
		header: 'Introduction aux ressources humaines (S1)'
	});


	API.addQuestionsSet('l2etudes_mark1',{
		inherit: 'ressenti1', 
		name: 'l2etudes_mark1',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark2',{
		inherit: 'ressenti2', 
		name: 'l2etudes_mark2',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark3',{
		inherit: 'ressenti3', 
		name: 'l2etudes_mark3',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark4',{
		inherit: 'ressenti4', 
		name: 'l2etudes_mark4',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2maths3_1',{
		inherit: 'ressenti1', 
		name: 'l2maths3_1',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_2',{
		inherit: 'ressenti2', 
		name: 'l2maths3_2',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_3',{
		inherit: 'ressenti3', 
		name: 'l2maths3_3',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_4',{
		inherit: 'ressenti4', 
		name: 'l2maths3_4',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2proba1_1',{
		inherit: 'ressenti1', 
		name: 'l2proba1_1',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_2',{
		inherit: 'ressenti2', 
		name: 'l2proba1_2',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_3',{
		inherit: 'ressenti3', 
		name: 'l2proba1_3',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_4',{
		inherit: 'ressenti4', 
		name: 'l2proba1_4',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2anglais3_1',{
		inherit: 'ressenti1', 
		name: 'l2anglais3_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_2',{
		inherit: 'ressenti2', 
		name: 'l2anglais3_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_3',{
		inherit: 'ressenti3', 
		name: 'l2anglais3_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_4',{
		inherit: 'ressenti4', 
		name: 'l2anglais3_4',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2macro3_1',{
		inherit: 'ressenti1', 
		name: 'l2macro3_1',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2macro3_2',{
		inherit: 'ressenti2', 
		name: 'l2macro3_2',
		header: 'Macroéconomie 2 (S2)'
	});

	API.addQuestionsSet('l2macro3_3',{
		inherit: 'ressenti3', 
		name: 'l2macro3_3',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2macro3_4',{
		inherit: 'ressenti4', 
		name: 'l2macro3_4',
		header: 'Macroéconomie 2 (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc1',{
		inherit: 'ressenti1', 
		name: 'l2pol_eco_soc1',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc2',{
		inherit: 'ressenti2', 
		name: 'l2pol_eco_soc2',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc3',{
		inherit: 'ressenti3', 
		name: 'l2pol_eco_soc3',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc4',{
		inherit: 'ressenti4', 
		name: 'l2pol_eco_soc4',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2mon_fi1',{
		inherit: 'ressenti1', 
		name: 'l2mon_fi1',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi2',{
		inherit: 'ressenti2', 
		name: 'l2mon_fi2',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi3',{
		inherit: 'ressenti3', 
		name: 'l2mon_fi3',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi4',{
		inherit: 'ressenti4', 
		name: 'l2mon_fi4',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2analyse_fi1',{
		inherit: 'ressenti1', 
		name: 'l2analyse_fi1',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi2',{
		inherit: 'ressenti2', 
		name: 'l2analyse_fi2',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi3',{
		inherit: 'ressenti3', 
		name: 'l2analyse_fi3',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi4',{
		inherit: 'ressenti4', 
		name: 'l2analyse_fi4',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2gest_prod1',{
		inherit: 'ressenti1', 
		name: 'l2gest_prod1',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod2',{
		inherit: 'ressenti2', 
		name: 'l2gest_prod2',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod3',{
		inherit: 'ressenti3', 
		name: 'l2gest_prod3',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod4',{
		inherit: 'ressenti4', 
		name: 'l2gest_prod4',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2analyse_don1',{
		inherit: 'ressenti1', 
		name: 'l2analyse_don1',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don2',{
		inherit: 'ressenti2', 
		name: 'l2analyse_don2',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don3',{
		inherit: 'ressenti3', 
		name: 'l2analyse_don3',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don4',{
		inherit: 'ressenti4', 
		name: 'l2analyse_don4',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2anglais4_1',{
		inherit: 'ressenti1', 
		name: 'l2anglais4_1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_2',{
		inherit: 'ressenti2', 
		name: 'l2anglais4_2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_3',{
		inherit: 'ressenti3', 
		name: 'l2anglais4_3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_4',{
		inherit: 'ressenti4', 
		name: 'l2anglais4_4',
		header: 'Anglais (S2)'
	});


	//L3 gestion

	API.addQuestionsSet('l3marketing1',{
		inherit: 'ressenti1',
		name: 'l3marketing',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3marketing2',{
		inherit: 'ressenti2',
		name: 'l3marketing2',
		header: 'Marketing durable (S5)'
	});

	API.addQuestionsSet('l3marketing3',{
		inherit: 'ressenti3',
		name: 'l3marketing3',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3marketing4',{
		inherit: 'ressenti4',
		name: 'l3marketing4',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3anglais5_1',{
		inherit: 'ressenti1',
		name: 'l3anglais5_1',
		header: 'Anglais (S5)'
	});

    API.addQuestionsSet('l3anglais5_2',{
		inherit: 'ressenti2',
		name: 'l3anglais5_2',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3anglais5_3',{
		inherit: 'ressenti3',
		name: 'l3anglais5_3',
		header: 'Anglais (S5)'
	});

    API.addQuestionsSet('l3anglais5_4',{
		inherit: 'ressenti4',
		name: 'l3anglais5_4',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3strat1',{
		inherit: 'ressenti1',
		name: 'l3strat1',
		header: 'Fondamentaux de la stratégie (S6)'
	});

    API.addQuestionsSet('l3strat2',{
		inherit: 'ressenti2',
		name: 'l3strat2',
		header: 'Fondamentaux de la stratégie (S6)'
	});

	API.addQuestionsSet('l3strat3',{
		inherit: 'ressenti3',
		name: 'l3strat3',
		header: 'Fondamentaux de la stratégie (S6)'
	});

    API.addQuestionsSet('l3strat4',{
		inherit: 'ressenti4',
		name: 'l3strat4',
		header: 'Fondamentaux de la stratégie (S6)'
	});
	
    API.addQuestionsSet('l3anglais6_1',{
		inherit: 'ressenti1',
		name: 'l3anglais6_1',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3anglais6_2',{
		inherit: 'ressenti2',
		name: 'l3anglais6_2',
		header: 'Anglais (S6)'
	});

	API.addQuestionsSet('l3anglais6_3',{
		inherit: 'ressenti3',
		name: 'l3anglais6_3',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3anglais6_4',{
		inherit: 'ressenti4',
		name: 'l3anglais6_4',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3stats1',{
		inherit: 'ressenti1',
		name: 'l3stats1',
		header: 'Statistiques descriptives (S6)'
	});

    API.addQuestionsSet('l3stats2',{
		inherit: 'ressenti2',
		name: 'l3stats2',
		header: 'Statistiques descriptives (S6)'
	});

	API.addQuestionsSet('l3stats3',{
		inherit: 'ressenti3',
		name: 'l3stats3',
		header: 'Statistiques descriptives (S6)'
	});

    API.addQuestionsSet('l3stats4',{
		inherit: 'ressenti4',
		name: 'l3stats4'
	});

	

    //L1
API.addSequence([
	{inherit: 'basicPage', questions: {inherit: 'licence'}, decline: false},
	{inherit: 'basicPage', questions: {inherit: '24'}},

	{inherit: 'basicPage', questions: 
		{type: 'info',
		description: 'Nous allons maintenant vous poser des questions sur votre année à l\'université et sur chacun des enseignements que vous avez reçu en TD cette année.'
		}
	},

	{mixer: 'multiBranch',
		branches: [
			{
				conditions: [
					{compare: 'current.questions.licence.response', to :1}
				],
				data: [
					{inherit: 'basicPage',
					progressBar: '1/13', 
					header: 'Anglais (S1)',
					required: true, 
					questions:[
						{inherit:'l1anglais1_1'},
						{inherit:'l1anglais1_2'},
						{inherit:'l1anglais1_3'},
						{inherit:'l1anglais1_4'}]
					},
					{inherit: 'basicPage', 
						progressBar: '2/13',
					header: 'Renforcement en mathématiques (S1)',
					questions:[
						{inherit:'l1renfo_maths1'},
						{inherit:'l1renfo_maths2'},
						{inherit:'l1renfo_maths3'},
						{inherit:'l1renfo_maths4'}
					]},
					{inherit: 'basicPage', 
						progressBar: '3/13',
					header: 'Mathématiques 1 (S1)',
					questions:[
						{inherit:'l1maths1_1'},
						{inherit:'l1maths1_2'},
						{inherit:'l1maths1_3'},
						{inherit:'l1maths1_4'}
					]},
					{inherit: 'basicPage', 
						progressBar: '4/13',
					header: 'Statistiques 1 (S1)',
					questions:[
						{inherit:'l1stats1_1'},
						{inherit:'l1stats1_2'},
						{inherit:'l1stats1_3'},
						{inherit:'l1stats1_4'}
						]
					},
					{inherit: 'basicPage', 
						progressBar: '5/13',
					header: 'Introduction à l\'économie (S1)',
					questions:[
						{inherit:'l1intro_eco1'},
						{inherit:'l1intro_eco2'},
						{inherit:'l1intro_eco3'},
						{inherit:'l1intro_eco4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '6/13',
					header: 'Introduction à la gestion et au management (S1)',
					questions:[
						{inherit:'l1intro_gest1'},
						{inherit:'l1intro_gest2'},
						{inherit:'l1intro_gest3'},
						{inherit:'l1intro_gest4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '7/13',
					header: 'Microéconomie 1 (S2)',
					questions:[
						{inherit:'l1micro1_1'},
						{inherit:'l1micro1_2'},
						{inherit:'l1micro1_3'},
						{inherit:'l1micro1_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '8/13',
					header: 'Macroéconomie 1 (S2)',
					questions:[
						{inherit:'l1macro1_1'},
						{inherit:'l1macro1_2'},
						{inherit:'l1macro1_3'},
						{inherit:'l1macro1_4'}
						]
					},
					
					{inherit: 'basicPage', 
						progressBar: '9/13',
					header: 'Enjeux du management des organisations (S2)',
					questions:[
						{inherit:'l1enjeux_manag1'},
						{inherit:'l1enjeux_manag2'},
						{inherit:'l1enjeux_manag3'},
						{inherit:'l1enjeux_manag4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '10/13',
					header: 'Comptabilité générale (S2)',
					questions:[
						{inherit:'l1compta1_1'},
						{inherit:'l1compta1_2'},
						{inherit:'l1compta1_3'},
						{inherit:'l1compta1_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '11/13',
					header: 'Anglais (S2)',
					questions:[
						{inherit:'l1anglais2_1'},
						{inherit:'l1anglais2_2'},
						{inherit:'l1anglais2_3'},
						{inherit:'l1anglais2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '12/13',
					header: 'Mathématiques 2 (S2)',
					questions:[
						{inherit:'l1maths2_1'},
						{inherit:'l1maths2_2'},
						{inherit:'l1maths2_3'},
						{inherit:'l1maths2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '13/13',
					header: 'Statistiques 2 (S2)',
					questions:[
						{inherit:'l1stats2_1'},
						{inherit:'l1stats2_2'},
						{inherit:'l1stats2_3'},
						{inherit:'l1stats2_4'}
						]
					},
				]
			},
			{
				conditions: [
					{compare: 'current.questions.licence.response', to :2}
				],
				data: [
					{inherit: 'basicPage', 
						progressBar: '1/15',
					header: 'Microéconomie 2 (S1)',
					questions:[
						{inherit:'l2micro2_1'},
						{inherit:'l2micro2_2'},
						{inherit:'l2micro2_3'},
						{inherit:'l2micro2_4'}
						]
					},
				
					{inherit: 'basicPage', 
						progressBar: '2/15',
					header: 'Macroéconomie 2 (S1)',
					questions:[
						{inherit:'l2macro2_1'},
						{inherit:'l2macro2_2'},
						{inherit:'l2macro2_3'},
						{inherit:'l2macro2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '3/15',
					header: 'Comptabilité générale (S1)',
					questions:[
						{inherit:'l2compta2_1'},
						{inherit:'l2compta2_2'},
						{inherit:'l2compta2_3'},
						{inherit:'l2compta2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '4/15',
					header: 'Introduction aux ressources humaines (S1)',
					questions:[
						{inherit:'l2intro_rh1'},
						{inherit:'l2intro_rh2'},
						{inherit:'l2intro_rh3'},
						{inherit:'l2intro_rh4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '5/15',
					header: 'Etudes marketing (S1)',
					questions:[
						{inherit:'l2etudes_mark1'},
						{inherit:'l2etudes_mark2'},
						{inherit:'l2etudes_mark3'},
						{inherit:'l2etudes_mark4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '6/15',
					header: 'Mathématiques 3 (S1)',
					questions:[
						{inherit:'l2maths3_1'},
						{inherit:'l2maths3_2'},
						{inherit:'l2maths3_3'},
						{inherit:'l2maths3_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '7/15',
					header: 'Probabilités (S1)',
					questions:[
						{inherit:'l2proba1_1'},
						{inherit:'l2proba1_2'},
						{inherit:'l2proba1_3'},
						{inherit:'l2proba1_4'}
						]
					},
					
					{inherit: 'basicPage',
						progressBar: '8/15', 
					header: 'Anglais (S1)',
					questions:[
						{inherit:'l2anglais3_1'},
						{inherit:'l2anglais3_2'},
						{inherit:'l2anglais3_3'},
						{inherit:'l2anglais3_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '9/15',
					header: 'Anglais (S1)',
					questions:[
						{inherit:'l2macro3_1'},
						{inherit:'l2macro3_2'},
						{inherit:'l2macro3_3'},
						{inherit:'l2macro3_4'}
						]
					},

					{inherit: 'basicPage',
						progressBar: '10/15', 
					header: 'Politiques économiques et sociales (S2)',
					questions:[
						{inherit:'l2pol_eco_soc1'},
						{inherit:'l2pol_eco_soc2'},
						{inherit:'l2pol_eco_soc3'},
						{inherit:'l2pol_eco_soc4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '11/15',
					header: 'Monnaie et finance (S2)',
					questions:[
						{inherit:'l2mon_fi1'},
						{inherit:'l2mon_fi2'},
						{inherit:'l2mon_fi3'},
						{inherit:'l2mon_fi4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '12/15',
					header: 'Analyse financière (S2)',
					questions:[
						{inherit:'l2analyse_fi1'},
						{inherit:'l2analyse_fi2'},
						{inherit:'l2analyse_fi3'},
						{inherit:'l2analyse_fi4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '13/15',
					header: 'Gestion de production (S2)',
					questions:[
						{inherit:'l2gest_prod1'},
						{inherit:'l2gest_prod2'},
						{inherit:'l2gest_prod3'},
						{inherit:'l2gest_prod4'}
						]
					},
					
					{inherit: 'basicPage', 
						progressBar: '14/15',
					header: 'Analyse des données (S2)',
					questions:[
						{inherit:'l2analyse_don1'},
						{inherit:'l2analyse_don2'},
						{inherit:'l2analyse_don3'},
						{inherit:'l2analyse_don4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '15/15',
					header: 'Anglais (S2)',
					questions:[
						{inherit:'l2anglais4_1'},
						{inherit:'l2anglais4_2'},
						{inherit:'l2anglais4_3'},
						{inherit:'l2anglais4_4'}
						]
					},
				]
			},
			{
				conditions: [
					{compare: 'current.questions.licence.response', to:3}
				],
				data: [
					{inherit: 'basicPage', 
						progressBar: '1/5',
					header: 'Marketing durable (S5)',
					questions: [
						{inherit:'l3marketing1'},
						{inherit:'l3marketing2'},
						{inherit:'l3marketing3'},
						{inherit:'l3marketing4'}
						]
					},

					{inherit: 'basicPage', 
					header: 'Anglais (S5)',
					progressBar: '2/5',
					questions: [
						{inherit:'l3anglais5_1'},
						{inherit:'l3anglais5_2'},
						{inherit:'l3anglais5_3'},
						{inherit:'l3anglais5_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '3/5',
					header: 'Fondamentaux de la stratégie (S6)',
					questions: [
						{inherit:'l3strat1'},
						{inherit:'l3strat2'},
						{inherit:'l3strat3'},
						{inherit:'l3strat4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '4/5',
					header: 'Anglais (S6)',
					conditions: 'current.questions.licence.response == 3',
					questions: [
						{inherit:'l3anglais6_1'},
						{inherit:'l3anglais6_2'},
						{inherit:'l3anglais6_3'},
						{inherit:'l3anglais6_4'}
						]
					},	

					{inherit: 'basicPage', 
						progressBar: '5/5',
					header: 'Statistiques descriptives (S6)',
					conditions: 'current.questions.licence.response == 3',
					questions: [
						{inherit:'l3stats1'},
						{inherit:'l3stats2'},
						{inherit:'l3stats3'},
						{inherit:'l3stats4'}
						]
					}
				]
			}
		]
	}
]);
			

    return API.script;
});
