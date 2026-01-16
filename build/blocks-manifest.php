<?php
// This file is generated. Do not modify it manually.
return array(
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
	)
);
