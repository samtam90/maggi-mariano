import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Signa",
  canonical: links.servizi["trasporto-acqua"]["signa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});