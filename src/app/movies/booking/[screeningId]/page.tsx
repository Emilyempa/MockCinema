import BookingManager from "./BookingManager";

interface PageProps {
  params: Promise<{ screeningId: string }>;
}

export default async function BookingPage(props: PageProps) {
  const resolvedParams = await props.params;
  const screeningId = resolvedParams.screeningId;

  return <BookingManager screeningId={screeningId} />;
}
