const defaultConstants = {
  uploads: null,
  subscribers: null,
  "video views": 1e10,
  viewsPerUpload: 5e4,
  created_year: null,
  created_date: null
};
const defaultTicks = {
  uploads: [0, 10, 100, 1000, 10000, 100000, 300000],
  subscribers: [0, 50e6, 100e6, 150e6, 200e6, 245e6],
  "video views": [0, 1e10, 50e9, 1e11, 228e9],
  viewsPerUpload: [0, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  created_year: [2005, 2010, 2015, 2020, 2025],
  created_date: [1, 10, 20, 31],
  video_views_for_the_last_30_days: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  lowest_monthly_earnings: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  highest_monthly_earnings: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  lowest_yearly_earnings: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  highest_yearly_earnings: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
  subscribers_for_last_30_days: [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10],
};
const scenesConfig = [
  {
    title: "Fame vs. Grind",
    xField: "uploads",
    yField: "subscribers",
    sizeField: "video views",
    colorField: "Country",
    xLabel: "Uploads",
    yLabel: "Subscribers",
    xTicks: [0, 10, 100, 1000, 10000, 100000, 300000],
    yTicks: [0, 50e6, 100e6, 150e6, 200e6, 245e6],
    symlogConstant: { x: null, y: null }, // setting the symlog constant as null defaults at to not having one below
    legend: {
      label: "Country",
      maxItems: 10,
      getValues: data => Array.from(new Set(data.map(d => d.Country)))
    },
    annotations: [
      {
        note: {
          title: "The Outlier",
          label: "Easiest way to reach top ten subs is to be a channel owned by YouTube.",
          wrap: 160
        },
        xVal: 1,
        yVal: 170000000,
        dx: 20,
        dy: -5,
        type: d3.annotationCalloutCircle,
        subject: {
          radius: 20
        }
      },
      {
        note: {
          label: "Trend here for Famous Musicians, Children Channels, and YouTube owned.",
          title: "Low Uploads"
        },
        xVal: -1.5,
        yVal: 135000000,
        dx: 20,
        dy: 260,
        type: d3.annotationCalloutRect,
        subject: {
          width: 200,
          height: 230
        }
      },
      {
        note: {
          label: "Trend by country, US (red) having a moderate count vs India (blue) a heavier count.",
          title: "Upload Count Split"
        },
        xVal: 3250,
        yVal: 36600000,
        dx: -5,
        dy: 55,
        type: d3.annotationXYThreshold,
        subject: {
          y1: 0,
          y2: 360
        }
      },
    ]
  },
  {
    title: "Monetization Machines",
    xField: "subscribers",
    yField: "video views",
    sizeField: "uploads",
    colorField: "channel_type",
    xLabel: "Subscribers",
    yLabel: "Video Views",
    xTicks: null,
    yTicks: [0, 1e10, 50e9, 1e11, 228e9],
    symlogConstant: { x: null, y: 1e10 }, // read index 0 chart comment on symlogConstant
    legend: {
      label: "Channel Type",
      maxItems: 10,
      getValues: data => Array.from(new Set(data.map(d => d.channel_type)))
    },
    annotations: [
      {
        note: {
          label: "YouTube owned seems to not track their own views.",
          title: "No Views?",
          wrap: 200,
        },
        xVal: 70e6,
        yVal: 1e9,
        dx: 160,
        dy: -10,
        type: d3.annotationCalloutRect,
        subject: { width: 300, height: 30 }
      },
      {
        note: {
          label: "With size of the circle representing the upload count, we can see how entertainment tends to have a larger count over music. In this similar trend, we can eyeball that entertainment tends to have more views / subscribers while music has a smaller ratio.",
          title: "Entertainment (red) vs Music (blue)",
          wrap: 400,
        },
        xVal: 55e6,
        yVal: 1e10,
        dx: 50,
        dy: 120,
        type: d3.annotationLabel,
      }
    ]
  },
  {
    title: "The Global Stage",
    xField: "createdDateObj", 
    yField: "subscribers",
    sizeField: "uploads",
    colorField: "Country",
    xLabel: "Time Created",
    yLabel: "Subscribers",
    xTicks: null,
    yTicks: [0, 50e6, 100e6, 150e6, 200e6, 245e6],
    symlogConstant: { x: null, y: null },
    legend: {
      label: "Country",
      maxItems: 10,
      getValues: data => Array.from(new Set(data.map(d => d.Country)))
    },
    annotations: [
      {
        note: {
          label: "We can identify that after a certain point in time, the amount of channels with larger upload counts (circle size) tends to decrease. ",
          title: "Upload Counts / Time",
          wrap: 250,
        },
        xVal: 1275e9,
        yVal: 36600000,
        dx: 0,
        dy: 50,
        type: d3.annotationXYThreshold,
        subject: {
          y1: 0,
          y2: 360
        }
      },
    ]

  },
  {
    title: "Choose Your Own Adventure",
    xField: "subscribers", // default
    yField: "uploads",     // default
    sizeField: "video views", // default
    colorField: "Country",    // default
    xLabel: "X Axis",
    yLabel: "Y Axis",
    xTicks: null,
    yTicks: null,
    symlogConstant: { x: null, y: null },
    legend: {
      label: "Color",
      maxItems: 10,
      getValues: data => Array.from(new Set(data.map(d => d[scenesConfig[3].colorField])))
    },
    annotations: []
  }
];


function renderLegend({
  target,
  values,
  color,
  label = '',
  maxItems = 10
}) {
  const legendDivId = target.replace('#', '') + '-legend';
  d3.select('#' + legendDivId).remove();

  const svgNode = document.querySelector(target);
  let legendDiv = document.createElement('div');
  legendDiv.id = legendDivId;
  legendDiv.style.display = 'flex';
  legendDiv.style.flexWrap = 'wrap';
  legendDiv.style.marginTop = '10px';
  legendDiv.style.maxWidth = '650px';
  legendDiv.style.gap = '8px';
  legendDiv.style.alignItems = 'center';
  legendDiv.style.fontSize = '13px';
  if (label) {
    const legendLabel = document.createElement('span');
    legendLabel.textContent = label + ': ';
    legendLabel.style.fontWeight = 'bold';
    legendLabel.style.marginRight = '10px';
    legendDiv.appendChild(legendLabel);
  }
  const shown = values.slice(0, maxItems);
  shown.forEach(val => {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.marginRight = '12px';
    const swatch = document.createElement('span');
    swatch.style.display = 'inline-block';
    swatch.style.width = '16px';
    swatch.style.height = '16px';
    swatch.style.background = color(val);
    swatch.style.marginRight = '6px';
    swatch.style.border = '1px solid #888';
    item.appendChild(swatch);
    const labelSpan = document.createElement('span');
    labelSpan.textContent = val;
    item.appendChild(labelSpan);
    legendDiv.appendChild(item);
  });
  if (values.length > maxItems) {
    const more = document.createElement('span');
    more.textContent = `+${values.length - maxItems} more`;
    more.style.marginLeft = '8px';
    legendDiv.appendChild(more);
  }
  if (svgNode && svgNode.parentNode) {
    svgNode.parentNode.insertBefore(legendDiv, svgNode.nextSibling);
  }
}

let currentSceneIndex = 0;

let cyoaSelections = {
  xField: "subscribers",
  yField: "uploads",
  sizeField: "video views",
  colorField: "Country"
};

function renderCYOAControls(data, sceneConfig, target) {
  const controlsId = 'cyoa-controls';
  let controlsDiv = document.getElementById(controlsId);
  if (controlsDiv && controlsDiv.parentNode) {
    controlsDiv.parentNode.removeChild(controlsDiv);
  }
  controlsDiv = document.createElement('div');
  controlsDiv.id = controlsId;
  controlsDiv.style.display = 'block';
  controlsDiv.style.width = '100%';
  controlsDiv.style.background = 'rgba(255,255,255,0.95)';
  controlsDiv.style.padding = '8px 0 8px 0';
  controlsDiv.style.borderRadius = '6px';
  controlsDiv.style.boxSizing = 'border-box';
  controlsDiv.style.fontSize = '15px';
  controlsDiv.style.margin = '0 0 18px 0';
  controlsDiv.style.opacity = '0';
  controlsDiv.style.transform = 'translateY(-40px)';
  controlsDiv.style.transition = 'opacity 1.2s cubic-bezier(0.77,0,0.175,1), transform 1.2s cubic-bezier(0.77,0,0.175,1)';
  controlsDiv.innerHTML = '';

  const numericFields = [
    "rank",
    "subscribers",
    "video views",
    "uploads",
    "video_views_for_the_last_30_days",
    "lowest_monthly_earnings",
    "highest_monthly_earnings",
    "lowest_yearly_earnings",
    "highest_yearly_earnings",
    "subscribers_for_last_30_days",
    "created_year",
    "created_date",
    "viewsPerUpload"
  ];
  const categoricalFields = [
    "category",
    "Country",
    "channel_type",
    "created_month"
  ];
  function makeDropdown(label, id, options, selected) {
    const displayLabel = label.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    const rowDiv = document.createElement('div');
    rowDiv.style.margin = '8px 0';
    rowDiv.style.display = 'flex';
    rowDiv.style.alignItems = 'center';
    const labelEl = document.createElement('label');
    labelEl.textContent = displayLabel + ': ';
    labelEl.style.fontWeight = 'bold';
    labelEl.style.marginRight = '10px';
    const select = document.createElement('select');
    select.id = id;
    options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt;
      o.textContent = opt.replace(/_/g, ' ').replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      if (opt === selected) o.selected = true;
      select.appendChild(o);
    });
    labelEl.appendChild(select);
    rowDiv.appendChild(labelEl);
    return rowDiv;
  }
  // Add dropdowns with initial hidden style for staggered animation
  const dropdowns = [
    makeDropdown('x axis', 'cyoa-x', numericFields, cyoaSelections.xField),
    makeDropdown('y axis', 'cyoa-y', numericFields, cyoaSelections.yField),
    makeDropdown('size', 'cyoa-size', numericFields, cyoaSelections.sizeField),
    makeDropdown('color', 'cyoa-color', categoricalFields, cyoaSelections.colorField)
  ];
  dropdowns.forEach((dd, i) => {
    dd.style.opacity = '0';
    dd.style.transform = 'translateY(-20px)';
    dd.style.transition = 'opacity 0.7s cubic-bezier(0.77,0,0.175,1), transform 0.7s cubic-bezier(0.77,0,0.175,1)';
    controlsDiv.appendChild(dd);
  });
  const chartMain = document.querySelector(target);
  if (chartMain && chartMain.parentNode) {
    chartMain.parentNode.insertBefore(controlsDiv, chartMain);
    if (sceneConfig === scenesConfig[3]) {
      chartMain.style.transition = 'margin-top 0.7s cubic-bezier(0.77,0,0.175,1)';
      chartMain.style.marginTop = '0px';
      setTimeout(() => {
        controlsDiv.style.opacity = '1';
        controlsDiv.style.transform = 'translateY(0)';
        dropdowns.forEach((dd, i) => {
          setTimeout(() => {
            dd.style.opacity = '1';
            dd.style.transform = 'translateY(0)';
          }, 120 + i * 120);
        });
      }, 700);
    }
  }
  // Do you hear what I hear
  controlsDiv.querySelectorAll('select').forEach(sel => {
    sel.onchange = function() {
      cyoaSelections = {
        xField: controlsDiv.querySelector('#cyoa-x').value,
        yField: controlsDiv.querySelector('#cyoa-y').value,
        sizeField: controlsDiv.querySelector('#cyoa-size').value,
        colorField: controlsDiv.querySelector('#cyoa-color').value
      };
      Object.assign(scenesConfig[3], cyoaSelections);
      scenesConfig[3].xTicks = defaultTicks[cyoaSelections.xField] || null;
      scenesConfig[3].yTicks = defaultTicks[cyoaSelections.yField] || null;
      scenesConfig[3].symlogConstant.x = defaultConstants[cyoaSelections.xField] ?? null;
      scenesConfig[3].symlogConstant.y = defaultConstants[cyoaSelections.yField] ?? null;
      scenesConfig[3].xLabel = cyoaSelections.xField.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      scenesConfig[3].yLabel = cyoaSelections.yField.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      updateScatterPlot(scenesConfig[3], data, target);
    };
  });
  scenesConfig[3].xTicks = defaultTicks[cyoaSelections.xField] || null;
  scenesConfig[3].yTicks = defaultTicks[cyoaSelections.yField] || null;
  scenesConfig[3].symlogConstant.x = defaultConstants[cyoaSelections.xField] ?? null;
  scenesConfig[3].symlogConstant.y = defaultConstants[cyoaSelections.yField] ?? null;
}

function updateScatterPlot(sceneConfig, data, target) {
  if (sceneConfig.xField === "createdDateObj") {
    data.forEach(d => {
      let y = +d.created_year, m = d.created_month, day = +d.created_date;
      let monthNum = 0;
      if (typeof m === 'string') {
        const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
        let idx = months.findIndex(mon => m.toLowerCase().startsWith(mon));
        monthNum = idx >= 0 ? idx : (isNaN(+m) ? 0 : (+m-1));
      } else if (typeof m === 'number') {
        monthNum = m-1;
      }
      if (!isNaN(y) && !isNaN(monthNum) && !isNaN(day)) {
        d.createdDateObj = new Date(y, monthNum, day).getTime();
      } else {
        d.createdDateObj = null;
      }
    });
  }
  if ((sceneConfig === scenesConfig[3]) && (cyoaSelections.xField === "viewsPerUpload" || cyoaSelections.yField === "viewsPerUpload" || cyoaSelections.sizeField === "viewsPerUpload")) {
    data.forEach(d => {
      d.viewsPerUpload = (+d["video views"] || 0) / ((+d.uploads) || 1);
    });
  }
  const controlsDiv = document.getElementById('cyoa-controls');
  const chartMain = document.querySelector(target);
  if (sceneConfig === scenesConfig[3]) {
    renderCYOAControls(data, sceneConfig, target);
    if (controlsDiv) controlsDiv.style.display = '';
    if (chartMain) {
      chartMain.style.transition = 'margin-top 0.7s cubic-bezier(0.77,0,0.175,1)';
      chartMain.style.marginTop = '0px';
    }
  } else {
    if (controlsDiv) controlsDiv.style.display = 'none';
    if (chartMain) {
      chartMain.style.transition = 'margin-top 0.7s cubic-bezier(0.77,0,0.175,1)';
      chartMain.style.marginTop = '0px';
    }
  }
  const svg = d3.select(target);
  const width = 650;
  // const height = 400;
  const isScene4 = sceneConfig === scenesConfig[3];
  console.log(isScene4);
  const height = isScene4 ? 500 : 400; // I spent 30min trying to figure out why it was broken... I flipped the 500 and 400
  const margin = { top: 30, right: 20, bottom: 70, left: 60 };

  console.log("setting height to " + height)
  svg.selectAll("*").remove();
  svg.attr("width", width)
     .attr("height", height);
    //  .style("height", height + "px"); // I was trying to make it clean but this is breaking my code

  data.forEach(d => {
    d[sceneConfig.xField] = +d[sceneConfig.xField];
    d[sceneConfig.yField] = +d[sceneConfig.yField];
    d[sceneConfig.sizeField] = +d[sceneConfig.sizeField];
  });


  // I have to programatically set the symlog here for the config at the top to still work with the symlog
  let x = d3.scaleSymlog();
  if (sceneConfig.symlogConstant?.x != null) {
    x = x.constant(sceneConfig.symlogConstant.x);
  }
  x = x.domain(d3.extent(data, d => d[sceneConfig.xField]))
       .range([margin.left, width - margin.right]);

  let y = d3.scaleSymlog();
  if (sceneConfig.symlogConstant?.y != null) {
    y = y.constant(sceneConfig.symlogConstant.y);
  }
  y = y.domain(d3.extent(data, d => d[sceneConfig.yField]))
       .range([height - margin.bottom, margin.top]);

  const r = d3.scaleSqrt()
    .domain(d3.extent(data, d => d[sceneConfig.sizeField]))
    .range([5, 40]);

  const colorDomain = Array.from(new Set(data.map(d => d[sceneConfig.colorField])));
  const color = d3.scaleOrdinal()
    .domain(colorDomain)
    .range(d3.schemeTableau10.concat(d3.schemeSet3, d3.schemePaired, d3.schemeCategory10)); 

    if (sceneConfig.legend) {
    const legendValues = sceneConfig.legend.getValues(data);
    renderLegend({
      target,
      values: legendValues,
      color,
      label: sceneConfig.legend.label,
      maxItems: sceneConfig.legend.maxItems
    });
  }



  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickValues(sceneConfig.xTicks).tickFormat(d3.format("~s")))
    .append("text")
    .attr("x", width - margin.right)
    .attr("y", 40)
    .attr("fill", "#222")
    .attr("text-anchor", "end")
    .text(sceneConfig.xLabel);

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickValues(sceneConfig.yTicks).tickFormat(d3.format("~s")))
    .append("text")
    .attr("x", 0)
    .attr("y", margin.top - 20)
    .attr("fill", "#222")
    .attr("text-anchor", "start")
    .text(sceneConfig.yLabel);

  let tooltip = d3.select('body').select('.d3-tooltip');
  if (tooltip.empty()) {
    tooltip = d3.select('body').append('div')
      .attr('class', 'd3-tooltip')
      .style('position', 'absolute')
      .style('pointer-events', 'none')
      .style('background', 'rgba(30,30,30,0.95)')
      .style('color', '#fff')
      .style('padding', '8px 12px')
      .style('border-radius', '6px')
      .style('font-size', '13px')
      .style('z-index', 1000)
      .style('box-shadow', '0 2px 8px rgba(0,0,0,0.2)')
      .style('display', 'none');
  }

  function formatAbbr(val) {
    if (val == null || isNaN(val)) 
      return '';
    const abs = Math.abs(val);
    if (abs >= 1e9) 
      return (val/1e9).toFixed(2).replace(/\.00$/, '') + 'B';
    else if (abs >= 1e6) 
      return (val/1e6).toFixed(2).replace(/\.00$/, '') + 'M';
    else if (abs >= 1e3) 
      return (val/1e3).toFixed(2).replace(/\.00$/, '') + 'K';
    else 
      return val.toString();
  }


  const annotations = sceneConfig.annotations.map(a => ({
    ...a,
    x: x(a.xVal),
    y: y(a.yVal)
  }));

  const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotations);

  const annotationG = svg.append("g")
    .attr("class", "annotation-group")
    .style("opacity", 0)
    .attr("transform", "translate(0, 30)");
  annotationG.call(makeAnnotations);
  annotationG.transition()
    .duration(900)
    .ease(d3.easeCubicOut)
    .style("opacity", 1)
    .attr("transform", "translate(0, 0)");


  // Sort data so smaller circles can appear on top to make sure all circles are clickable
  const sortedData = [...data].sort((a, b) => b[sceneConfig.sizeField] - a[sceneConfig.sizeField]);
  let selectedDatum = null;
  const circles = svg.selectAll("circle")
    .data(sortedData, d => d.Youtuber || d.Title || d.rank || d.id || JSON.stringify(d))
    .join(
      enter => enter.append("circle")
        .attr("cx", d => x(d[sceneConfig.xField]))
        .attr("cy", d => y(d[sceneConfig.yField]))
        .attr("r", 0)
        .attr("fill", d => color(d[sceneConfig.colorField]))
        .attr("opacity", 0.7)
        .attr("stroke", "#fff")
        .style("cursor", "pointer")
        .call(enter => enter.transition()
          .duration(1200)
          .ease(d3.easeCubicInOut)
          .attr("r", d => r(d[sceneConfig.sizeField]))
        ),
      update => update.call(update => update.transition()
        .duration(1200)
        .ease(d3.easeCubicInOut)
        .attr("cx", d => x(d[sceneConfig.xField]))
        .attr("cy", d => y(d[sceneConfig.yField]))
        .attr("r", d => r(d[sceneConfig.sizeField]))
        .attr("fill", d => color(d[sceneConfig.colorField]))
      ),
      exit => exit.call(exit => exit.transition()
        .duration(800)
        .ease(d3.easeCubicInOut)
        .attr("r", 0)
        .remove())
    )
    .on("mouseover", function(event, d) {
      if (selectedDatum !== d) {
        d3.select(this).attr("stroke", "#000").attr("stroke-width", 2);
      }
      tooltip.html(`
        <div style="font-weight:bold;font-size:15px;margin-bottom:4px;">${d.Youtuber || d["Youtuber"] || d["Title"] || ""}</div>
        <div><b>Channel Type:</b> ${d.channel_type || d["channel_type"] || ''}</div>
        <div><b>Subscribers:</b> ${formatAbbr(d.subscribers)}</div>
        <div><b>Uploads:</b> ${formatAbbr(d.uploads)}</div>
        <div><b>Views:</b> ${formatAbbr(d["video views"] || d.views)}</div>
      `)
        .style('display', 'block');
      const [mx, my] = d3.pointer(event, document.body);
      tooltip.style('left', (mx + 18) + 'px')
             .style('top', (my - 10) + 'px');
    })
    .on("mousemove", function(event, d) {
      const [mx, my] = d3.pointer(event, document.body);
      tooltip.style('left', (mx + 18) + 'px')
             .style('top', (my - 10) + 'px');
    })
    .on("mouseout", function(event, d) {
      tooltip.style('display', 'none');
      if (selectedDatum === d) {
        d3.select(this).attr("stroke", "#0074D9").attr("stroke-width", 3);
      } else {
        d3.select(this).attr("stroke", "#fff").attr("stroke-width", 1);
      }
    })
    .on("click", function(event, d) {
      if (selectedDatum !== null) {
        circles.each(function(dd) {
          if (dd === selectedDatum) {
            d3.select(this).attr("stroke", "#fff").attr("stroke-width", 1);
          }
        });
      }
      selectedDatum = d;
      d3.select(this).attr("stroke", "#0074D9").attr("stroke-width", 3); 
      const detailsList = document.getElementsByClassName('chart-details');
      let details = detailsList[0];
      if (detailsList.length > 1) {
        details = detailsList[currentSceneIndex] || detailsList[0];
      }
      if (details) {
        // Fade out, update, then fade in... slowly ;) lol jk quickly
        details.style.transition = 'opacity 0.5s cubic-bezier(0.77,0,0.175,1)';
        details.style.opacity = '0';
        setTimeout(() => {
          details.innerHTML = `
            <h3>${d.Youtuber || d["Youtuber"] || d["Title"] || ""}</h3>
            <div><b>Country:</b> ${d.Country || ''}</div>
            <div><b>Category:</b> ${d.category || d["category"] || ''}</div>
            <div><b>Channel Type:</b> ${d.channel_type || d["channel_type"] || ''}</div>
            <div><b>Rank:</b> ${d.rank || ''}</div>
            <div><b>Video Views Rank:</b> ${d.video_views_rank || ''}</div>
            <div><b>Country Rank:</b> ${d.country_rank || ''}</div>
            <div><b>Channel Type Rank:</b> ${d.channel_type_rank || ''}</div>
            <div><b>Subscribers:</b> ${formatAbbr(d.subscribers)}</div>
            <div><b>Uploads:</b> ${formatAbbr(d.uploads)}</div>
            <div><b>Views:</b> ${formatAbbr(d["video views"] || d.views)}</div>
            <div><b>Created:</b> ${d.created_year || ''} ${d.created_month || ''} ${d.created_date || ''}</div>
          `;
          details.style.opacity = '1';
        }, 400);
      }
    });
}

let globalData;
d3.csv("data/global_yt_stats_2023_top_100.csv").then(data => {
  globalData = data;
  updateScatterPlot(scenesConfig[currentSceneIndex], globalData, "#chart-main");
});


//TODO: fix the freaking arrow buttons. Make it grey out on 1 and 4
function nextScene() {
  currentSceneIndex = (currentSceneIndex + 1) % scenesConfig.length;
  updateScatterPlot(scenesConfig[currentSceneIndex], globalData, "#chart-main");
  d3.select("#scene-indicator").text((currentSceneIndex + 1) + " / 4");
}

function prevScene() {
  currentSceneIndex = (currentSceneIndex - 1 + scenesConfig.length) % scenesConfig.length;
  updateScatterPlot(scenesConfig[currentSceneIndex], globalData, "#chart-main");
  d3.select("#scene-indicator").text((currentSceneIndex + 1) + " / 4");

}

document.getElementById('next').addEventListener('click', nextScene);
document.getElementById('prev').addEventListener('click', prevScene);
