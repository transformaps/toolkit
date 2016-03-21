# Welcome

This content is under active development! The goal of this section is to provide __map resources__ to support discoverability of green projects as a complement to the [__Toronto Green Map__](//torontogreenmap.com).

## Contact

More suggestions are always welcome! If you have any thoughts, please:

- <i class="fa fa-envelope-o"></i> email <info@torontogreenmap.com>
- <i class="fa fa-github"></i> add a comment to the [issue tracker](https://github.com/torontogreenmap/y2gm-prototype/issues) for this website

## Why use these resources?

Websites and applications increasingly seek to not only provide access to data, but also be found amidst the vast amount of information available on the Internet. For green projects, this __'structured data'__ could be *important details about the project, upcoming events and ways to get involved*.

In order to have events and websites found more easily in searches and to have newsletters provide better location data, groups can make use of __Semantic Web__ techniques.

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Web of Data and the Semantic Web</h3>
  </div>
  <div class="panel-body">
    The World Wide Web Consortium (W3C), an international group that works to develops web standards, is focused on building a <a href="https://www.w3.org/2013/data/" target="_blank">Web of Data</a> by providing standard data exchange formats, models, tools, and guidance as well as the <a href="https://www.w3.org/2001/sw/" target="_ blank" >Semantic Web</a>, to "provide a common framework that allows data to be shared and reused across application, enterprise, and community boundaries."
  </div>
</div>  

## Where can these resources help?

One of the main places people identify their organization and want to put a map is on their own <a href="#website-resources">website</a>! Whether they've got a list of places to map, (i.e.,farmers markets), or just want to make it clear where they are located.

Updates sent through <a href="#newsletter-resources">newsletters</a>, including upcoming events, are another place that maps can be used.

## Website Resources

<div class="alert alert-info" role="alert"><strong>Note</strong>: This section currently covers <strong>Wordpress</strong>, if you are using a difference website please <a href="#contact">get in touch</a>!</div>

### Markup your site with Structured Data

A quick way to make your site or project more findable from Google or other search engines is through the use of Structured Data, there are a few Wordpress plugins that allow for the generation of Strctured Data:

- <i class="fa fa-wordpress"></i> [Schema Creator by Raven](http://schema-creator.org/wordpress.php)

You can test your website's structured data using Google's [Structured Data Testing Tool Structured Data Testing Tool ](https://developers.google.com/structured-data/testing-tool/).

### Embedding a Map

Wordpress works well with __Google Maps__, you can embed a map to a specific location using an __iframe__:

- [Embed a Google Map with Wordpress](https://en.support.wordpress.com/google-maps/)

Additional Wordpress plugins allow for the ability to embed maps:

- <i class="fa fa-wordpress"></i> [WP Google Maps (uses Google Maps)](https://wordpress.org/plugins/wp-google-maps/)
- <i class="fa fa-wordpress"></i> [MapsMarker (uses OpenStreetMap)](https://www.mapsmarker.com/)

&nbsp;<br />

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title" id="iframe">&lt;iframe&gt;</h3>
  </div>
  <div class="panel-body">
    an iframe is short for inline frame, and is used for nested content, effectively putting another html document (could be a map, or more!) inside of another html document, it often is used to place content from another place into a site. Mozilla, the makers of the Firefox web browser, have an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" target="_blank">iframe element reference</a> on the Mozilla Developer Network.   <!---_ --->
  </div>
</div>  


## Newsletter Resources

### Embedding a Map

The quickest way to use a map in a newsletter is through using an <a href="#iframe">__iframe__</a>, as with the website above. Once again, __Google Maps__ provides a quick and easy way to do this:

- <i class="fa fa-google"></i> [Google Maps: Embed a map](https://support.google.com/maps/answer/3544418?hl=en)

### Markup Emails with Structured Data Event

When creating a newsletter to send out, you can create content what uses Structured Data which will integrate with Gmail and some other services better. Currently Mailchimp does not support this functionality internally, or through an integration. You can mark up your html (email) using a tool provided by Google:

  - <i class="fa fa-google"></i> [Structured Data Markup Helper](https://www.google.com/webmasters/markup-helper/?hl=en_GB)

You can test your newsletter's structured data using Google's [Gmail Markup Tester](https://www.google.com/webmasters/markup-tester/)
