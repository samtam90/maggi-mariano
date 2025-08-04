import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Subbiano",
  canonical: links.servizi["pulizia-fognature"]["subbiano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});
