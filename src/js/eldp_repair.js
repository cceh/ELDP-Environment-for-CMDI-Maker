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

	var buffer;
	var fixed_json = broken_json;
	
	forEach(fixed_json.environments.eldp.resources, function(res, i){
	
		res.id = i;
		res.status = (res.stable ? "stable" : "in-progress");
		
	});	
	
	
	if (Array.isArray(fixed_json.environments.eldp.resources)){
		fixed_json.environments.eldp.resources = (new ObjectList(fixed_json.environments.eldp.resources)).getState();
		log("eldp.resources was array. turned it into ObjectList");
	}
	
	
	if (Array.isArray(fixed_json.environments.eldp.persons.persons)){
	
		forEach(fixed_json.environments.eldp.persons.persons, function(pers, i){
		
			if (Array.isArray(pers.languages)){
				buffer = pers.languages;
				pers.languages = {};
				pers.languages.actor_languages = buffer;
				log("corrected location of person languages");
			}
		
			if (typeof pers.languages.actor_languages == "undefined"){
				pers.languages.actor_languages = [];
				log("person languages undefined! turning it into an empty array");
			}
			
			if (pers.sex){
				pers.gender = pers.sex;
			}
			
			pers.old_id = pers.id;
		
		});
		
		fixed_json.environments.eldp.persons.persons = (new ObjectList(fixed_json.environments.eldp.persons.persons)).getState();
		log("eldp.persons.persons was array. turned it into ObjectList");
		
	}
	

	if (Array.isArray(fixed_json.environments.eldp.bundle)){
		
		buffer = fixed_json.environments.eldp.bundle;
		
		fixed_json.environments.eldp.bundle = {};
		
		fixed_json.environments.eldp.bundle.bundles = buffer;
		
		log("bundles array was at wrong position. corrected!");
		
	}
	
	
	var getPersonIDByOldID = function(old_id){
	
		for (var i = 0; i < fixed_json.environments.eldp.persons.persons.list.length; i++){
		
			if (fixed_json.environments.eldp.persons.persons.list[i].old_id == old_id){
			
				var new_id = fixed_json.environments.eldp.persons.persons.list[i].id;
			
				log("mapped old person id to id. old=" + old_id + ", new=" + new_id);
			
				return new_id;
			}			
		
		}
		
		return -1;
	
	};
	
	
	if (Array.isArray(fixed_json.environments.eldp.bundle.bundles)){
		
		forEach(fixed_json.environments.eldp.bundle.bundles, function(bun, i){
		
			bun.bundle.location.name = bun.bundle.location.region;
			
			forEach(bun.resources.resources, function(res){
			
				res.resource_id = res.resource_file_index;
			
			});
			
			
			if (bun.content.languages){
				bun.languages = bun.content.languages;
			}
			
			forEach(bun.persons.persons, function(pers){
				
				if (pers.person_id){
					pers.person_id = getPersonIDByOldID(pers.person_id);
				}
				
				else {
					pers.person_id = getPersonIDByOldID(pers.id);
				}
			
			});
			
			log("corrected bundle");
			
		});
		
		fixed_json.environments.eldp.bundle.bundles = (new ObjectList(fixed_json.environments.eldp.bundle.bundles)).getState();
		log("eldp.bundle.bundles was array. turned it into ObjectList");
		
	}
	
	return fixed_json;
	
};