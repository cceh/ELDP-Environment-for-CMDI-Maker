/*
Copyright 2014 Sebastian Zimmer

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


eldp_environment.bundle_form = {

	title: "eldp-form",
	type: "form",
	fields: [
		{
			title: "Bundle",
			name: "bundle",
			type: "column",
			fields: [
				{
					heading: "Title",
					name: "title",
					type: "text",
					comment: "The title of the bundle without any abbreviations, for example Farm walk with Grace Adeola.",
				},
				{
					heading: "ID",
					name: "id_element",
					type: "text",
					comment: "The unique identifier of the bundle, for example the beginning of the file name such as ikaan123 or uruan_dirges234.",
				},
				{
					heading: "Date",
					name: "date",
					type: "date",
					comment: "The date when the primary resource in the bundle was create, for example when audio or video recordings were made or photographs were taken.",
				},	
				{
					heading: "Description",
					name: "description",
					type: "textarea",
					comment: "A description of the recordings, the set of photographs, annotation or other types of resources in the bundle. This description should be a reader-friendly text that someone could read in order to understand what was recorded in what situation for what purpose with whom, or what was annotated in which languages with which level of detail.", 
				},
				{
					heading: "Additional Information of Bundle",
					name: "additional_information",
					type: "textarea",
					comment: "Any additional information about the bundle that is considered relevant for the metadata record but that does not fit into any of the other categories."
				},
				{
					heading: "Location",
					name: "location",
					type: "subarea",
					fields: [
						{
							heading: "Name",
							name: "name",
							type: "text",
							comment: "The name of the location where a recording was made or a photo was taken, for example the town or village such as Ikakumo.",
						},
						{
							heading: "Continent",
							name: "continent",
							type: "select",
							size: 1,
							vocabulary: ["Unknown","Unspecified","Africa","Asia","Europe","Australia","Oceania","North-America","Middle-America","South-America"],
							default_value: "Unspecified",
							comment: "The name of the continent where a recording was made or a photo was taken, for example Africa.",
						},					
						{
							heading: "Country",
							name: "country",
							type: "text",
							comment: "The name of the country where a recording was made or a photo was taken, for example Nigeria.",
						},
						{
							heading: "Region",
							name: "region",
							type: "text",
							comment: "The name of the region, state, or administrative area where a recording was made or a photo was taken, for example Ondo State.",
						}
					]
				},
			]
		},
		{
			title: "Content",
			name: "content",
			type: "column",
			comment: "The content group is used to describe the content of the " + "bundle. This is done using four dimensions (communication context, " + "genre, task and modalities).",
			fields: [
				{
					heading: "Genre",
					name: "genre",
					type: "open_vocabulary",
					size: 1,
					vocabulary: [
						"Unknown", "Unspecified", "Conversation", "Description",
						"Dictionary", "Discourse", "Elicitation", "Explanation",
						"Folktale", "Historical narrative", "Interview", "Metadata",
						"Narrative", "Procedural narrative", "Questionnaire", 
						"Ritual/religious", "Song", "Speech", "Stimuli", "Wordlist"
					],
					comment: "The genre of a recording, for example, a narrative, a song, an elicitation, …"
				},
				{
					heading: "Keywords",
					type: "textarea",
					name: "keywords",
					comment: "Terms that describe the content of the bundle in keywords, for example subject agreement, vowel harmony, pottery, children's language, farm walks, or any other useful term. You can also use this category to group related recordings or topics together, for example a series of recordings of farm walks with different people with the keyword farm walks."+
						"Separate keywords by entering each new keyword in a new line in this cell."
				},
				{
					heading: "Recording Equipment",
					name: "recording_equipment",
					type: "textarea",
					comment: "A list of equipment used to create the recordings. Separate keywords by entering each new keyword in a new line in this cell."
				},
				{
					heading: "Recording Conditions",
					name: "recording_conditions",
					type: "textarea",
					comment: "Information about the recording conditions, for example noise that occurred, or the arrangement in which people were seated."
				},
			]
		},
		{
			title: "Languages",
			name: "languages",
			type: "column",
			comment: "Any of the languages that are used in the bundle, either while the recordings were made or in the transcription, translation and annotation."
			fields: [
				{
					name: "bundle_languages",
					type: "special",
					object_structure: "array"
				}
			]
		},
		{
			title: "Persons",
			type: "column",
			name: "persons",
			fields: [
				/*{
					heading: "Description of Persons",
					type: "textarea",
					comment: "Note that this description concerns all Persons and should be used to describe interactions and interrelations between Persons.",
					name: "description",
				},*/
				{
					type: "special",
					name: "persons",
					object_structure: "array"
				}
			]
		},
		{
			title: "Objects",
			name: "resources",
			type: "column",
			fields: [
				{
					type: "special",
					name: "resources",
					object_structure: "array"
				},
				{
					heading: "Restrictions of Access",
					type: "textarea",
					name: "access_restrictions"
				},
				{
					heading: "Conditions of Access",
					type: "textarea",
					name: "access_conditions"
				},
			]
		}
	],
	fields_to_copy: [ 
	//fields_to_copy is important for the function "Copy bundle 1 metadata to all bundle" so that it knows, what can be copied 
	
		{
			name: "date",
			label: "Date",
			fields: ["bundle_date"]
		},
		{
			name: "location",
			label: "Location",
			fields: ["bundle_location"]
		},
		{
			name: "content",
			label: "Content",
			fields: ["content"]
		},
		{
			name: "persons",
			label: "Persons",
			fields: ["persons_description"]
			//since type of field actors is "special", there will be other stuff going on as well here!
		},
		{
			name: "languages",
			label: "Languages",
			fields: []
		},
		{
			name: "restrictions_conditions_of_access",
			label: "Restrictions/Conditions Of Access",
			fields: ["resources_access_restrictions", "resources_access_conditions"]
		},		
	]
};


eldp_environment.person_form = {

	title: "eldp-actors",
	type: "form",
	fields: [
		{
			type: "column",
			fields: [
				{
					heading: "Title",
					name: "title",
					type: "text",
				},    
				{
					heading: "Name (known as)",
					name: "nameKnownAs",
					type: "text",
				},
   				{
					heading: "Name (Full Name)",
					name: "fullName",
					type: "text",
				},
   				{
					heading: "Name (Sort By)",
					name: "nameSortBy",
					type: "text",
				},
				{
					heading: "Code",
					name: "code",
					type: "text",
					comment: "Short unique code to identify the actor as used in the transcription"
				},
				{
					heading: "Birth Year",
					name: "birth_year",
					type: "year",
				},
   				{
					heading: "Death Year",
					name: "death_year",
					type: "year"
				},
   				{
					heading: "Gender",
					name: "gender",
					type: "select",
					vocabulary: ["Unknown","Unspecified","Female","Male"],
					default_value: "Unspecified"
				},
				/*,  //Role gets specified in bundle
				{
					heading: "Role",
					name: "role",
					type: "open_vocabulary",
					vocabulary: [
						"annotator","author","compiler","consultant","data_inputter","depositor",
						"developer","editor","illustrator","interpreter","interviewee","interviewer",
						"participant","performer","photographer","recorder","researcher","research_participant",
						"responder","signer","singer","speaker","sponsor","transcriber","translator"
					],
					default_value: "Unspecified",
					comment: "Functional role of the actor e.g. consultant, contributor, interviewer, researcher, publisher, collector, translator"
				},*/   
			]
		},
		{
			title: "",
			name: "",
			type: "column",
			fields: [
				{
					heading: "Ethnicities",
					name: "ethnicity",
					type: "textarea",  //multiple values
				},
				{
					heading: "Additional Information (Ethnicity)",
					name: "ethnicity_additional_info",
					type: "textarea"
				},
   				{
					heading: "Nationalities",
					name: "nationality",
					type: "textarea",  //multiple values
				},
				{
					heading: "Additional Information (Nationality)",
					name: "nationality_additional_info",
					type: "textarea"
				},

			]
		},	
		{
			type: "column",
			fields: [
   				{
					heading: "Education",
					name: "education",
					type: "text"
				},
				{
					heading: "Biographical Note",
					name: "biographical_note",
					type: "textarea",
				},
				{
					heading: "Additional Information (Person)",
					name: "person_additional_information",
					type: "textarea"
				},
				{
					heading: "Anonymized",
					name: "anonymized",
					type: "check",
					comment: "Indicates if real names or anonymized codes are used to identify the actor"
				}
			]
		},	
		{
			title: "Languages",
			name: "languages",
			type: "column",
			fields: [
				{
					heading: "Actor Languages",
					name: "actor_languages",
					type: "special",
					object_structure: "array"
				}
			]
		}
	]
};