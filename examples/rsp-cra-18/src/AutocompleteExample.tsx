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

let items: AutocompleteItem[] = [
  {id: '1', name: 'Foo'},
  {id: '2', name: 'Bar'},
  {id: '3', name: 'Baz'}
];

function classNames(
  cssModule: {[key: string]: string},
  ...values: Array<string | {[key: string]: boolean} | undefined>
): string {
  return values
    .flatMap(value => {
      if (!value) {
        return [];
      }

      if (typeof value === 'string') {
        return cssModule[value] || value;
      }

      return Object.keys(value)
        .filter(key => value[key])
        .map(key => cssModule[key] || key);
    })
    .join(' ');
}

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
