import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pontassieve",
  canonical: links.servizi["trasporto-acqua"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});