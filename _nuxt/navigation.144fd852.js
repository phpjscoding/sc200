import{_ as i}from"./entry.b765b060.js";import{h as r,j as s}from"./query.06cfdcfc.js";import{w as p,s as f,u as m}from"./utils.f8939d9e.js";const _=async e=>{let t=e;typeof(t==null?void 0:t.params)=="function"&&(t=t.params());const o=p(t?`/navigation/${r(t)}.json`:"/navigation");if(f())return(await i(()=>import("./client-db.76823b2a.js"),["client-db.76823b2a.js","entry.b765b060.js","entry.81dba8ab.css","utils.f8939d9e.js","query.06cfdcfc.js"],import.meta.url).then(n=>n.generateNavigation))(t||{});const a=await $fetch(o,{method:"GET",responseType:"json",params:{_params:s(t||{}),previewToken:m("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};export{_ as f};
