import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
export default function PageBreadcrumb({
  links,
}: {
  links: { name: string; href?: string }[]
}) {
  return (
    <div className="relative mx-auto max-w-5xl border-x border-y p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((link, index) =>
            link?.href ? (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={link.href}>{link.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{link.name}</BreadcrumbPage>
              </BreadcrumbItem>
            )
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
