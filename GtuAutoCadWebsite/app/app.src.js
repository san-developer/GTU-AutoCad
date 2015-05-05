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
