import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pratovecchio Stia",
  canonical: links.servizi["trasporto-rifiuti"]["pratovecchio-stia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});