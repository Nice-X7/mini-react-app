export const Challenge_2 = () => {
    const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'lincode', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  const errorMessage = messages.filter((message) => message.error === false)
  console.log(errorMessage)

}