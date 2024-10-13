
let client: any;

export const initMailtrap = async () => {
  if (typeof window === "undefined") {
    const { MailtrapClient } = await import("mailtrap");
    client = new MailtrapClient({
      token: process.env.MAILTRAP_API_TOKEN!,
    });
  }
};

export const sendWelcomeEmail = async (toEmail: string, name: string) => {
  if (typeof window !== "undefined") {
    console.error("A sendWelcomeEmail csak a szerver oldalon hívható meg");
    return;
  }

  if (!client) {
    await initMailtrap();
  }

  const sender = { name: "AI Power", email: "hello@demomailtrap.com" };

  await client.send({
    from: sender,
    to: [{ email: toEmail }],
    subject: "Hello ez egy automatikus üzenet. (NE VÁLASZOLJ!)",
    html: `
      <h1>Sikeresen regisztráltál a bejegyzéskészitő alkalmazásba ${name}!</h1>
      <p>Kezdj bele AI segítségével és legyenek neked a legszebb bejegyzéseid..</p>
    `,
  });
};
