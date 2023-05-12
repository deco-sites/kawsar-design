import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import { asset, Head } from "$fresh/runtime.ts";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/tailwind.css")} rel="stylesheet" />
      </Head>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <props.Component />
    </>
  );
}
