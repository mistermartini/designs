$( function () {

  $("#query").width($("#home-search").innerWidth())

  function filter_es (data) {
    var final_options = $.map(data, function (val, i) {
      var source = val["_source"]
      // typeahead renders "value" key
      source["value"] = source["author"] + " - " + source["title"]
      source["id"] = val["_id"]
      return source
    })
    return final_options
  }

  function submit (datum) {
    var id = datum["id"]
    $.get("/poem/" + id, function (html) {
      $(".poem").replaceWith(html)
    })
  }

  $('#query').typeahead([{
    name: "guesses",
    limit: 5,
    dataType: "json",
    cache: false,
    remote: {
      url: "/complete/%QUERY",
      filter: filter_es
      }
    }]).bind("typeahead:selected", function (e, datum) {
      submit(datum)
  })

  $(".tt-dropdown-menu").width($("#query").outerWidth())
  $(".tt-hint").width($("#query").width())


  $("#home-search" ).submit(function( e ) {
    e.preventDefault();
  });

});



