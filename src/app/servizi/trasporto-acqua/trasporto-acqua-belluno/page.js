import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Belluno",
  canonical: links.servizi["trasporto-acqua"]["belluno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});