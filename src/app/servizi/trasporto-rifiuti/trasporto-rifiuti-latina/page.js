import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Latina",
  canonical: links.servizi["trasporto-rifiuti"]["latina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});