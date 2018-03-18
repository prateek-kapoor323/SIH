//Angular Module

var divergents = angular.module('divergents', ['ngRoute',
												'ui.grid',
											    'ui.grid.edit',
											    'ui.grid.cellNav',
											    'ui.grid.autoResize',
											    'ui.bootstrap',
											    'ui.grid.pagination']);

// Configuration

divergents.config(function($routeProvider, $httpProvider) {
	
	$routeProvider.when('/', {
	    templateUrl : 'publicUser.html',

	})
	$routeProvider.when('/trainingPartnerHome', {
	    templateUrl : 'trainingPartnerHomepage.html',

	})
	.when('/nsdcAdmin', {
        templateUrl : 'nsdcAdmin.html',
        
	})
	.otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

});