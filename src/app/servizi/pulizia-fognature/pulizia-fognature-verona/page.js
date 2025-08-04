import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Verona",
  canonical: links.servizi["pulizia-fognature"]["verona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
