import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bagno a Ripoli",
  canonical: links.servizi["pulizia-fognature"]["bagno-a-ripoli"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});
