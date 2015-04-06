'use strict';

angular
  .module('app', [
    'ui.router',
    'HomeConfigModule',
    'TeachersConfigModule',
    'AboutConfigModule',
    'AllCoursesConfigModule',
'PlanConfigModule',
'AutoCADConfigModule', 
'AutoCADMEPConfigModule', 
'RevitArchitectureConfigModule', 
'3dsMaxConfigModule', 
'InventorConfigModule', 
'AutodeskSketchbookPROConfigModule', 
'MayaConfigModule', 
'AutoCADCivil3DConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}).run(function ($rootScope) {
    $rootScope.Courses =
        [
            {
                Name: 'AutoCAD',
                Module: "AutoCAD",
                Description: 'AutoCAD 2015 - არის პროექტების შემუშავების უახლესი მძლავრი გარემო როგორც სიბრტყეზე ისე სივრცეში. გააჩნია საპროექტო დოკუმენტაციის შექმნის და ვიზუალიზაციის საშუალებები. აწარმოებს ინფორმაციის იოლ გაცვლას სხვა CAD/CAM/CAE სისტემებთან.',
                ProgramCount: 3
            },
            {
                Name: 'AutoCAD MEP',
                Module: "AutoCADMEP",
                Description: 'AutoCAD MEP აღწერა.',
                ProgramCount: 2,
            },
            {
                Name: 'Revit Architecture',
                Module: "RevitArchitecture",
                Description: 'Revit Architecture აღწერა',
                ProgramCount: 1
            },
            {
                Name: '3ds Max',
                Module: "3dsMax",
                Description: '3ds Max აღწერა.',
                ProgramCount: 2
            },
            {
                Name: 'Inventor',
                Module: "Inventor",
                Description: 'Inventor აღწერა.',
                ProgramCount: 1
            },
            {
                Name: 'Autodesk Sketchbook PRO',
                Module: "AutodeskSketchbookPRO",
                Description: 'Autodesk Sketchbook PRO აღწერა.',
                ProgramCount: 1
            },
            {
                Name: 'Maya',
                Module: "Maya",
                Description: 'Maya აღწერა.',
                ProgramCount: 2
            },
            {
                Name: 'AutoCAD Civil 3D',
                Module: "AutoCADCivil3D",
                Description: 'AutoCAD Civil 3D აღწერა.',
                ProgramCount: 1
            }
        ];
});

angular
  .module('AboutControllerModule', [])
  .controller("AboutController",  ['$scope', function($scope) {

    $scope.msg = "About";

  }]);
angular
  .module('AboutConfigModule',
  ['AboutControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('About', {
	    url : '/About',
	    templateUrl: 'app/components/About/About.html',
	    controller: 'AboutController'
	  })
});

angular
  .module('AllCoursesControllerModule', [])
  .controller("AllCoursesController",  ['$scope', function($scope) {

    $scope.msg = "AllCourses";

  }]);
angular
  .module('AllCoursesConfigModule',
  ['AllCoursesControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AllCourses', {
	    url : '/AllCourses',
	    templateUrl: 'app/components/AllCourses/AllCourses.html',
	    controller: 'AllCoursesController'
	  })
});

angular
  .module('AutoCADControllerModule', [])
  .controller("AutoCADController",  ['$scope', function($scope) {

    $scope.msg = "AutoCAD";

  }]);
angular
  .module('AutoCADConfigModule',
  ['AutoCADControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCAD', {
	    url : '/AutoCAD',
	    templateUrl: 'app/components/AutoCAD/AutoCAD.html',
	    controller: 'AutoCADController'
	  })
});

angular
  .module('3dsMaxControllerModule', [])
  .controller("3dsMaxController",  ['$scope', function($scope) {

    $scope.msg = "3dsMax";

  }]);
angular
  .module('3dsMaxConfigModule',
  ['3dsMaxControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('3dsMax', {
	    url : '/3dsMax',
	    templateUrl: 'app/components/3dsMax/3dsMax.html',
	    controller: '3dsMaxController'
	  })
});

angular
  .module('AutoCADCivil3DControllerModule', [])
  .controller("AutoCADCivil3DController",  ['$scope', function($scope) {

    $scope.msg = "AutoCADCivil3D";

  }]);
angular
  .module('AutoCADCivil3DConfigModule',
  ['AutoCADCivil3DControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCADCivil3D', {
	    url : '/AutoCADCivil3D',
	    templateUrl: 'app/components/AutoCADCivil3D/AutoCADCivil3D.html',
	    controller: 'AutoCADCivil3DController'
	  })
});

angular
  .module('AutoCADMEPControllerModule', [])
  .controller("AutoCADMEPController",  ['$scope', function($scope) {

    $scope.msg = "AutoCADMEP";

  }]);
angular
  .module('AutoCADMEPConfigModule',
  ['AutoCADMEPControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCADMEP', {
	    url : '/AutoCADMEP',
	    templateUrl: 'app/components/AutoCADMEP/AutoCADMEP.html',
	    controller: 'AutoCADMEPController'
	  })
});

angular
  .module('AutodeskSketchbookPROControllerModule', [])
  .controller("AutodeskSketchbookPROController",  ['$scope', function($scope) {

    $scope.msg = "AutodeskSketchbookPRO";

  }]);
angular
  .module('AutodeskSketchbookPROConfigModule',
  ['AutodeskSketchbookPROControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutodeskSketchbookPRO', {
	    url : '/AutodeskSketchbookPRO',
	    templateUrl: 'app/components/AutodeskSketchbookPRO/AutodeskSketchbookPRO.html',
	    controller: 'AutodeskSketchbookPROController'
	  })
});

angular
  .module('HomeControllerModule', [])
  .controller("HomeController", ['$scope', function ($scope) {

  }]);
angular
  .module('HomeConfigModule',
  ['HomeControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Home', {
    url : '/',
    templateUrl: 'app/components/Home/Home.html',
    controller: 'HomeController'
  })
});

angular
  .module('InventorControllerModule', [])
  .controller("InventorController",  ['$scope', function($scope) {

    $scope.msg = "Inventor";

  }]);
angular
  .module('InventorConfigModule',
  ['InventorControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Inventor', {
	    url : '/Inventor',
	    templateUrl: 'app/components/Inventor/Inventor.html',
	    controller: 'InventorController'
	  })
});

angular
  .module('MayaControllerModule', [])
  .controller("MayaController",  ['$scope', function($scope) {

    $scope.msg = "Maya";

  }]);
angular
  .module('MayaConfigModule',
  ['MayaControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Maya', {
	    url : '/Maya',
	    templateUrl: 'app/components/Maya/Maya.html',
	    controller: 'MayaController'
	  })
});

angular
  .module('PlanControllerModule', [])
  .controller("PlanController",  ['$scope', function($scope) {

    $scope.msg = "Plan";

  }]);
angular
  .module('PlanConfigModule',
  ['PlanControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Plan', {
	    url : '/Plan',
	    templateUrl: 'app/components/Plan/Plan.html',
	    controller: 'PlanController'
	  })
});

angular
  .module('RevitArchitectureControllerModule', [])
  .controller("RevitArchitectureController",  ['$scope', function($scope) {

    $scope.msg = "RevitArchitecture";

  }]);
angular
  .module('RevitArchitectureConfigModule',
  ['RevitArchitectureControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('RevitArchitecture', {
	    url : '/RevitArchitecture',
	    templateUrl: 'app/components/RevitArchitecture/RevitArchitecture.html',
	    controller: 'RevitArchitectureController'
	  })
});

angular
  .module('TeachersControllerModule', [])
  .controller("TeachersController",  ['$scope', function($scope) {

    $scope.msg = "Teachers";

  }]);
angular
  .module('TeachersConfigModule',
  ['TeachersControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Teachers', {
	    url : '/Teachers',
	    templateUrl: 'app/components/Teachers/Teachers.html',
	    controller: 'TeachersController'
	  })
});
