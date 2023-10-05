import { Button, Card, TextInput, Title } from "@tremor/react"
import { userActions } from "../hooks/userActions"
import { useState } from "react"
import { toast } from 'sonner'

export function CreateNewUser ()  {

  //Seteamos un resultado para informar si hubo error o fue correcta la carga de usario
  const [result, setResult] = useState<'ok' | 'error' | null>(null)


  //*5_ llamamos a la accion que queremos que se ejecute.
  const {addUser} = userActions()

  //*6_ Aca creamos una manera de recuperar lso datos de los inputs que necesitamos y lo usamos en el 'form'
  const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    if (!name || !email || !github){ //si este return se ejecuta, lo de abajo no se ejecutaria.
      toast.error('User not saved');
      return setResult('error');
    }

    // Llamar a la acción addUser con los datos del formulario
    addUser( name, email, github );

    setResult('ok');
    toast.success('User added successfully');


    // Limpiar los valores de los inputs
    form.reset();
    
  }// >> Tarea: Ver como manejar errores <<//


  return (
    <Card>
        <Title> Create New User</Title>
        <hr />

        <form onSubmit={handleSubmit}>
            <TextInput placeholder="Name" name="name"/>

            <TextInput placeholder="Email" name="email"/>

            <TextInput placeholder="Github User" name="github"/>

            <div>
                <Button type="submit">
                    Add New User
                </Button>
            </div>
        </form>
    </Card>
  )
}
