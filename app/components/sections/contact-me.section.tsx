import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export default function ContactMeSection() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden border-x">
      <form className="mx-auto flex max-w-3xl flex-col gap-4 p-6" method="post">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            <label className="mb-2 font-medium" htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="rounded border-border bg-background"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label className="mb-2 font-medium" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="rounded border-border bg-background"
            />
          </div>
        </div>

        <label className="font-medium" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded border-border bg-background"
        />

        <Button type="submit" className="mt-2">
          Send Message
        </Button>
      </form>
    </div>
  )
}
