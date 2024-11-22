
  import { Content } from "@prismicio/client";
  import { SliceComponentProps } from "@prismicio/react";

  export type EditorialSectionProps = SliceComponentProps<Content.EditorialSectionSlice>;

  const EditorialSection = ({ slice }: EditorialSectionProps): JSX.Element => {
    return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div>
          <img src="/EditorialSection.png" width="100%"/>
        </div>
      </section>
    );
  };

  export default EditorialSection;
  