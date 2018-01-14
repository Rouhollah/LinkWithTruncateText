 
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    // $scope.number=20;
    $scope.text="By listening to this event, you can remove event listeners that might cause memory leaks."+
    " Listeners registered to scopes and elements are automatically cleaned up when they are destroyed,"+
    " but if you registered a listener on a service, or registered a listener on a DOM node that isn't being deleted,"+
    " you'll have to clean it up yourself or you risk introducing a memory leak.";
    $scope.text2="این همه درد سر فایده نداره دیگه تو ، تو دلم جایی نداری";
});

app.directive("drTruncateLink", function() {
    return {
        restrict : "E",
        scope:{
            link:'@link',
            id:'@id',
            class:'@class',
            text:'=text',
            number:'@number',
        },
        templateUrl : "directive/TruncateLink.html",
        link:function(scope,element,attr){
            var res = scope.text.substring( scope.number, scope.text.length);
            var tr=scope.text.replace(res,"...");
            document.getElementById(scope.id).remove();
            var tagA=document.createElement("a");
            tagA.setAttribute('id', 'newA');
            tagA.setAttribute('href', 'about.html');
            tagA.text=tr;
    
            var tag_I_Show=document.createElement("i");
            tag_I_Show.setAttribute('id', 'showIt');
            tag_I_Show.onclick=showFullText;
            tag_I_Show.innerHTML="show";
    
            var tag_I_Hide=document.createElement("i");
            tag_I_Hide.setAttribute('id', 'HideIt');
            tag_I_Hide.onclick=hideFullText;
            tag_I_Hide.innerHTML="hide";
    
            document.body.appendChild(tagA);
            document.body.appendChild(tag_I_Show);
           
        function showFullText(){
            document.getElementById("newA").innerHTML=scope.text ;
            document.getElementById("showIt").remove();
            document.body.appendChild(tag_I_Hide);
        }
        function hideFullText(){
            var res = scope.text.substring( scope.number, scope.text.length);
            var tempText1="...";
            var tr=scope.text.replace(res,"...");
            document.getElementById("newA").innerHTML=tr;
            document.getElementById("HideIt").remove();
            document.body.appendChild(tag_I_Show);
        }
        }
    };
});

app.filter("truncateLink", function () {
    return function (text,number) {
        if (text.length > number) {
            var res = text.substring(number, text.length);
            var tr = text.replace(res, "...");
                 text = tr;
                 return text;
        }
    }
});