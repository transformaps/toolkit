# Welcome

This content is under active development! The goal of this section is to provide __map resources__ to support discoverability of green projects as a complement to the [__Toronto Green Map__](//torontogreenmap.com).

## Contact

More suggestions are always welcome! If you have any thoughts, please:

- <i class="fa fa-envelope-o" aria-hidden="true"></i> email <info@torontogreenmap.com>
- <i class="fa fa-github" aria-hidden="true"></i> add a comment to the [issue tracker](https://github.com/torontogreenmap/y2gm-prototype/issues) for this website

## Why use this toolkit?

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

## Where can this toolkit help?

One of the main places people identify their organization and want to put a map is on their own <a href="#website-resources">website</a>! Whether they've got a list of places to map, (i.e.,farmers markets), or just want to make it clear where they are located.

Updates sent through <a href="#newsletter-resources">newsletters</a>, including upcoming events, are another place that maps can be used.

## Your Newsletter

### Embed a Map

The quickest way to use a map in a newsletter is through using an <a href="#iframe">__iframe__</a>, as with the website above. Once again, __Google Maps__ provides a quick and easy way to do this:

- <i class="fa fa-google" aria-hidden="true"></i> [Google Maps: Embed a map](https://support.google.com/maps/answer/3544418?hl=en)

### Markup Emails with Structured Data Event

When creating a newsletter to send out, you can create content what uses Structured Data which will integrate with Gmail and some other services better. Currently Mailchimp does not support this functionality internally, or through an integration. You can mark up your html (email) using a tool provided by Google:

  - <i class="fa fa-google" aria-hidden="true"></i> [Structured Data Markup Helper](https://www.google.com/webmasters/markup-helper/?hl=en_GB)

You can test your newsletter's structured data using Google's [Gmail Markup Tester](https://www.google.com/webmasters/markup-tester/)

## Your Website

<div class="alert alert-warning" role="alert"><strong>Note</strong>: This section currently covers <strong>Wordpress</strong>, if you have a different website setup please <a href="#contact">get in touch</a>!</div>

### Index Your Project on the Toronto Green Map

Instructions to add your project to the Toronto Green Map can be found on on the
[Index Your Project](index-your-project.md) page of this toolkit!

### Markup Your Site with Structured Data

A quick way to make your site or project more findable from Google or other search engines is through the use of Structured Dat. There are a few Wordpress plugins that allow for the generation of Structured Data. One that works well with Toronto Green Map is:

- <i class="fa fa-wordpress" aria-hidden="true"></i>&nbsp;[WP SEO Structured Data Schema](https://wordpress.org/plugins/wp-seo-structured-data-schema/)

You can test your website's structured data using Google's [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).

<div class="alert alert-info" role="alert"><strong>Data Details</strong>: The structured data schemas that cover information about an organization and website are: <a href="https://schema.org/WebSite" target="_blank"><!---_--->WebSite</a>, <a href="https://schema.org/LocalBusiness" target="_blank"><!---_--->LocalBusiness</a> (especially when location is important!), and <a href="https://schema.org/Organization" target="_blank"><!---_--->Organization</a> (all from <a href="https://schema.org/" target="_blank"><!---_--->schema.org</a>)</div>

### Embed a Map

Wordpress works well with __Google Maps__, you can embed a map to a specific location using an __iframe__:

- [Embed a Google Map with Wordpress](https://en.support.wordpress.com/google-maps/)

Additional Wordpress plugins allow for the ability to embed maps:

- <i class="fa fa-wordpress" aria-hidden="true"></i> [WP Google Maps (uses Google Maps)](https://wordpress.org/plugins/wp-google-maps/)
- <i class="fa fa-wordpress" aria-hidden="true"></i> [MapsMarker (uses OpenStreetMap)](https://www.mapsmarker.com/)

&nbsp;<br />

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title" id="iframe">&lt;iframe&gt;</h3>
  </div>
  <div class="panel-body">
    an iframe is short for inline frame, and is used for nested content, effectively putting another html document (could be a map, or more!) inside of another html document, it often is used to place content from another place into a site. Mozilla, the makers of the Firefox web browser, have an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" target="_blank">iframe element reference</a> on the Mozilla Developer Network.   <!---_ --->
  </div>
</div>

## Mapping Workshops

One of the best ways to learn more about mapping tools is to teach someone else! As part of the design project that created this website a Green Mapping workshop was held. All the resources are available online, and [Creative Commons licensed](https://creativecommons.org/licenses/by-sa/4.0/) so they can be shared and adapted:

- <i class="fa fa-github" aria-hidden="true"></i> [Green Mapping Workshop](https://github.com/torontogreenmap/workshop-greenmapping/) <a href="https://github.com/torontogreenmap/workshop-greenmapping/blob/master/workshop-greenmapping-v1.pdf">slides <i class="fa fa-file-pdf-o" aria-hidden="true"></i> .pdf</a> and [web mapping resources](https://github.com/torontogreenmap/workshop-greenmapping/blob/master/resources.md)
