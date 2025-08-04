import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Dicomano",
  canonical: links.servizi["spurgo-pozzi-neri"]["dicomano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});