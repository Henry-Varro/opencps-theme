AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction', 'liferay-sign-in-modal',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('#breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}

		var signIn = A.one('li.sign-in a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}
	}
);



//Add Text Sitemap Homepage
$('<span>tài khoản doanh nghiệp</span>').appendTo('.home-theme #column-2 .sitemap-class li:nth-child(1) a');
$('<span>với tài khoản được cấp</span>').appendTo('.home-theme #column-2 .sitemap-class li:nth-child(2) a');
$('<span>nộp hồ sơ trực tuyến</span>').appendTo('.home-theme #column-2 .sitemap-class li:nth-child(3) a');
$('<span>phí, lệ phí</span>').appendTo('.home-theme #column-2 .sitemap-class li:nth-child(4) a');
$('<span>hồ sơ trả về</span>').appendTo('.home-theme #column-2 .sitemap-class li:nth-child(5) a');



//Paginator
$('.pager li:first-child a').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
$('.pager li:last-child a').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');



//Set height Portlet_114 Homepage
$('.portlet-boundary_114_WAR_opencpsnotificationportlet_').height($('.portlet-boundary_114_WAR_opencpsnotificationportlet_ > .opencps-searchcontainer-wrapper').outerHeight(true));