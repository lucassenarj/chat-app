import { createRoute } from '@tanstack/react-router'
import { useAppForm } from "./../hooks/sign-in-form.tsx";
import Chat, { chatFormOptions } from "./../components/Chat";
import type { RootRoute } from '@tanstack/react-router'

const ChatPage = () => {
  const form = useAppForm({
    ...chatFormOptions,
    validators: {
      onChange: ({ value }) => {
        const errors = {
          fields: {},
        } as {
          fields: Record<string, string>;
        }

        if (!value.message) {
          errors.fields.message = "Message is required";
        }

        return errors;
      }
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    }
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <h1>Chat</h1>
      <Chat form={form} />
      
      <form.AppForm>
        <form.SubmitButton label="Submit" />
      </form.AppForm>
    </form>
  )
};

export default (parentRoute: RootRoute) =>
  createRoute({
    path: '/chat',
    component: ChatPage,
    getParentRoute: () => parentRoute,
  })
