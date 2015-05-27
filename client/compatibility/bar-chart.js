var BarChart = {
  draw: function(id, data, options){
    var cfg = {
  	 w: 200,
  	 h: 200,
  	 TranslateX: 50,
  	 TranslateY: 10,
  	 ExtraWidthX: 100,
  	 ExtraWidthY: 100,
  	 color: d3.scale.category10(),
     showlabels: true
  	};
  	
  	if('undefined' !== typeof options){
  	  for(var i in options){
  		if('undefined' !== typeof options[i]){
  		  cfg[i] = options[i];
  		}
  	  }
  	}
  
  	var Format = d3.format('%');
  	d3.select(id).select("svg").remove();
  	
  	var svg = d3.select(id)
  			.append("svg")
  			.attr("width", cfg.w+cfg.ExtraWidthX)
  			.attr("height", cfg.h+cfg.ExtraWidthY)
  			.append("g")
  			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
  
    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m-%d").parse;
    
    var x = d3.scale.ordinal().rangeRoundBands([0, cfg.w], .05);
    var y = d3.scale.linear().range([cfg.h, 0]);
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickFormat(d3.time.format("%Y-%m"));
    
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });
       
    x.domain(data.map(function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })]);
  
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + cfg.h + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
  
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Count");
  
    svg.selectAll("bar")
        .data(data)
      .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) { return x(d.date); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return cfg.h - y(d.value); });
  }
};