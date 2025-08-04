import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ancona",
  canonical: links.servizi["pulizia-fognature"]["ancona"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
