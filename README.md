# visual-complexity

A study on a hierarchy of growing visual complexity, written in GLSL fragment shaders.

{% for shader in site.shader %}
{% include small_canvas.html code=shader.content %}
{% endfor %}
