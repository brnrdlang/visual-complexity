---
title: The cornsweet illusion
categories: ['02']
file: cornsweet.frag
---
When the same linear gradient is put next to itself,
one side will look darker than the other even though they are physical identical.

{% assign shader=site.shader | where:"file", page.file  | first %}
{{ shader.content }}
