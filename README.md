# visual-complexity

A study on a hierarchy of growing visual complexity, written in GLSL fragment shaders.

{% for post in site.posts %}
{% include small_canvas.html file=post.file %}
{% endfor %}
