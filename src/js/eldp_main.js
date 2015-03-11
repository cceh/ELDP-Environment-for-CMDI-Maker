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


var eldp_environment = (function(){
	"use strict";

	var my = {};

	my.name = "eldp";
	my.id = "eldp";
	my.title = "ELDP";
	my.version = "1.6";
	my.min_cmdi_maker_version = "2.0.9";
	
	my.workflow = [];
	my.languages = [];
	
	my.not_allowed_chars = " !\"§$%&/\\()=?^°`´'#*+~<>[]{}|²³,.;:áÁäÄàÀéÉîöÖóÓòÒüÜúÚùÙ";
	
	my.l = function(arg1, arg2, arg3){
		return APP.getTermInActiveLanguage(my.languages, arg1, arg2, arg3);
	};
	
	my.metadataLanguageIDs = [
		["eng","English"],
		["ger", "German"],
		["spa","Spanish"],
		["fra","French"],
		["rus","Russian"],
		["ind","Indonesian"],
		["por","Portuguese"],
		["arb","Standard Arabic"]
	];
	
	my.init = function(){
	
		my.displayMetadataLanguages();
	
	};
	
	
	my.displayMetadataLanguages = function (){
	
		var select = g("metadata_language_select");
		dom.setSelectOptions(select, my.metadataLanguageIDs, 1, 0, false);

	};
	
	
	my.settings = function(){
		return [
			{
				
				title: my.l("settings", "calculate_persons_age"),
				description: my.l("settings", "calculate_persons_age_description"),
				type: "toggle",
				default_value: true,
				name: "radio_age_calc",
				id: "radio_age_calc"
			},
			{
				
				title: my.l("settings", "global_language_of_metadata"),
				type: "select",
				name: "metadata_language",
				id: "metadata_language_select"
			},
			{
				title: my.l("settings", "cmdi_metadata_creator"),
				description: my.l("settings", "cmdi_metadata_creator_description"),
				type: "text",
				name: "metadata_creator",
				id: "metadata_creator",
				value: "CMDI Maker User"
			},
			/*{
				title: "Export Actors as JSON",
				onclick: function (){actor.export_actors();},
				type: "link"
			},*/
			{
				title: "Repair broken CMP file",
				type: "file",
				file_input_id: "cmp_repair_input",
				file_input_name: "cmp_repair_input",
				onchange: function (event) {
				
					var file = event.target.files[0];
					console.log(file);
					
					var new_filename = strings.removeEndingFromFilename(file.name) + "_repaired.cmp";					
					
					readFileAsJSON(file, function(json){
						console.log(json);
						var fixed_json = my.repair(json);
						APP.saveTextfile(JSON.stringify(fixed_json, null, "\t"), new_filename, "application/json");
					});
				}
			}
		];
	};
	
	my.recall = function (settings){
		
		APP.GUI.setToggleValue(g("radio_age_calc"), settings.calc_actors_age);
		return;
	
	};
	
	my.getSaveData = function(){
	
		var object = {};

		object.calc_actors_age = g("radio_age_calc").on;
	
		return object;
	
	};
	
	
	my.reset = function(){
	
		return;
	
	};
	
	APP.environments.add(my);
	
	return my;
	
})();