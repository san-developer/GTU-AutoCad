'use strict';

angular
  .module('app', [
    'ui.router',
    'firebase',
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
'AutoCADCivil3DConfigModule',
'ApplyConfigModule',
'2DDrowingConfigModule',
'2DModellingVisualisationConfigModule',
'CADConfigModule',
'ProjectBuildingConfigModule',
'3DProjectingConfigModule', 
'InfrastructureProjectingConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}).run(function ($rootScope) {

    $rootScope.Courses =
        [
            {
                Id: 1,
                Name: 'AutoCAD',
                Module: "AutoCAD",
                Description: 'AutoCAD 2015 - არის პროექტების შემუშავების უახლესი მძლავრი გარემო როგორც სიბრტყეზე ისე სივრცეში. გააჩნია საპროექტო დოკუმენტაციის შექმნის და ვიზუალიზაციის საშუალებები. აწარმოებს ინფორმაციის იოლ გაცვლას სხვა CAD/CAM/CAE სისტემებთან.',
                ProgramCount: 3,
                Programs: [{ Id: 1, Name: "Autodesk AutoCAD. დაპროექტების საფუძვლები. 2D ხაზვა", Description: "აღწერა", Module: "2DDrowing" },
                           { Id: 2, Name: "Autodesk AutoCAD. 3D -მოდელირება და ვიზუალიზაცია", Description: "აღწერა", Module: "2DModellingVisualisation" },
                           { Id: 3, Name: "ხაზვა. საბაზო კურსი CAD-სისტემების მომხმარებლებისათვის", Description: "აღწერა", Module: "CAD" }]
            },
            {
                Id: 2,
                Name: 'AutoCAD MEP',
                Module: "AutoCADMEP",
                Description: 'AutoCAD MEP აღწერა.',
                ProgramCount: 2,
                Programs: [{ Id: 4, Name: "Autodesk AutoCAD MEP.  შენობების საინჟინრო სისტემების დაპროექტება", Description: "აღწერა", Module: "" },
                           { Id: 5, Name: "Autodesk Revit MEP. შენობების საინჟინრო სისტემების დაპროექტება", Description: "აღწერა", Module: "" }]
            },
            {
                Id: 3,
                Name: 'Revit Architecture',
                Module: "RevitArchitecture",
                Description: 'Revit Architecture აღწერა',
                ProgramCount: 1,
                Programs: [{ Id: 6, Name: "Autodesk Revit Architecture. სამშენებლო ობიექტების დაპროექტება", Description: "აღწერა", Module: "ProjectBuilding" }]
            },
            {
                Id: 4,
                Name: '3ds Max',
                Module: "3dsMax",
                Description: '3ds Max აღწერა.',
                ProgramCount: 2,
                Programs: [{ Id: 7, Name: "Autodesk 3ds Max.  3D-მოდელირების საფუძვლები", Description: "აღწერა" },
                           { Id: 8, Name: "Autodesk 3ds Max.  მასალების შექმნა და განათება ", Description: "აღწერა" }]

            },
            {
                Id: 5,
                Name: 'Inventor',
                Module: "Inventor",
                Description: 'Inventor აღწერა.',
                ProgramCount: 1,
                Programs: [{ Id: 9, Name: "Autodesk Inventor. სამანქანათმშენებლო 3D - დაპროექტება", Description: "აღწერა", Module: "3DProjecting" }]
            },
            {
                Id: 6,
                Name: 'Autodesk Sketchbook PRO',
                Module: "AutodeskSketchbookPRO",
                Description: 'Autodesk Sketchbook PRO აღწერა.',
                ProgramCount: 1,
                Programs: [{ Id: 10, Name: "Autodesk Sketchbook PRO. სკეტჩინგი IPad - ზე", Description: "აღწერა" }]
            },
            {
                Id: 7,
                Name: 'Maya',
                Module: "Maya",
                Description: 'Maya აღწერა.',
                ProgramCount: 2,
                Programs: [{ Id: 11, Name: "Autodesk Maya.   მოდელირება და ანიმაცია", Description: "აღწერა" },
                           { Id: 12, Name: "Autodesk Maya. ობიექტქბის ვიზუალიზაცია Mental ray-ში", Description: "აღწერა" }]
            },
            {
                Id: 8,
                Name: 'AutoCAD Civil 3D',
                Module: "AutoCADCivil3D",
                Description: 'AutoCAD Civil 3D აღწერა.',
                ProgramCount: 1,
                Programs: [{ Id: 13, Name: "Autodesk AutoCAD Civil 3D. ინფრასტრუქტურის ობიექტების დაპროექტება", Description: "აღწერა", Module: "InfrastructureProjecting" }]
            }
        ];

    $rootScope.groupedCourses = _.groupBy($rootScope.Courses, function (item, index) {
        return Math.floor(index / 3);
    });
});

angular
  .module('AutoCADCivil3DConfigModule',
  ['AutoCADCivil3DControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('AutoCADCivil3D', {
	      url: '/AutoCADCivil3D',
	    templateUrl: 'app/components/AutoCADCivil3D/AutoCADCivil3D.html',
	    controller: 'AutoCADCivil3DController'
	  })
});

angular
  .module('AutoCADCivil3DControllerModule', [])
  .controller("AutoCADCivil3DController",  ['$scope', function($scope) {

    $scope.msg = "AutoCADCivil3D";

  }]);
angular
  .module('3dsMaxControllerModule', [])
  .controller("3dsMaxController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[3];

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
  .module('AboutControllerModule', [])
  .controller("AboutController",  ['$scope', function($scope) {

    $scope.msg = "About";

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
  .module('AllCoursesControllerModule', [])
  .controller("AllCoursesController",  ['$scope', function($scope) {

    $scope.msg = "AllCourses";

  }]);
angular
  .module('ApplyConfigModule',
  ['ApplyControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('Apply', {
	    url : '/Apply',
	    templateUrl: 'app/components/Apply/Apply.html',
	    controller: 'ApplyController'
	  })
});

angular
  .module('ApplyControllerModule', [])
  .controller("ApplyController", ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

      var ref = new Firebase("https://gtu-autodesk.firebaseio.com/students");
      $scope.students = $firebaseArray(ref);

      $scope.addStudent = function () {
          $scope.students.$add($scope.newStudent);
      };

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
  .module('AutoCADControllerModule', [])
  .controller("AutoCADController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0];

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
  .module('AutoCADCivil3DControllerModule', [])
  .controller("AutoCADCivil3DController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[7];

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
  .module('AutoCADMEPControllerModule', [])
  .controller("AutoCADMEPController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[1];

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
  .module('AutodeskSketchbookPROControllerModule', [])
  .controller("AutodeskSketchbookPROController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[5];

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
  .module('HomeControllerModule', [])
  .controller("HomeController", ['$scope', function ($scope) {

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
  .module('InventorControllerModule', [])
  .controller("InventorController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[4];

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
  .module('MayaControllerModule', [])
  .controller("MayaController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[6];

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
  .module('PlanControllerModule', [])
  .controller("PlanController",  ['$scope', function($scope) {

    $scope.msg = "Plan";

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
  .module('RevitArchitectureControllerModule', [])
  .controller("RevitArchitectureController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[2];

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

angular
  .module('TeachersControllerModule', [])
  .controller("TeachersController",  ['$scope', function($scope) {

    $scope.msg = "Teachers";

  }]);
angular
  .module('2DDrowingControllerModule', [])
  .controller("2DDrowingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);
angular
  .module('2DDrowingConfigModule',
  ['2DDrowingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('2DDrowing', {
	      url: '/AutoCAD/2DDrowing',
	    templateUrl: 'app/components/AutoCAD/2DDrowing/2DDrowing.html',
	    controller: '2DDrowingController'
	  })
});

angular
  .module('2DModellingVisualisationControllerModule', [])
  .controller("2DModellingVisualisationController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);
angular
  .module('2DModellingVisualisationConfigModule',
  ['2DModellingVisualisationControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('2DModellingVisualisation', {
	      url: '/AutoCAD/2DModellingVisualisation',
	    templateUrl: 'app/components/AutoCAD/2DModellingVisualisation/2DModellingVisualisation.html',
	    controller: '2DModellingVisualisationController'
	  })
});

angular
  .module('CADConfigModule',
  ['CADControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('CAD', {
	      url: '/AutoCAD/CAD',
	    templateUrl: 'app/components/AutoCAD/CAD/CAD.html',
	    controller: 'CADController'
	  })
});

angular
  .module('CADControllerModule', [])
  .controller("CADController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[0].Programs;

  }]);
angular
  .module('InfrastructureProjectingConfigModule',
  ['InfrastructureProjectingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('InfrastructureProjecting', {
	      url: '/AutoCADCivil3D/InfrastructureProjecting',
	    templateUrl: 'app/components/AutoCADCivil3D/InfrastructureProjecting/InfrastructureProjecting.html',
	    controller: 'InfrastructureProjectingController'
	  })
});

angular
  .module('InfrastructureProjectingControllerModule', [])
  .controller("InfrastructureProjectingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[7].Programs;

  }]);
angular
  .module('3DProjectingControllerModule', [])
  .controller("3DProjectingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[4].Programs;

  }]);
angular
  .module('3DProjectingConfigModule',
  ['3DProjectingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('3DProjecting', {
	      url: '/Inventor/3DProjecting',
	    templateUrl: 'app/components/Inventor/3DProjecting/3DProjecting.html',
	    controller: '3DProjectingController'
	  })
});

angular
  .module('ProjectBuildingConfigModule',
  ['ProjectBuildingControllerModule'])
  .config(function ($stateProvider, $urlRouterProvider) {
	 $stateProvider
	  .state('ProjectBuilding', {
	      url: '/RevitArchitecture/ProjectBuilding',
	    templateUrl: 'app/components/RevitArchitecture/ProjectBuilding/ProjectBuilding.html',
	    controller: 'ProjectBuildingController'
	  })
});

angular
  .module('ProjectBuildingControllerModule', [])
  .controller("ProjectBuildingController", ['$scope', '$rootScope', function ($scope, $rootScope) {

      $scope.Model = $rootScope.Courses[2].Programs;

  }]);