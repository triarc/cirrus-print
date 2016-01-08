var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        var mod = angular.module("tlPrint", []);
        mod.directive("ngPrint", [function () {
                var printSection = document.getElementById("printSection");
                // if there is no printing section, create one
                if (!printSection) {
                    printSection = document.createElement("div");
                    printSection.id = "printSection";
                    $(printSection).addClass("printable-container");
                    document.body.appendChild(printSection);
                }
                function printElement(elem) {
                    // clones the element you want to print
                    var domClone = elem.cloneNode(true);
                    printSection.appendChild(domClone);
                    window.print();
                    // remove the contents of the print!
                    $("#printSection").empty();
                }
                return {
                    restrict: "A",
                    link: function (scope, elem, attrs) {
                        elem.on("click", function () {
                            var elemToPrint = document.getElementById(attrs.printElementId);
                            if (elemToPrint) {
                                printElement(elemToPrint);
                            }
                        });
                        window.onafterprint = function () {
                            // clean the print section before adding new content
                            printSection.innerHTML = "";
                        };
                    }
                };
            }]);
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

