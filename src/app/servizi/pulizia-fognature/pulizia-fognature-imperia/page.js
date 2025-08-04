import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Imperia",
  canonical: links.servizi["pulizia-fognature"]["imperia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
