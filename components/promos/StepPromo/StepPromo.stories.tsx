import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepPromo, { IStepPromo } from './StepPromo';
import { mockStepPromoProps } from './StepPromo.mocks';

export default {
  title: 'promos/StepPromo',
  component: StepPromo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StepPromo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepPromo> = (args) => (
  <StepPromo {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStepPromoProps.base,
} as IStepPromo;
