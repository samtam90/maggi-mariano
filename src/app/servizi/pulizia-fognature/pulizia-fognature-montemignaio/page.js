import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montemignaio",
  canonical: links.servizi["pulizia-fognature"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
