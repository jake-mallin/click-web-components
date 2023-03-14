import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroSearch, { IHeroSearch } from './HeroSearch';
import { mockHeroSearchProps } from './HeroSearch.mocks';

export default {
  title: 'hero-units/HeroSearch',
  component: HeroSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroSearch> = (args) => (
  <HeroSearch {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroSearchProps.base,
} as IHeroSearch;
