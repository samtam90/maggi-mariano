import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lecco",
  canonical: links.servizi["pulizia-fognature"]["lecco"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});
