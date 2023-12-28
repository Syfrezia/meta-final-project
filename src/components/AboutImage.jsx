const AboutImage = ({ src, alt, className, style }) => (
  <img
    src={src}
    alt={alt}
    width={250}
    height={300}
    className={`rounded-4 ${className}`}
    style={{ objectFit: "cover", objectPosition: "80% 100%", ...style }}
  />
);

export default AboutImage;