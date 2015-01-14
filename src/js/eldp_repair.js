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


eldp_environment.repair = function (broken_json){
	'use strict';

	var fixed_json = broken_json;
	
	forEach(fixed_json.environments.eldp.resources, function(res, i){
	
		res.id = i;
		res.status = (res.stable ? "stable" : "in-progress");
		
	});	
	
	forEach(fixed_json.environments.eldp.bundle.bundles, function(bun, i){
	
		bun.bundle.location.name = bun.bundle.location.region;
		
		forEach(bun.resources.resources, function(res){
		
			res.resource_id = res.resource_file_index;
		
		});
		
	});
	
	forEach(fixed_json.environments.eldp.persons.persons, function(pers){
	
		if (Array.isArray(pers.languages)){
			var buffer = pers.languages;
			pers.languages = {};
			pers.languages.actor_languages = buffer;
			log("corrected location of person languages");
		}
	
		if (typeof pers.languages.actor_languages == "undefined"){
			pers.languages.actor_languages = [];
			log("person languages undefined! turning it into an empty array");
		}
	
	});
	
	return fixed_json;
	
};