var Builder={NODEMAP:{AREA:"map",CAPTION:"table",COL:"table",COLGROUP:"table",LEGEND:"fieldset",OPTGROUP:"select",OPTION:"select",PARAM:"object",TBODY:"table",TD:"table",TFOOT:"table",TH:"table",THEAD:"table",TR:"table"},node:function(elementName){elementName=elementName.toUpperCase();var parentTag=this.NODEMAP[elementName]||"div";var parentElement=document.createElement(parentTag);try{parentElement.innerHTML="<"+elementName+"></"+elementName+">";}catch(e){}var element=parentElement.firstChild||null;if(element&&(element.tagName!=elementName)){element=element.getElementsByTagName(elementName)[0];}if(!element){element=document.createElement(elementName);}if(!element){return;}if(arguments[1]){if(this._isStringOrNumber(arguments[1])||(arguments[1] instanceof Array)){this._children(element,arguments[1]);}else{var attrs=this._attributes(arguments[1]);if(attrs.length){try{parentElement.innerHTML="<"+elementName+" "+attrs+"></"+elementName+">";}catch(e){}element=parentElement.firstChild||null;if(!element){element=document.createElement(elementName);for(attr in arguments[1]){element[attr=="class"?"className":attr]=arguments[1][attr];}}if(element.tagName!=elementName){element=parentElement.getElementsByTagName(elementName)[0];}}}}if(arguments[2]){this._children(element,arguments[2]);}return element;},_text:function(text){return document.createTextNode(text);},_attributes:function(attributes){var attrs=[];for(attribute in attributes){attrs.push((attribute=="className"?"class":attribute)+'="'+attributes[attribute].toString().escapeHTML()+'"');}return attrs.join(" ");},_children:function(element,children){if(typeof children=="object"){children.flatten().each(function(e){if(typeof e=="object"){element.appendChild(e);}else{if(Builder._isStringOrNumber(e)){element.appendChild(Builder._text(e));}}});}else{if(Builder._isStringOrNumber(children)){element.appendChild(Builder._text(children));}}},_isStringOrNumber:function(param){return(typeof param=="string"||typeof param=="number");}};