import {
  Divider,
  Form,
  ComboBox,
  ComboBoxItem,
  Button,
  TextField,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  NumberField,
  RangeSlider,
  SearchField,
  Slider,
  Switch,
  TextArea
} from '@react-spectrum/s2';
import {style, space} from '@react-spectrum/s2/style' with {type: 'macro'};

export default function FormExamples() {
  return (
    <>
      <h2>Forms</h2>
      <div className={style({display: 'flex', flexDirection: 'column', gap: space(10)})}>
        <Divider />
        <Form styles={style({maxWidth: 288})}>
          <ComboBox label="Favorite Animal">
            <ComboBoxItem id="red panda">Red Panda</ComboBoxItem>
            <ComboBoxItem id="cat">Cat</ComboBoxItem>
            <ComboBoxItem id="dog">Dog</ComboBoxItem>
            <ComboBoxItem id="aardvark">Aardvark</ComboBoxItem>
            <ComboBoxItem id="kangaroo">Kangaroo</ComboBoxItem>
            <ComboBoxItem id="snake">Snake</ComboBoxItem>
          </ComboBox>
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <RadioGroup label="Favorite pet">
            <Radio value="dogs">Dogs</Radio>
            <Radio value="cats">Cats</Radio>
            <Radio value="dragons">Dragons</Radio>
          </RadioGroup>
          <CheckboxGroup label="Favorite sports">
            <Checkbox value="soccer">Soccer</Checkbox>
            <Checkbox value="baseball">Baseball</Checkbox>
            <Checkbox value="basketball">Basketball</Checkbox>
          </CheckboxGroup>
          <NumberField label="Width" defaultValue={1024} minValue={0} />
          <RangeSlider label="Range" defaultValue={{start: 12, end: 36}} />
          <SearchField label="Search" />
          <Slider label="Cookies to buy" defaultValue={12} />
          <Switch>Low power mode</Switch>
          <TextArea label="Description" />
          <Button variant="accent">Click Me</Button>
        </Form>
      </div>
    </>
  );
}
