/**
 * Composable for handling translation arrays that work reliably in both dev and production
 */
export const useTranslationArrays = () => {
  const { t, tm } = useI18n()

  /**
   * Safely extract array translations that work in production
   */
  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    try {
      const items = tm(key) as any[]
      
      if (Array.isArray(items)) {
        return items.map((item, index) => {
          // Handle different possible formats from i18n compilation
          if (typeof item === 'string') {
            return item
          }
          
          // Try to get the actual translation value using the index
          try {
            return t(`${key}.${index}`)
          } catch {
            // Fallback to extracting from the i18n object structure
            if (item && typeof item === 'object') {
              return item.loc?.source || item.body?.static || item.static || item.value || String(item)
            }
            return String(item)
          }
        }).filter(Boolean) // Remove any empty values
      }
      
      // Fallback: try to access array items by index
      const result = []
      let index = 0
      while (true) {
        try {
          const value = t(`${key}.${index}`)
          if (value === `${key}.${index}`) break // Stop if translation key is returned as-is
          result.push(value)
          index++
        } catch {
          break
        }
      }
      
      return result.length > 0 ? result : fallback
    } catch (error) {
      console.error(`Error loading translation array for key: ${key}`, error)
      return fallback
    }
  }

  /**
   * Get translation objects with nested properties
   */
  const getTranslationObjectArray = (key: string, fallback: any[] = []): any[] => {
    try {
      const items = tm(key) as any[]
      
      if (Array.isArray(items)) {
        return items.map((item, index) => {
          if (typeof item === 'object' && item !== null) {
            const result: any = {}
            
            // Process each property in the object
            Object.keys(item).forEach(prop => {
              const value = item[prop]
              if (typeof value === 'string') {
                result[prop] = value
              } else if (value && typeof value === 'object') {
                result[prop] = value.loc?.source || value.body?.static || value.static || String(value)
              } else {
                // Try to get translation using full key path
                try {
                  result[prop] = t(`${key}.${index}.${prop}`)
                } catch {
                  result[prop] = String(value)
                }
              }
            })
            
            return result
          }
          return item
        })
      }
      
      return fallback
    } catch (error) {
      console.error(`Error loading translation object array for key: ${key}`, error)
      return fallback
    }
  }

  return {
    getTranslationArray,
    getTranslationObjectArray
  }
}