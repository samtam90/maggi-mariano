import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Umbertide",
  canonical: links.servizi["pulizia-fognature"]["umbertide"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});
