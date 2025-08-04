import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Certaldo",
  canonical: links.servizi["trasporto-acqua"]["certaldo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});