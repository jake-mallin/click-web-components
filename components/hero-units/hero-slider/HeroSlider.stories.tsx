import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroSlider, { IHeroSlider } from './HeroSlider';
import { mockHeroSliderProps } from './HeroSlider.mocks';

export default {
  title: 'hero-units/HeroSlider',
  component: HeroSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroSlider> = (args) => (
  <HeroSlider {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroSliderProps.base,
} as IHeroSlider;
