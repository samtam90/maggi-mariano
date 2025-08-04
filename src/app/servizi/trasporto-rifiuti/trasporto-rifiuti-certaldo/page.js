import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Certaldo",
  canonical: links.servizi["trasporto-rifiuti"]["certaldo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});