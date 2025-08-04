import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Gualdo Tadino",
  canonical: links.servizi["pulizia-fognature"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});
