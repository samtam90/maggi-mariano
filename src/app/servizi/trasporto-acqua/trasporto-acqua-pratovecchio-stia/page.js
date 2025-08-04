import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pratovecchio Stia",
  canonical: links.servizi["trasporto-acqua"]["pratovecchio-stia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});