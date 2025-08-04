import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montefalco",
  canonical: links.servizi["pulizia-fognature"]["montefalco"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
