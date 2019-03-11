# visual-complexity

A study on a hierarchy of growing visual complexity, written in GLSL fragment shaders.

{% for post in site.posts reversed %}
{% include gallery_canvas.html file=post.file %}
{% endfor %}

{% for shader in site.shader %}

[shader.title]({{ baseurl }}{{ shader.url }})

{% endfor %}
