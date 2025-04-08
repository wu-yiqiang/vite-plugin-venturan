export const showNewStrs = (strs: string) => {
    if (!strs) return
    const replacedStrs = strs.replaceAll('a', 'b')
    return replacedStrs
}

export const showNewStrs2 = (strs: string) => {
    if (!strs) return
    const replacedStrs = strs.replaceAll('c', 's')
    return replacedStrs
}