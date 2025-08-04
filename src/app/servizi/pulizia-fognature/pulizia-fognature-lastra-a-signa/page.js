import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lastra a Signa",
  canonical: links.servizi["pulizia-fognature"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});
