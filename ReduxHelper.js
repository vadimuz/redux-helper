export const ReduxArrayHelper = {

      append: (list, payload) => {
            if(!list || !Array.isArray(list)) return [payload]
            let newList = Array.from(list)
            newList.push(payload)
            return newList
      },

      prepend: (list, payload) => {
            if(!list || !Array.isArray(list)) return [payload]
            let newList = Array.from(list)
            newList.unshift(payload)
            return newList
      },

      insert: (list, payload, index) => {
            if(!list || !Array.isArray(list)) return [payload]
            let newList = Array.from(list)
            newList.splice(index, 0, payload)
            return newList
      },

      update: (list, payload, comparator = 'id') => {
            if(!list || !Array.isArray(list) || !payload) return list
            return Array.from(list).map(item => {
                  if (item[comparator] !== payload[comparator]) {
                        return item
                  }
                  return {
                        ...item,
                        ...payload
                  }
            })
      },

      updateByIndex: (list, payload, index) => {
            if(!list || !Array.isArray(list) || !payload) return list
            return Array.from(list).map((item, i) => {
                  if (index !== i) {
                    return item
                  }
                  return {
                    ...item,
                    ...payload
                  }
            })
      },

      delete: (list, payload, comparator = 'id') => {
            if(!list || !Array.isArray(list) || !payload) return list
            return list.filter((data) => data[comparator] !== payload[comparator])
      },

      deleteById: (list, payload, comparator = 'id') => {
            if(!list || !Array.isArray(list) || !payload) return list
            return list.filter((data) => data[comparator] !== payload)
      },

      deleteByIndex: (list, payload) => {
            if(!list || !Array.isArray(list) || (!payload && payload !== 0)) return list
            return list.splice(payload, 1)
      },

      find: (list, payload, compare = 'id') => {
            if(!list || !Array.isArray(list)) return false
            return list.find((data) => data[compare] === payload.id)
      },

      findById: (list, payload, compare = 'id') => {
            if(!list || !Array.isArray(list)) return false
            return list.find((data) => data[compare] === payload)
      },

      findIndexById: (list, payload, compare = 'id') => {
            if(!list || !Array.isArray(list)) return false
            return list.findIndex((data) => data[compare] === payload)
      },

      toObjectByKey: (list, key = 'id') => {
            if(!list || !Array.isArray(list)) return list
            let cache = {}
            list.forEach(data => {
                  cache[data[key]] = data
            })
            return cache
      },

      groupedToObjectByKey: (list, key = 'id') => {
            if(!list || !Array.isArray(list)) return list
            let cache = {}
            list.forEach(data => {
                  if(!cache[data[key]]) {
                        cache[data[key]] = [data] 
                  } else {
                        cache[data[key]].push(data)
                  }
            })
            return cache
      }

}