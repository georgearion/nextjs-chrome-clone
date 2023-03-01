import Results from '@/pages/results';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'pages/Results',
  component: Results,
  argTypes: {},
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args) => (
  <Results {...args} />
);

export const Base = Template.bind({});
