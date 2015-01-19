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
			comment: "Any of the languages that are used in the bundle, either while the recordings were made or in the transcription, translation and annotation.",
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
			comment: "This lists all the people that are involved in creating the material in the bundle and the role that each person had: the speakers, the researchers, the transcribers, the technicians and so on. If a person had more than one role, add the same person again and add the additional role until all the roles that the person had are listed.",
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
					name: "access_restrictions",
					comment: "WARNING: Please do not write any confidential content in this category. All information in this category will be openly accessible. Keywords that indicate if and why a recording, photograph, annotation or other file should have specific restrictions on access, for example women's language, sacred language, gossip, conflict, threat to life or any other category that applies to your data.",
				},
				{
					heading: "Conditions of Access",
					type: "textarea",
					name: "access_conditions",
					comment: "WARNING: Please do not write any confidential content in this category. All information in this category will be openly accessible. If possible, this category describes in more detail why a certain file cannot be accessed and if and when the file will become accessible. For example, people in a community might disagree over the oral history, rulership and lineage and it has been agreed with the community as part of the ethics and access negotiations any recordings that refer to these have to be closed so as not to add to conflict in the community, and the material will only become accessible after the conflict has been resolved and members of the community have given permission for this data to become openly accessible."
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
					comment: "The title of a person, e.g. Dr (Mrs), Chief, Ms, Reverend, ..."
				},    
				{
					heading: "Name (known as)",
					name: "nameKnownAs",
					type: "text",
					comment: "The name that a person is known as or addressed as in the community. For example, a woman may be referred to as Iya Rose (Mother of Rose) or a person may have a widely used nickname in the community such as Oyinbo (White Person).",
				},
   				{
					heading: "Name (Full Name)",
					name: "fullName",
					type: "text",
					comment: "The official full name of a person, for example Dada Samuel Aminu or Mikhail Sergeyevich Gorbachev."
				},
   				{
					heading: "Name (Sort By)",
					name: "nameSortBy",
					type: "text",
					comment: "The part of the name by which official records would be sorted, for example the surname of a person."
				},
				{
					heading: "Code",
					name: "code",
					type: "text",
					comment: "A unique code that is used to refer to persons, for example 93 or AO."
				},
				{
					heading: "Birth Year",
					name: "birth_year",
					type: "year",
					comment: "The year in which a person was born. If the exact year is not known, you can give an approximate year and add a comment under the category “Additional Information (Person)” stating that the birth year is approximate.",
				},
   				{
					heading: "Death Year",
					name: "death_year",
					type: "year",
					comment: "The year in which a person passed away.",
				},
   				{
					heading: "Gender",
					name: "gender",
					type: "select",
					vocabulary: ["Unknown","Unspecified","Female","Male"],
					default_value: "Unspecified",
					comment: "The gender of a person."
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
					comment: "The ethnic group to which a person belongs. Please enter all the ethnicities that a person identifies with. This is not always easy to say because people may think of themselves as belonging to more than one ethnic group, or another person might think of this person as belonging to more than one ethnic group. For example, a child of German and Greek parents brought up in London may identify with three identities: German, Greek and British."
				},
				{
					heading: "Additional Information (Ethnicity)",
					name: "ethnicity_additional_info",
					type: "textarea",
					comment: "Additional information about a person's ethnicity or ethnicities. For people with more than one ethnic affiliation, explain how these various ethnic affiliations come about.",
				},
   				{
					heading: "Nationalities",
					name: "nationality",
					type: "textarea",  //multiple values
					comment: "The nationality/nationalities that a person holds, that is, for the citizenship in a state. Please enter all the nationalities that a person holds."
				},
				{
					heading: "Additional Information (Nationality)",
					name: "nationality_additional_info",
					type: "textarea",
					comment: "Additional information about the person's nationality. Sometimes nationalities are not easy to determine, or there is a relevant history to the acquisition of the nationalities. If this should be part of the record for this person, this information can be added here."
				},

			]
		},	
		{
			type: "column",
			fields: [
   				{
					heading: "Education",
					name: "education",
					type: "text",
					comment: "Brief description of the person's highest level of educational attainment. For example, some people never went to any formal school, others went to literacy classes, Koranic school, primary school, or graduated with a BA or doctoral title from university.",
				},
				{
					heading: "Biographical Note",
					name: "biographical_note",
					type: "textarea",
					comment: "General life background to a person to explain which languages a person was exposed to, at what ages, in which contexts, and so on. This helps to understand the linguistic history of a person and to better understand how and why a person may speak the way he or she does.",
				},
				{
					heading: "Additional Information (Person)",
					name: "person_additional_information",
					type: "textarea",
					comment: "Any additional information about the person that is considered relevant for the metadata record for the person but that does not fit into any of the other categories."
					
				},
				{
					heading: "Anonymized",
					name: "anonymized",
					type: "check",
					comment: "Please tick this box to indicate that you have anonymized the metadata for the person.\nWARNING: Ticking the box does not automatically anonymize the data. It only indicates to the reader that you yourself have anonymized the data." 
				}
			]
		},	
		{
			title: "Languages",
			name: "languages",
			type: "column",
			comment: "This category is used to list all the languages a person speaks, understands or identifies with."+ 
				"Often, speakers of endangered languages speak various languages with different degrees of competence, understand languages that they do not actively speak, or identify with the language of their community even though they themselves do not speak it. For example, young ethnic Akaan people in Ikakumo may speak Yoruba natively, speak English a bit because they speak it in school, understand Ebira because their school friends use it, and may say that Ikaan is their language because it is the language of the community even though they themselves are not able to speak it. In such as case, enter all the languages (Yoruba, English, Ebira and Ikaan) for this person.",
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