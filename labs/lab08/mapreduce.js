map = function() {
    emit({
        longitude: Math.floor(this.location.longitude)
    }, {
        count : 1
    });
}

reduce = function(key, values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i].count;
    }
    return { count : total };
}

results = db.runCommand({
    mapReduce: 'cities',
    map: map,
    reduce: reduce,
    out: 'cities.report'
})
