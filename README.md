aspect ratio
width / height

```
       <picture>
            {/* Mobile image (375px and below) */}
            <source
            srcSet={dessert.image.mobile}
            media="(max-width: 375px)"
            />
            {/* Tablet image (376px to 768px) */}
            <source
            srcSet={dessert.image.tablet}
            media="(max-width: 768px)"
            />
            {/* Desktop image (default fallback) */}
            <img
            src={dessert.image.desktop}
            alt={dessert.name}
            className="dessert_image"
            />
        </picture>
```
