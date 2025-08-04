import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pratovecchio Stia",
  canonical: links.servizi["pulizia-fognature"]["pratovecchio-stia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});
