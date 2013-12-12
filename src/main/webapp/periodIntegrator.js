/**
 * @author jittagorn pitakmetagoon
 * create 12/12/2013
 * 
 * link : http://na5cent.blogspot.com/2013/12/integrate-period-algorithm-java.html
 */
var Period = function(start, end) {
    var start__ = start;
    var end__ = end;

    this.getStart = function() {
        return start__;
    };

    this.getEnd = function() {
        return end__;
    };

    this.setStart = function(start) {
        start__ = start;
    };

    this.setEnd = function(end) {
        end__ = end;
    };

    this.equals = function(object) {
        if (object.getStart() === start__ && object.getEnd() === end__) {
            return true;
        }

        return false;
    };

    this.toString = function() {
        return 'period {' + start__ + ', ' + end__ + '}';
    };
};

function empty(list) {
    return list === null || list.length === 0;
}

function notEmpty(list) {
    return !empty(list);
}

function isUndefined(object) {
    return typeof object === 'undefined';
}

function defined(object) {
    return !isUndefined(object);
}

function notDefined(object) {
    return isUndefined(object);
}

var PeriodIntegrator = function() {

    var periodSet__ = {};
    var periodList__;

    function getPeriodKey(period) {
        return period.getStart() + ':' + period.getEnd();
    }

    this.addPeriod = function(period) {
        var periodKey = getPeriodKey(period);
        if (notDefined(periodSet__[periodKey])) {
            periodSet__[periodKey] = period;
        }

        return this;
    };

    this.addAllPeriods = function(periodList) {
        if (notEmpty(periodList)) {
            for (var index in periodList) {
                this.addPeriod(periodList[index]);
            }
        }

        return this;
    };

    function toPeriodList() {
        var list = [];
        for (var index in periodSet__) {
            list.push(periodSet__[index]);
        }

        return list;
    }

    function sortPeriods() {
        periodList__ = toPeriodList();
        showPeriods("initial periods", periodList__);

        periodList__ = periodList__.sort(function(period1, period2) {
            if (period1.getStart() === period2.getStart()) {
                return period1.getEnd() - period2.getEnd();
            }

            return period1.getStart() - period2.getStart();
        });

        showPeriods("step 1 >> sort periods", periodList__);
    }

    function changeOverlap() {
        if (periodList__.length > 1) {
            for (var i = 1; i < periodList__.length; i++) {
                var before = periodList__[i - 1];
                var current = periodList__[i];

                if (current.getStart() < before.getEnd()) {
                    current.setStart(before.getEnd());
                }
            }
        }

        showPeriods("step 2 >> change overlap", periodList__);
    }

    function removePeriod(period) {
        for (var index in periodList__) {
            if (periodList__[index].equals(period)) {
                delete periodList__[index];
            }
        }
    }

    function removeIncorrect() {
        if (periodList__.length > 1) {
            for (var i = 1; i < periodList__.length; i++) {
                var periodI = periodList__[i];
                for (var j = i + 1; j < periodList__.length; j++) {
                    var periodJ = periodList__[j];
                    
                    if (defined(periodJ) && (isIncorrect(periodJ) || isSubPeriod(periodJ, periodI))) {
                        removePeriod(periodJ);
                        j--;
                    }
                }
            }
        }

        showPeriods("step 3 >> remove incorrect", periodList__);
    }

    function isIncorrect(period) {
        return period.getStart() >= period.getEnd();
    }

    function isSubPeriod(period1, period2) {
        return period1.getStart() >= period2.getStart() && period1.getEnd() <= period2.getEnd();
    }

    function integratePeriods() {
        if (periodList__.length > 1) {
            for (var i = 1; i < periodList__.length; i++) {
                var before = periodList__[i - 1];
                var current = periodList__[i];

                if (defined(current) && defined(before) && current.getStart() === before.getEnd()) {
                    current.setStart(before.getStart());
                    removePeriod(before);
                    i--;
                }
            }
        }

        showPeriods("step 4 >> integrate periods", periodList__);
    }

    function showPeriods(operationName, periodList) {
        console.log('');
        console.log(operationName);
        console.log('---------------------------------------------------------');

        for (var index in periodList) {
            var period = periodList[index];
            console.log(period.toString());
        }
    }

    this.integrate = function() {
        sortPeriods();
        changeOverlap();
        removeIncorrect();
        integratePeriods();
        
        return periodList__;
    };
};