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
'AutoCADCivil3DConfigModule', 
'ApplyConfigModule', ]).config(function ($stateProvider, $urlRouterProvider) {
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

    $rootScope.groupedCourses = _.groupBy($rootScope.Courses, function (item, index) {
        return Math.floor(index / 3);
    });
});
