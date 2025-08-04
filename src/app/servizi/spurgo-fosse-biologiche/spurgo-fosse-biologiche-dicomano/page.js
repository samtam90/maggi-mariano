import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Dicomano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["dicomano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});
