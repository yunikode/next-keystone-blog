import { component, fields } from '@keystone-next/fields-document/component-blocks';

export const componentBlocks = {
    image: component({
      component: props => {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={props.imageSrc.value} alt='img-test'
            style={{
              minHeight: 200,
              padding: 16,
              width: '100%',
            }}
          />
            
          
        );
      },
      label: 'Image',
      props: {
        imageSrc: fields.text({
          label: 'Image URL',
          defaultValue: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
        }),
      },
    }),
  };