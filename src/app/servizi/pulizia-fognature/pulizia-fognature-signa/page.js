import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Signa",
  canonical: links.servizi["pulizia-fognature"]["signa"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});
