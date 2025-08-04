import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Impruneta",
  canonical: links.servizi["trasporto-acqua"]["impruneta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});