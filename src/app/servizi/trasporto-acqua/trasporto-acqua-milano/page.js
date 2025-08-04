import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Milano",
  canonical: links.servizi["trasporto-acqua"]["milano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});