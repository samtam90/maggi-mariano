import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Dicomano",
  canonical: links.servizi["trasporto-rifiuti"]["dicomano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});