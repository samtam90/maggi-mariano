import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Lucignano",
  canonical: links.servizi["pulizia-fognature"]["lucignano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
