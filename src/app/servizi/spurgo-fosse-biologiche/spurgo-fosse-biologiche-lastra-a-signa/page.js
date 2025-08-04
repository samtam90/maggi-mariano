import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lastra a Signa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});
