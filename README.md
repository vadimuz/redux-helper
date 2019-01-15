# Redux Array Helper

Effortless operations with Reducers.

Motivation - make operations with redux store as simple as possible and keep data immutable.

If you currently doing update like this.

```javascript
export default function example(state = initialState, action) {

      switch (action.type) {

            case UPDATE: 
              return { 
                  ...state, 
                  list: state.sections.map(item => {
                        if (item._id !== action.payload._id) {
                              return item
                        }
                        return {
                              ...item,
                              ...action.payload
                        }
                  })
            }

            default:
                  return state;

      }

}
```

You can do this shorter:

```javascript

export default function example(state = initialState, action) {

      switch (action.type) {

            case UPDATE: 
              return { 
                  ...state, 
                  list: ReduxArrayHelper.update(state.list, action.payload)
            }

            default:
                  return state;

      }

}
```

And many other short operations of CRUD. More examples below.

### Installation

Copy ReduxHelper.js to your project. For example to src/utils/ folder.

### Importing

```javascript
import { ReduxArrayHelper } from '../utils/ReduxHelper'
```

### Methods 

| Method | First Arguments | Second Arguments | Third Arguments | Description |
| ------ | ------ | ------ | ------ | ------ |
| append | list | payload (obj) | - | Insert to the end of the list |
| prepend | list | payload (obj) | - | Insert to the end of the list |
| insert | list | payload (obj) | index | Insert to position of the list |
| update | list | payload (obj) | (optional) comparator | Update item of list by id in the payload |
| updateByIndex | list | payload (obj) | index (int) | Update item of list by payload |
| delete | list | payload (obj) | (optional) comparator | Delete item from the list by id in the payload |
| deleteById | list | payload (id) | (optional) comparator | Delete item from the list using payload |
| deleteByIndex | list | index (int) | - | Delete item from the list using payload |
| find | list | payload (obj) | (optional) comparator | Return the item from the list by id in the payload |
| findById | list | payload (id) | (optional) comparator | Return the item from the list by payload|
| findIndexById | list | payload (id) | (optional) comparator | Return index of item by payload |

if you are using MongoDB, pass the third argument COMPORATOR as string key '_id'.

```javascript
ReduxArrayHelper.update(state.list, action.payload, '_id')
```

### Payload from action.

```javascript
{
      id: 1,
      title: 'Redux the best!',
      size: 300,
}
```

### Reducer

```javascript
import {
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from '../var/Examples'

import { ReduxArrayHelper } from '../utils/ReduxHelper'

const initialState = {
      list: [
        { id: 1, title: 'Redux awesome!'}
      ],
}

export default function examples(state = initialState, action) {

      switch (action.type) {

            case CREATE_BOOK: 
                  return { ...state, list: ReduxArrayHelper.append(state.list, action.payload) }

            case UPDATE_BOOK: 
                  return { ...state, list: ReduxArrayHelper.update(state.list, action.payload) }

            case DELETE_BOOK: 
                  return { ...state, list: ReduxArrayHelper.delete(state.list, action.payload) }

            default:
                  return state;

      }

}
```