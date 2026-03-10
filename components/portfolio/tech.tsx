export function Tech() {

const tech = [
{ name: "React", icon: "react" },
{ name: "Next.js", icon: "nextdotjs" },
{ name: "TypeScript", icon: "typescript" },
{ name: "Tailwind", icon: "tailwindcss" },
{ name: "WordPress", icon: "wordpress" },
{ name: "WooCommerce", icon: "woocommerce" },
{ name: "Tienda Nube", icon: "nuvemshop" },
{ name: "Shopify", icon: "shopify" },

{ name: "Vercel", icon: "vercel" },
{ name: "AWS", icon: "amazonaws" },

{ name: "Figma", icon: "figma" },
{ name: "Framer", icon: "framer" }

];

return ( <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"> <div className="max-w-6xl mx-auto">


    <p className="text-center text-sm text-muted-foreground mb-10 tracking-wide">
      Modern Technologies I Word With
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 items-center justify-items-center">

      {tech.map((item) => (
        <div
          key={item.name}
          className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <img
            src={`https://cdn.simpleicons.org/${item.icon}/9ca3af`}
            alt={item.name}
            className="h-8 w-auto"
          />
        </div>
      ))}

    </div>

  </div>
</section>

);
}
