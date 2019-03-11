# visual-complexity

This site is an attempt at establishing a hierarchy of visual elements with growing visual complexity.
This endavour could be tackled from various different angles.
* We could try to estimate the complexity of the physical stimulus display
* We could try to order displays by their perceptual simplicity

I will start out with a physical description of each stimulus in the OpenGL shader language, but I will also try to demonstrate the perceptual relevance of each element.
A fragment shader is essentially a function that takes a position as input and returns a light mixture in the form of a RGB triplet for this position (it also returns a fourth component called an alpha value that we will mostly ignore).

0. [Uniform area]({{ site.baseurl }}/00/ganzfeld/)
1. [Smooth gradient]({{ site.baseurl }}/01/gradient/)
2. [Edge]({{ site.baseurl }}/02/edge/)
3. [Line]({{ site.baseurl }}/03/line/)
4. [Closed shape]({{ site.baseurl }}/04/shape/)
5. [Point]({{ site.baseurl }}/05/points/)

{% for post in site.posts reversed %}
{% include gallery_canvas.html file=post.file %}
{% endfor %}
