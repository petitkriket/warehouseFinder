# Docs

## Implementation variations

Iterate gradually in complexity : html divs, mapped image, reactive svg etc...

- [x] Reactive html elements

- [ ] Branch react-image-mapper

Map reactive areas on an png image, dependant on image resolution
https://www.npmjs.com/package/react-image-mapper
see [demo](https://coldiary.github.io/react-image-mapper/)

- [x] Branch draw.io + svgr

Fully responsive, best pratcice but a bit ugly ATM.
Draw a SVG plan, convert it to react components using SVGR 💪
https://gregberge.com/fr/blog/svg-to-react-component-with-svgr

`$ @svgr/cli --icon --replace-attr-values "#063855=currentColor" ./assets/diagram.svg`

- [ ] Mapbox + react mapbox gl wrapper

Overkill 6 months project, out of scope.
https://docs.mapbox.com/mapbox-gl-js/example/3d-extrusion-floorplan/
https://docs.mapbox.com/mapbox.js/example/v1.0.0/imageoverlay-georeferenced/
https://blog.mapbox.com/build-better-buildings-with-indoor-maps-2c1cc42f08f2

## Quick reads

https://medium.com/soluto-engineering/react-class-features-vs-hooks-equivalents-745368dafdb3
https://fr.reactjs.org/docs/hooks-effect.html
https://daveceddia.com/usestate-hook-examples/

## Q/A

https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
