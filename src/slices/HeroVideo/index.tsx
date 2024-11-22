
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type HeroVideoProps = SliceComponentProps<Content.HeroVideoSlice>;

  const HeroVideo = ({ slice }: HeroVideoProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/HeroVideo.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default HeroVideo;
  