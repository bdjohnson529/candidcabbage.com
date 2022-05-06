---
---

const filters_topics = {"analytics-button" : [ '{{ site.data.settings.analytics | join: "', '" }}' ],
                        "languages-button" : [ '{{ site.data.settings.languages | join: "', '" }}' ],
                        "development-button" : [ '{{ site.data.settings.development | join: "', '" }}' ],
                        "serverless-button" : [ '{{ site.data.settings.serverless | join: "', '" }}' ],
                        "webapplications-button" : [ '{{ site.data.settings.webapplications | join: "', '" }}' ]
                       }

function FilterTopics(filter) {
  // main function

  var selected_filters = GetSelectedFilters();
  var clicked_filter = event.target.id;
  var active_filters = GetActiveFilters(selected_filters, clicked_filter);

  ResetButtons();
  MakeButtonsActive(active_filters);

  var active_topics = GetActiveTopicList(filters_topics, active_filters);

  ShowAllTopics();

  // only hide topics if there is a filter selected
  if (active_topics.length > 0) {
    HideInactiveTopics(active_topics);
  }

}

function HomePage() {
  // default configuration on page load

  var active_filters = [];

  ResetButtons();
  MakeButtonsActive(active_filters);

  var active_topics = GetActiveTopicList(filters_topics, active_filters);

  ShowAllTopics();

  // only hide topics if there is a filter selected
  if (active_topics.length > 0) {
    // HideInactiveTopics(active_topics);
  }

}


function GetSelectedFilters(){
  // build list of selected filters

  var selected_filters = []
  var selected_buttons = document.getElementsByClassName("nav-link active");

  for (let button of selected_buttons){
    selected_filters.push(button.id);
  }

  return selected_filters;
}

function GetActiveFilters(selected_filters, clicked_filter) {
  // constructs a list of active filters
  var active_filters = []

  if (selected_filters.includes(clicked_filter)) {
    for (var i=0; i < selected_filters.length; i++){
      if (selected_filters[i] != clicked_filter) {
        active_filters.push(selected_filters[i]);
      }
    }
  } else {
    active_filters.push(...selected_filters);
    active_filters.push(clicked_filter);
  }

  return active_filters;
}

function ResetButtons() {
  // instantiates all buttons as inactive
  var buttons = document.getElementsByClassName("nav-link");

  for (let button of buttons){
    button.classList.remove("active");
  }

}

function MakeButtonsActive(active_filters) {
  // add bootstrap styling to active filter buttons
  
  for (var i=0; i < active_filters.length; i++){
    button = document.getElementById(active_filters[i]);
    button.classList.add("active");
  }
}

function GetActiveTopicList(filters_topics, active_filters) {
  // use active filters to get a list of active topics

  var active_topics = []

  for (var i=0; i < active_filters.length; i++){
    active_topics.push(...filters_topics[active_filters[i]]);
  }

  return active_topics;
}

function ShowAllTopics() {
  // shows all topics on the page

  var topics = document.getElementsByClassName("topic");

  for (let topic of topics){
    topic.classList.remove("d-none");
  }
}

function HideInactiveTopics(active_filters) {
  // hides inactive topics on a page

  var topics = document.getElementsByClassName("topic");

  for (let topic of topics){
    if (!active_filters.includes(topic.id)){
      topic.classList.add("d-none");
    }
  }
}