import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Dicomano",
  canonical: links.servizi["pulizia-fognature"]["dicomano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});
