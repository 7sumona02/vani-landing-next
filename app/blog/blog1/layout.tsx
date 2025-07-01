export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='relative'
      >
        <div>
            <img src='/top.svg' className="w-full sticky top-0" />
        </div>
        {children}
      </body>
    </html>
  );
}