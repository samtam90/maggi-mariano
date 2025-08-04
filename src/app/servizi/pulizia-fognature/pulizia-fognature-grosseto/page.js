import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Grosseto",
  canonical: links.servizi["pulizia-fognature"]["grosseto"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});
