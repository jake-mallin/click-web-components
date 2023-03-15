import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBudget, { ISearchBudget } from './SearchBudget';
import { mockSearchBudgetProps } from './SearchBudget.mocks';

export default {
  title: 'Utility/SearchBudget',
  component: SearchBudget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchBudget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBudget> = (args) => (
  <SearchBudget {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchBudgetProps.base,
} as ISearchBudget;
