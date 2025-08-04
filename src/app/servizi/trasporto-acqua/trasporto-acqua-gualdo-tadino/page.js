import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Gualdo Tadino",
  canonical: links.servizi["trasporto-acqua"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});