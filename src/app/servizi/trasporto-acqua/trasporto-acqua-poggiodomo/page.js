import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Poggiodomo",
  canonical: links.servizi["trasporto-acqua"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});