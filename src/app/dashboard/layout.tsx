import Authnav from "../_components/nav/authnav"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav><Authnav /> </nav>
   <h2>Dashboard Layout</h2>
        {children}
      </section>
    )
  }