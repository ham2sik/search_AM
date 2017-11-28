function getClickHandler(info, tab){
	chrome.tabs.create({
		"url":"http://www.albamon.com/search?Keyword=" + encodeURIComponent(info.selectionText)
	});
}
﻿
chrome.contextMenus.create({
    "title": "albamon에서 '%s' 검색",
    "contexts": ["selection"],
    "onclick": getClickHandler
});
