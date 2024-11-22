
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

  const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/Testimonial.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default Testimonial;
  