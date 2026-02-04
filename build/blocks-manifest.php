<?php
// This file is generated. Do not modify it manually.
return array(
	'alert' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/alert',
		'version' => '1.0.0',
		'title' => 'Alert',
		'category' => 'text',
		'icon' => 'warning',
		'description' => 'Bloc d\'alerte avec différents types et variantes.',
		'keywords' => array(
			'alert',
			'alerte',
			'notification',
			'info',
			'warning',
			'error',
			'success'
		),
		'attributes' => array(
			'type' => array(
				'type' => 'string',
				'default' => 'info'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Information'
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'primaryButtonText' => array(
				'type' => 'string',
				'default' => 'Découvrir'
			),
			'primaryButtonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'secondaryButtonText' => array(
				'type' => 'string',
				'default' => 'En savoir plus'
			),
			'secondaryButtonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'showClose' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'assessment' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/assessment',
		'version' => '1.0.0',
		'title' => 'Assessment Jurible',
		'category' => 'text',
		'icon' => 'clipboard',
		'description' => 'Bloc de soumission et affichage des notes pour les assessments',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'assessmentId' => array(
				'type' => 'number',
				'default' => 0
			),
			'assessmentTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'courseId' => array(
				'type' => 'number',
				'default' => 0
			),
			'lessonId' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'badge-trust' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/badge-trust',
		'version' => '1.0.0',
		'title' => 'Badge Trust',
		'category' => 'jurible',
		'icon' => 'awards',
		'description' => 'Badge de confiance social proof',
		'keywords' => array(
			'trust',
			'badge',
			'social proof',
			'avis',
			'rating'
		),
		'supports' => array(
			'html' => false,
			'align' => false
		),
		'attributes' => array(
			'variant' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'icon' => array(
				'type' => 'string',
				'default' => '🎓'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'École en ligne depuis 2018'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => '25 000+ étudiants formés'
			),
			'rating' => array(
				'type' => 'string',
				'default' => '4.8'
			),
			'reviewCount' => array(
				'type' => 'string',
				'default' => '+150 avis'
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'bouton' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/bouton',
		'version' => '1.0.0',
		'title' => 'Bouton Jurible',
		'category' => 'design',
		'icon' => 'button',
		'description' => 'Bouton personnalisé avec 3 styles',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Mon bouton'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'style' => array(
				'type' => 'string',
				'default' => 'primary'
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'breadcrumb' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/breadcrumb',
		'version' => '1.0.0',
		'title' => 'Fil d\'Ariane',
		'category' => 'widgets',
		'icon' => 'arrow-right-alt',
		'description' => 'Fil d\'Ariane dynamique basé sur la hiérarchie WordPress.',
		'keywords' => array(
			'breadcrumb',
			'fil',
			'ariane',
			'navigation'
		),
		'attributes' => array(
			'homeIconOnMobile' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showCurrentPage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showSchema' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false,
			'align' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'card-cours' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/card-cours',
		'version' => '1.0.0',
		'title' => 'Card Cours',
		'category' => 'jurible',
		'icon' => 'welcome-learn-more',
		'description' => 'Carte de cours pour le catalogue Jurible',
		'keywords' => array(
			'card',
			'cours',
			'catalogue',
			'formation'
		),
		'supports' => array(
			'html' => false,
			'align' => false
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'badgeIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'showBadge' => array(
				'type' => 'boolean',
				'default' => false
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Titre du cours'
			),
			'videosCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'fichesCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'qcmCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'flashcardsCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'annalesCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'mindmapsCount' => array(
				'type' => 'number',
				'default' => 0
			),
			'showIncludedLabel' => array(
				'type' => 'boolean',
				'default' => true
			),
			'includedLabelText' => array(
				'type' => 'string',
				'default' => 'Inclus dans l\'Academie'
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Voir le cours'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => '#'
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'card-testimonial' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/card-testimonial',
		'version' => '1.0.0',
		'title' => 'Card Testimonial',
		'category' => 'jurible',
		'icon' => 'format-quote',
		'description' => 'Carte de témoignage avec variante Standard ou Hero',
		'keywords' => array(
			'testimonial',
			'témoignage',
			'avis',
			'quote',
			'review'
		),
		'supports' => array(
			'html' => false,
			'align' => false
		),
		'attributes' => array(
			'variant' => array(
				'type' => 'string',
				'default' => 'standard'
			),
			'rating' => array(
				'type' => 'number',
				'default' => 5
			),
			'quote' => array(
				'type' => 'string',
				'default' => 'J\'ai validé ma L1 du premier coup grâce à Jurible. Les vidéos sont super claires et les fiches m\'ont fait gagner un temps fou.'
			),
			'showBadge' => array(
				'type' => 'boolean',
				'default' => true
			),
			'badgeText' => array(
				'type' => 'string',
				'default' => 'L1 validée avec mention'
			),
			'avatarType' => array(
				'type' => 'string',
				'default' => 'initials'
			),
			'avatarUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'avatarId' => array(
				'type' => 'number',
				'default' => 0
			),
			'avatarInitials' => array(
				'type' => 'string',
				'default' => 'ML'
			),
			'authorName' => array(
				'type' => 'string',
				'default' => 'Marie L.'
			),
			'authorSubtitle' => array(
				'type' => 'string',
				'default' => 'L1 Droit — Paris 1'
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'citation' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/citation',
		'version' => '1.0.0',
		'title' => 'Citation',
		'category' => 'text',
		'icon' => 'format-quote',
		'description' => 'Citation avec barre grise',
		'attributes' => array(
			'citation' => array(
				'type' => 'string',
				'default' => ''
			),
			'source' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'flashcards' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/flashcards',
		'version' => '1.0.0',
		'title' => 'Flashcards Jurible',
		'category' => 'text',
		'icon' => 'welcome-learn-more',
		'description' => 'Affiche les flashcards d\'une leçon pour réviser',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'courseId' => array(
				'type' => 'number',
				'default' => 0
			),
			'lessonId' => array(
				'type' => 'number',
				'default' => 0
			),
			'courseTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'lessonTitle' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'infobox' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/infobox',
		'version' => '1.0.0',
		'title' => 'Infobox',
		'category' => 'text',
		'icon' => 'info-outline',
		'description' => 'Bloc d\'information avec différents styles.',
		'keywords' => array(
			'infobox',
			'alerte',
			'info',
			'attention',
			'conseil'
		),
		'attributes' => array(
			'type' => array(
				'type' => 'string',
				'default' => 'retenir'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'À retenir'
			),
			'content' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'lien-lecon' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/lien-lecon',
		'version' => '1.0.0',
		'title' => 'Lien Leçon',
		'category' => 'text',
		'icon' => 'welcome-learn-more',
		'description' => 'Affiche un lien vers une leçon Fluent Community.',
		'keywords' => array(
			'lien',
			'lecon',
			'cours',
			'fluent'
		),
		'attributes' => array(
			'courseId' => array(
				'type' => 'integer',
				'default' => 0
			),
			'courseName' => array(
				'type' => 'string',
				'default' => ''
			),
			'lessonId' => array(
				'type' => 'integer',
				'default' => 0
			),
			'lessonTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'lessonUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'sommaire' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/sommaire',
		'version' => '1.0.0',
		'title' => 'Sommaire',
		'category' => 'text',
		'icon' => 'list-view',
		'description' => 'Génère automatiquement un sommaire à partir des titres H2.',
		'keywords' => array(
			'sommaire',
			'table',
			'contents',
			'toc'
		),
		'attributes' => array(
			'headings' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'step-indicator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'jurible/step-indicator',
		'version' => '1.0.0',
		'title' => 'Step Indicator',
		'category' => 'widgets',
		'icon' => 'editor-ol',
		'description' => 'Indicateur d\'étapes pour les parcours.',
		'keywords' => array(
			'step',
			'etape',
			'progress',
			'indicator',
			'stepper'
		),
		'attributes' => array(
			'totalSteps' => array(
				'type' => 'number',
				'default' => 5
			),
			'currentStep' => array(
				'type' => 'number',
				'default' => 1
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => false
			),
			'labels' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'jurible-blocks-react',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
