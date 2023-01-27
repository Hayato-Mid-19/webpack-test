const doc = document;
function conponent () {
  console.log('create element')
  const element = doc.createElement('div');
  const array = ['Hello', 'webpack'];
  element.innerHTML = _.join(array, ' ');
  return element;
}
doc.body.appendChild(conponent());
