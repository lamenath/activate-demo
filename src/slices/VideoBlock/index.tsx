
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

  const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/VideoBlock.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default VideoBlock;
  