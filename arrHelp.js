

// const arrHelp = {
//     find: function (array, conditions) {
//         var result = null;
//         switch (typeof conditions) {
//             case "function":
//                 for (var element of array) {
//                     if (conditions(element)) {
//                         result = element;
//                         break;
//                     }
//                 }
//                 break;
//             case "object":
//                 for (var element of array) {
//                     var passedConditions = true;
//                     for (var i in conditions?.where) {
//                         if (element[i] != conditions?.where[i]) {
//                             passedConditions = false
//                         }
//                     }
//                     if (passedConditions) {
//                         result = element;
//                         break;
//                     }
//                 }
//                 break;
//         }
//         return result;
//     }
// }

// export default arrHelp;


Object.defineProperty(Array.prototype, "find", {
    value: function find(predicate) {
        var result = null;
        switch (typeof predicate) {
            case "function":
                for (var element of this) {
                    if (conditions(element)) {
                        result = element;
                        break;
                    }
                }
                break;
            case "object":
                for (var element of this) {
                    var passedConditions = true;
                    for (var i in predicate) {
                        if (element[i] != predicate[i]) {
                            passedConditions = false
                        }
                    }
                    if (passedConditions) {
                        result = element;
                        break;
                    }
                }
                break;
        }
        return result;
    },
    writable: true,
    configurable: true
})

Object.defineProperty(Array.prototype, "where", {
    value: function where(conditions) {
        var result = [];
        switch (typeof conditions) {
            case "function":
                for (var element of this) {
                    if (conditions(element)) {
                        result.push(element);
                    }
                }
                break;

        }
        return result;
    },
    writable: true,
    configurable: true
})
