import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { authSchema } from './auth-schema';

export function LoginForm() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function handleSubmit(data: z.infer<typeof authSchema>) {
    console.log(data)
    form.reset()
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='text-white/75'>
              <FormLabel>Endereço de e-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  placeholder="exemplo@exemplo.com"
                  autoComplete='off'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='text-white/75'>
              <FormLabel>Sua senha</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='password'
                  placeholder="********"
                  autoComplete='off'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Entrar na plataforma</Button>
      </form>
    </Form>
  )
}