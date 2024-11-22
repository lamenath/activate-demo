
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type EditorialImageBlockProps = SliceComponentProps<Content.EditorialImageBlockSlice>;

  const EditorialImageBlock = ({ slice }: EditorialImageBlockProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/EditorialImageBlock.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default EditorialImageBlock;
  