import {
  Autocomplete,
  Input,
  Label,
  Menu,
  MenuItem,
  SearchField,
  Text,
  useFilter
} from 'react-aria-components';
import styles from './autocomplete.css';

interface AutocompleteItem {
  id: string;
  name: string;
}

function classNames(
  styles: Record<string, string>,
  className: string,
  states: Record<string, boolean>
): string {
  return [
    styles[className],
    ...Object.entries(states)
      .filter(([, isActive]) => isActive)
      .map(([state]) => styles[state])
  ]
    .filter(Boolean)
    .join(' ');
}

let items: AutocompleteItem[] = [
  {id: '1', name: 'Foo'},
  {id: '2', name: 'Bar'},
  {id: '3', name: 'Baz'}
];

export function AutocompleteExample() {
  let {contains} = useFilter({sensitivity: 'base'});

  return (
    <Autocomplete filter={contains}>
      <div>
        <SearchField autoFocus>
          <Label style={{display: 'block'}}>Test</Label>
          <Input />
          <Text style={{display: 'block'}} slot="description">
            Please select an option below.
          </Text>
        </SearchField>
        <Menu items={items} selectionMode="single">
          {item => (
            <MenuItem
              id={item.id}
              className={({isFocused, isSelected, isOpen}) =>
                classNames(styles, 'item', {
                  focused: isFocused,
                  selected: isSelected,
                  open: isOpen
                })
              }>
              {item.name}
            </MenuItem>
          )}
        </Menu>
      </div>
    </Autocomplete>
  );
}
