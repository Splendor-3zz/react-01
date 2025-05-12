import { Ban, Book } from 'lucide-react';

import Alert from "./components/Ui/Alert/Alert";

const App = () => {
  return (
    <div>
      <Alert type = {"alert-danger"} icon = {<Ban size={20}/>} title = {"hola ezz"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Asperiores, voluptas doloremque et quidem veniam veritatis
           tenetur sed nesciunt {""} <a href="">cum aspernatur</a> quae ullam vitae repellendus?
          Quisquam natus excepturi doloribus delectus fugiat.
        </p>
      </Alert>
      <Alert type = {"alert-success"} icon = {<Book size={20}/>} title = {"hola Splendor"} description='keep going you have a few left' />
      <Alert type = {"alert-blue"} icon = {<Book size={20}/>} title = {"hola Splendor"} description='keep going you have a few left' />
      <Alert type = {"alert-yellow"} icon = {<Book size={20}/>} title = {"hola Splendor"} description='keep going you have a few left' />
      <Alert type = {"alert-white"} icon = {<Book size={20}/>} title = {"hola Splendor"} description='keep going you have a few left' />
    </div>
  );
};

export default App;
