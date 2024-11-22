
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type DarkCarrouselProps = SliceComponentProps<Content.DarkCarrouselSlice>;

  const DarkCarrousel = ({ slice }: DarkCarrouselProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/DarkCarrousel.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default DarkCarrousel;
  