const expect = require('chai').expect;
const utimco = require('../services/utimco');

describe('Testing Sum of Nested Lists', () => {

    //test to see if you can open the file and receive data in the closure
    it('can open file', async function () {
        var closure = function (json) {
            expect(json).to.equal("ok");
        }

        utimco.openFile("C:\\Users\\rcatalano.GPLRINC\\Source\\Repos\\Test2\\Utimco\\Utimco\\test\\test.json", closure);
    });

    //make sure parse json returns a json object
    it('should be a json object', () => {
        expect(utimco.parseJson("{}")).to.eql({});
    });

    //calculate with clean data
    it('should calculate - without nulls', () => {
        var test = dataWithoutNull;
        expect(utimco.calculate(test.data)).to.eql(test.result);
    });

    //calculate with nulls in data
    it('should calculate - with nulls', () => {
        var test = dataWithNull;
        expect(utimco.calculate(test.data)).to.eql(test.result);
    });

    //calculate with nulls and negative numbers
    it('should calculate - with nulls & negs', () => {
        var test = dataWithNullAndNegative;
        expect(utimco.calculate(test.data)).to.eql(test.result);
    });

    //calculate with floats and negative
    it('should calculate - with floats pos/neg', () => {
        var test = dataWithFloat;
        expect(utimco.calculate(test.data)).to.eql(test.result);
    });




    //test data sets

    var dataWithoutNull = {
        result: [100001, 0, 30],
        data: [{
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": 100000,
                        "label": "Label 46"
                    }
                    ,
                    {
                        "id": 1,
                        "label": "Label 46"
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": 0,
                        "label": "Label 0"
                    },
                    {
                        "id": 93
                    },
                    {
                        "id": 85
                    },
                    {
                        "id": 54
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 10,
                        "label": "Label 46"
                    },
                    {
                        "id": 20,
                        "label": "Label 46"
                    }
                ]
            }
        }]
    };

    var dataWithNull = {
        result: [100001, 0, 30],
        data: [{
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": 100000,
                        "label": "Label 46"
                    }
                    ,
                    {
                        "id": 1,
                        "label": "Label 46"
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    null,
                    {
                        "id": 0,
                        "label": "Label 46"
                    },
                    null,
                    null,
                    null
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 10,
                        "label": "Label 46"
                    },
                    {
                        "id": 20,
                        "label": "Label 46"
                    }
                ]
            }
        }]
    };



    var dataWithNullAndNegative = {
        result: [-9, 0, -10],
        data: [{
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": 1,
                        "label": "Label 46"
                    }
                    ,
                    {
                        "id": -10,
                        "label": "Label 46"
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    null,
                    {
                        "id": 0,
                        "label": "Label 46"
                    },
                    null,
                    null,
                    null
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 10,
                        "label": "Label 46"
                    },
                    {
                        "id": -20,
                        "label": "Label 46"
                    }
                ]
            }
        }]
    };



    var dataWithFloat = {
        result: [-.5, 0, 30.5],
        data: [{
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": -1,
                        "label": "Label 46"
                    }
                    ,
                    {
                        "id": .5,
                        "label": "Label 46"
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 27
                    },
                    {
                        "id": 0,
                        "label": "Label 0"
                    },
                    {
                        "id": 93
                    },
                    {
                        "id": 85
                    },
                    {
                        "id": 54
                    }
                ]
            }
        }, {
            "menu": {
                "header": "menu a",
                "items": [
                    {
                        "id": 10,
                        "label": "Label 46"
                    },
                    {
                        "id": 20.5,
                        "label": "Label 46"
                    }
                ]
            }
        }]
    };

});