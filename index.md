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
{% for shader in site.shader %}
{% include gallery_canvas.html shader=shader %}
{% endfor %}
