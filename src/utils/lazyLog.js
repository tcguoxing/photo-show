const lazyLog = (str) => {
    let strName=String(str === null || str === undefined ? '无效字段' : str ) + ': \r\n'
    console.log(strName, str)
    // console.log('layzyLog run.');
    // eval(`console.log(strName, str)`)
    // eval(`console.log('layzyLog run.')`)
}
export default lazyLog
