import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ferrara",
  canonical: links.servizi["trasporto-acqua"]["ferrara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});