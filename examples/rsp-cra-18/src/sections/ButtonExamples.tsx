import {
  ActionButton,
  Button,
  Divider,
  Provider,
  ToggleButton
} from '@react-spectrum/s2';
import {style} from '@react-spectrum/s2/style' with {type: 'macro'};

export default function ButtonExamples() {
  return (
    <Provider>
      <h2 className={style({font: 'heading'})}>Buttons</h2>
      <div
        className={style({
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        })}>
        <Divider />
        <div>
          <ActionButton>Edit</ActionButton>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="negative" fillStyle="fill">
            Negative fill
          </Button>
          <Button variant="negative" fillStyle="outline">
            Negative outline
          </Button>
          {/* TODO(S2-upgrade): LogicButton is not available in @react-spectrum/s2 */}
          <Button variant="secondary">Logic Button</Button>
          <ToggleButton>ToggleButton</ToggleButton>
        </div>
      </div>
    </Provider>
  );
}
