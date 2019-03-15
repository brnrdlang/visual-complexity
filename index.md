# Visual complexity

This site is an attempt at establishing a hierarchy of visual elements with growing visual complexity.
This endavour could be tackled from various different angles.
* We could try to estimate the complexity of the physical stimulus display
* We could try to order displays by their perceptual simplicity

I will start out with a physical description of each stimulus in the OpenGL shader language, but I will also try to demonstrate the perceptual relevance of each element.
A fragment shader is essentially a function that takes a position as input and returns a light mixture in the form of a RGB triplet for this position (it also returns a fourth component called an alpha value that we will mostly ignore).

## Two-dimensional visual displays
0. [Uniform area]({{ site.baseurl }}/00/uniform/)
1. [Smooth gradient]({{ site.baseurl }}/01/gradient/)

## Form emerges
2. [Edge]({{ site.baseurl }}/02/edge/)
3. [Shape]({{ site.baseurl }}/03/shape/)

## Perceptual dimensions
4. [Colour]({{ site.baseurl }}/04/colour/)
5. [Transparency]({{ site.baseurl }}/05/transparency/)
6. [Texture]({{ site.baseurl }}/06/texture/)
7. [Motion]({{ site.baseurl }}/07/motion/)

## Introducing the third dimension
8. [Depth]({{ site.baseurl }}/08/depth/)
9. [Geometry]({{ site.baseurl }}/09/geometry/)
10. [Material]({{ site.baseurl }}/10/material/)
11. [Illumination]({{ site.baseurl }}/11/illumination/)

# Gallery
{% for post in site.posts reversed %}
{% include gallery_canvas.html file=post.file %}
{% endfor %}
