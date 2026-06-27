import {
  Badge,
  Button,
  Content,
  Divider,
  Heading,
  InlineAlert,
  LabeledValue,
  Meter,
  ProgressBar,
  ProgressCircle,
  Provider,
  StatusLight,
  ToastContainer,
  ToastQueue
} from '@react-spectrum/s2';
import {style} from '@react-spectrum/s2/style' with {type: 'macro'};

export default function StatusExamples() {
  return (
    <Provider>
      <h2 className={style({font: 'heading'})}>Status</h2>
      <div
        className={style({
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        })}>
        <Divider />
        <Badge variant="positive">Licensed</Badge>
        <InlineAlert styles={style({width: 700})}>
          <Heading>Payment Information</Heading>
          <Content>
            Enter your billing address, shipping address, and payment method to complete your
            purchase.
          </Content>
        </InlineAlert>
        <LabeledValue label="File name" value="Budget.xls" />
        <Meter label="Storage space" variant="positive" value={35} />
        <ProgressBar label="Loading…" value={50} />
        <ProgressBar label="Loading…" isIndeterminate />
        <ProgressCircle aria-label="Loading…" value={50} />
        <ProgressCircle aria-label="Loading…" isIndeterminate />
        <StatusLight variant="positive">Ready</StatusLight>
        <ToastContainer />
        <Button
          styles={style({width: 110})}
          onPress={() => ToastQueue.positive('Toast is done!')}
          variant="primary">
          Show toast
        </Button>
      </div>
    </Provider>
  );
}
